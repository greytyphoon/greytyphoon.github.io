/*
 * CHARACTER {
 *     name: string,
 *     player: object,
 *     level_asWritten: int,
 *     level_verified: int,
 *     experience_asWritten: int,
 *     experience_verified: int,
 *     reputation_asWritten: int,
 *     reputation_verified: int
 * }
 * PLAYER {
 *     name: string,
 *     gamesPlayed: date[],
 * }
 */
var allPlayers = [];
var allCharacters = [];
var unrecognizedCharacters = [];

function myFunction() {
	BuildCharactersArray();
	CalculateVerifiedValues();
	WarnAboutUnrecognizedCharacters();
	WarnAboutValues();
	CalculatePriority();
}

function BuildCharactersArray() {
	var mainSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Main");
	var mainValues = mainSheet.getRange("A10:H52").getValues()
		.concat(mainSheet.getRange("A65:H68").getValues());
	for (var i = 0; i < mainValues.length; i++) {
		var playerName = mainValues[i][0];
		var player = allPlayers.find(p => p.name === playerName);
		if (!player) {
			player = {
				"name": playerName,
				"gamesPlayed": [],
			};
			allPlayers.push(player);
		}

		var characterName = mainValues[i][1];
		var levelAsWritten = mainValues[i][2];
		var experienceAsWritten = mainValues[i][3];
		var reputationAsWritten = mainValues[i][4];
		var experienceAtStart = mainValues[i][7];
		var character = {
			"name": characterName,
			"player": player,
			"level_asWritten": levelAsWritten,
			"level_verified": 0,
			"experience_asWritten": experienceAsWritten,
			"experience_verified": experienceAtStart,
			"reputation_asWritten": reputationAsWritten,
			"reputation_verified": 0
		}
		allCharacters.push(character);
	}
}

function CalculateVerifiedValues() {
	var statSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stats for nerds");
	var statValues = statSheet.getRange("A2:J").getValues();
	for (var i = 0; i < statValues.length; i++) {
		var questName = statValues[i][3];
		if (questName.indexOf("Q: ") != 0) continue;

		var questDate = new Date(statValues[i][0]);
		var questExperience = statValues[i][1];
		var questReputation = statValues[i][2];
		FindAndIncrementCharacter(statValues[i][4], questExperience, questReputation, questDate);
		FindAndIncrementCharacter(statValues[i][5], questExperience, questReputation, questDate);
		FindAndIncrementCharacter(statValues[i][6], questExperience, questReputation, questDate);
		FindAndIncrementCharacter(statValues[i][7], questExperience, questReputation, questDate);
		FindAndIncrementCharacter(statValues[i][8], questExperience, questReputation, questDate);
		FindAndIncrementCharacter(statValues[i][9], questExperience, questReputation, questDate);
	}

	CalculateAndUpdateLevel();
}

function FindAndIncrementCharacter(name, experience, reputation, date) {
	if (!name || !/\S/.test(name)) return;

	// find a character whose full name contains the short name from "Stats for nerds".
	// This is error-prone, especially with shorter names like "Lod", "Daff", "Yon", or "Indy", but I think we're okay so far
	var character = allCharacters.find(c => c.name.indexOf(name) != -1);

	if (!character) {
		if (unrecognizedCharacters.indexOf(name) === -1) unrecognizedCharacters.push(name);
		return;
	}

	character.experience_verified += experience;
	character.reputation_verified += reputation;
	character.player.gamesPlayed.push(date);
}

function CalculateAndUpdateLevel() {
	for (var i = 0; i < allCharacters.length; i++) {
		allCharacters[i].level_verified = 2;
		if (allCharacters[i].experience_verified >= 2) allCharacters[i].level_verified = 3;
		if (allCharacters[i].experience_verified >= 8) allCharacters[i].level_verified = 4;
		if (allCharacters[i].experience_verified >= 20) allCharacters[i].level_verified = 5;
		if (allCharacters[i].experience_verified >= 40) allCharacters[i].level_verified = 6;
		if (allCharacters[i].experience_verified < 0) allCharacters[i].level_verified = 1;
	}
}

function WarnAboutUnrecognizedCharacters() {
	if (unrecognizedCharacters.length)
		Logger.log('Unrecognized characters: ' + unrecognizedCharacters.reduce((sum, c) => sum + ", " + c));
}

function WarnAboutValues() {
	for (var i = 0; i < allCharacters.length; i++) {
		if (allCharacters[i].level_verified != allCharacters[i].level_asWritten)
			Logger.log(allCharacters[i].name + "'s level is " + allCharacters[i].level_asWritten + " but should be " + allCharacters[i].level_verified);
		if (allCharacters[i].experience_verified != allCharacters[i].experience_asWritten)
			Logger.log(allCharacters[i].name + "'s experience is " + allCharacters[i].experience_asWritten + " but should be " + allCharacters[i].experience_verified);
		if (allCharacters[i].reputation_verified != allCharacters[i].reputation_asWritten)
			Logger.log(allCharacters[i].name + "'s reputation is " + allCharacters[i].reputation_asWritten + " but should be " + allCharacters[i].reputation_verified);
	}
}

function CalculatePriority() {
	Logger.log('Priority: ' + allPlayers
		.sort((p1, p2) => p1.gamesPlayed.length - p2.gamesPlayed.length)
		.map(p => p.name)
		.reduce((sum, c) => sum + ", " + c));
}
