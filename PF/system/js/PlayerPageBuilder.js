var Greytyphoon = { Characters: [] };

/* FCT add stuff to tables */
function addName(questChars, table) {
	let percentWidth = Math.round(10000 / (questChars.length)) / 100; // Precise to 2nd decimal
	let row = document.createElement("tr");
	for (let character of questChars) {
		let col = document.createElement("th");
		col.innerHTML = character.name;
		col.style = "width: " + percentWidth + "%;"
		row.appendChild(col);
	}
	let head = document.createElement("thead");
	head.appendChild(row);
	table.appendChild(head);
}
function addLine(questChars, table, fct) {
	let row = document.createElement("tr");
	for (let character of questChars) {
		let col = document.createElement("td");
		fct(character).forEach(node => col.appendChild(node));
		row.appendChild(col);
	}
	table.appendChild(row);
}
function buildLink(obj) {
	let lnk = document.createElement("a");
	lnk.href = obj.url;
	lnk.appendChild(document.createTextNode(obj.name));
	return lnk;
}

/* FCT LOOT */
function addSum(questChars, table) {
	let row = document.createElement("tr");
	for (let character of questChars) {
		let sum = 0;
		for (let item of character.loot) {
			sum += item.value;
		}
		for (let equip of character.equips) {
			sum += calcEquipPrice(equip);
		}

		let col = document.createElement("th");
		col.innerHTML = sum;
		row.appendChild(col);
	}
	let foot = document.createElement("tfoot");
	foot.appendChild(row);
	table.appendChild(foot);
}
function addEquipSlots(questChars, table) {
	var equipAccepts = ["weapon-m", "weapon-r", "armor", "shield"];
	for (let slot of equipAccepts)
	{
		if (questChars.some(character => character.equips.some(equip => equip.slot == slot)))
		{
			let row = document.createElement("tr");
			row.id = slot;
			addSingleEquipSlot(questChars, slot).forEach(e => row.appendChild(e));
			table.appendChild(row);
		}
	}
}
function addSingleEquipSlot(questChars, slot) {
	// The hard thing about this is, there might be two equips in the same slot;
	var charLoot = questChars.map(character => character.equips.filter(loot => loot.slot == slot));
	var returnValue = [];
	for (let loot of charLoot)
	{
		let col = document.createElement("td");
		returnValue.push(col);
		if (loot.length == 0)
			continue;
		if (loot.length == 1) {
			addEquip(loot[0]).forEach(e => col.appendChild(e));
			continue;
		}

		for (let equip of loot) {
			let equipDiv = document.createElement("div");
			addEquip(equip).forEach(e => equipDiv.appendChild(e));
			col.appendChild(equipDiv);
		}
	}
	return returnValue;
}
function addEquip(equip) {
	let returnValue = [];
	
	if (equip.material) {
		returnValue.push(buildLink(equip.material));
		returnValue.push(document.createTextNode(" "));
	}
	
	let isWeapon = equip.slot != "shield" && equip.slot != "armor";
	let fakeObject = { name: equip.name, url: equip.url || "https://d20pfsrd.com/equipment/" + (isWeapon ? "weapons" : "armor") };
	returnValue.push(buildLink(fakeObject));
	
	if (equip.bonus) {
		returnValue.push(document.createTextNode(", +" + equip.bonus));
		if (equip.enchants)
			for (let enchant of equip.enchants) {
				returnValue.push(document.createTextNode(" "));
				returnValue.push(buildLink(enchant));
			}
	}
	
	if (equip.quantity)
		returnValue.push(document.createTextNode(" x " + equip.quantity));
	
	let priceSpan = document.createElement("small");
	priceSpan.appendChild(document.createTextNode(calcEquipPrice(equip)));
	returnValue.push(priceSpan);
	
	return returnValue;
}
function calcEquipPrice(equip) {
	let isWeapon = equip.slot != "shield" && equip.slot != "armor";
	let price = equip.value || (isWeapon ? 300 : 150);
	if (equip.material)
		price += equip.material.value;
	
	let bonus = equip.bonus || 0;
	if (equip.enchants)
		for (let enchant of equip.enchants) {
			if (enchant.valueF)
				price += enchant.valueF;
			if (enchant.valueB)
				bonus += enchant.valueB;
		}
	price += bonus * bonus * (isWeapon ? 2000 : 1000);
	if (equip.quantity)
		price *= equip.quantity;
	return price;
}
function addItemSlots(questChars, table) {
	var slotAccepts = ["head", "headband", "eyes",
					   "neck", "shoulders", "chest",
					   "body", "belt", "wrists",
					   "hands", "ring", "feet", "none"];
	for (let slot of slotAccepts)
	{
		if (questChars.some(character => character.loot.some(loot => loot.slot == slot)))
		{
			let row = document.createElement("tr");
			row.id = slot;
			addSingleItemSlot(questChars, slot).forEach(e => row.appendChild(e));
			table.appendChild(row);
		}
	}
}
function addSingleItemSlot(questChars, slot) {
	// The hard thing about this is, there might be two items in the same slot (rings, none, etc).
	// charLoot is an array of arrays.
	var charLoot = questChars.map(character => character.loot.filter(loot => loot.slot == slot));
	var returnValue = [];
	for (let loot of charLoot)
	{
		let col = document.createElement("td");
		returnValue.push(col);
		if (loot.length == 0)
			continue;
		if (loot.length == 1) {
			addItem(loot[0]).forEach(e => col.appendChild(e));
			continue;
		}

		for (let item of loot) {
			let itemDiv = document.createElement("div");
			addItem(item).forEach(e => itemDiv.appendChild(e));
			col.appendChild(itemDiv);
		}
	}
	return returnValue;
}
function addItem(item) {
	let priceSpan = document.createElement("small");
	priceSpan.appendChild(document.createTextNode(item.value));
	return [buildLink(item), priceSpan];
}

/* FCT SPELLS */
function addSpellLevels(questChars, table) {
	for (let level = 0; level <= 9; level++)
	{
		if (questChars.some(character => character.spells.some(spell => spell.level == level)))
		{
			let row = document.createElement("tr");
			row.id = "spellLevel" + level;
			addSingleSpellLevel(questChars, level).forEach(e => row.appendChild(e));
			table.appendChild(row);
		}
	}
}
function addSingleSpellLevel(questChars, level) {
	// There will probably be two+ spells of the same level
	var charSpells = questChars.map(character => character.spells.filter(spell => spell.level == level));
	var returnValue = [];
	for (let spells of charSpells)
	{
		let col = document.createElement("td");
		returnValue.push(col);
		if (spells.length == 0)
			continue;
		if (spells.length == 1) {
			addSpell(spells[0]).forEach(e => col.appendChild(e));
			continue;
		}

		for (let s of spells) {
			let spellDiv = document.createElement("div");
			addSpell(s).forEach(e => spellDiv.appendChild(e));
			col.appendChild(spellDiv);
		}
	}
	return returnValue;
}
function addSpell(spell) {
	let aSpell = buildLink(spell);
	aSpell.className = spell.tag ? "spell " + spell.tag : "spell";
	return [aSpell];
}

/* FCT CHAR INFO --- they take a character, and return an array of html nodes. */
function addAlignment(character) {
	return [document.createTextNode(character.alignment)];
}
function addDeity(character) {
	if (!character.deity)
		return [];
	if (typeof character.deity == "string")
		return [document.createTextNode(character.deity)];

	/* Uncommon/custom gods can be links */
	return [buildLink(character.deity)];
}
function addLanguages(character) {
	return [document.createTextNode(character.languages)];
}
function addCompanion(character) {
	if (!character.meta.companion)
		return [];

	return [buildLink(character.meta.companion)];
}
function addSource(character) {
	if (!character.meta.source)
		return [];

	return [buildLink(character.meta.source)];
}
function addAncestry(character) {
	let lnk = buildLink(character.ancestry);

	if (!character.ancestry.archetypes)
		return [lnk];

	let archetypeDesc = document.createElement("small");
	archetypeDesc.appendChild(document.createTextNode(character.ancestry.archetypes.join(", ")));
	return [lnk, archetypeDesc];
}
function addClasses(character) {
	if (character.level.length == 1)
		return addClass(character.level[0]);

	let divArray = [];
	for (let lvl of character.level)
	{
		let currDiv = document.createElement("div");
		addClass(lvl).forEach(node => currDiv.appendChild(node));
		divArray.push(currDiv);
	}
	return divArray;
}
function addClass(level)
{
	if (!level.archetypes || level.archetypes.length == 0)
		return [buildLink(level), document.createTextNode(" " + level.quantity)];

	let classSpan = document.createElement("span");
	classSpan.appendChild(buildLink(level));
	classSpan.appendChild(document.createTextNode(" " + level.quantity));

	let spanArray = [classSpan];
	for (let archetype of level.archetypes)
	{
		let currSpan = document.createElement("small");
		currSpan.appendChild(buildLink(archetype));

		if (archetype.title && archetype.title != "")
			currSpan.appendChild(document.createTextNode(" " + archetype.title));

		spanArray.push(currSpan);
	}
	return spanArray;
}
function addStat(characterStat) {
	if (typeof characterStat === 'number')
	{
		return [document.createTextNode(characterStat)];
	}

	// We want to get: "22 (17, 2, 1, 2)"
	let spanBonuses = document.createElement("small");
	let sum  = characterStat[0];
	let desc = characterStat[0];
	let mods = characterStat.slice(1, characterStat.length);
	for (let mod of mods)
	{
		sum += mod.points;
		desc += ", <span title='" + mod.reason + "'>" + mod.points + "</span>";
	}
	spanBonuses.innerHTML = desc;
	return [document.createTextNode(sum + " "), spanBonuses];
}
function addStr(character) {
	return addStat(character.str);
}
function addDex(character) {
	return addStat(character.dex);
}
function addCon(character) {
	return addStat(character.con);
}
function addInt(character) {
	return addStat(character.int);
}
function addWis(character) {
	return addStat(character.wis);
}
function addCha(character) {
	return addStat(character.cha);
}
function addFeats(featArray) {
	if (!featArray || !featArray.length || featArray.length <= 0)
		return [];

	let returnValue = addSingleFeat(featArray[0]);
	let moreFeats = featArray.slice(1, featArray.length);
	for (let feat of moreFeats) {
		returnValue.push(document.createElement("br"));
		addSingleFeat(feat).forEach(e => returnValue.push(e));
	}
	return returnValue;
}
function addSingleFeat(feat) {
	let returnValue = [];
	if (feat.drawback)
		returnValue.push(document.createTextNode("Drawback: "));
	if (feat.title)
		returnValue.push(document.createTextNode(feat.title + ": "));
	if (feat.url)
	{
		let linkFeat = buildLink(feat);
		returnValue.push(linkFeat);
		if (feat.reason)
			linkFeat.title = feat.reason;
	}
	else
	{
		let textNode = document.createTextNode(feat.name);
		if (!feat.reason)
			returnValue.push(textNode);
		else {
			let textSpan = document.createElement("span");
			textSpan.title = feat.reason;
			textSpan.appendChild(textNode);
			returnValue.push(textSpan);
		}
	}
	return returnValue;
}
function addTraits(character) {
	return addFeats(character.traits);
}
function addStartingFeats(character) {
	return addFeats(character.startingFeats);
}
function addProgressFeats(character) {
	return addFeats(character.progressFeats);
}
function addTargetFeats(character) {
	return addFeats(character.targetFeats);
}

/* Main */
function main() {
	var questChars = Greytyphoon.Characters;
	var charInfoTable = document.getElementById("charInfo");
	var lootTable = document.getElementById("loot");
	var spellTable = document.getElementById("spells");
	var buildTable = document.getElementById("build");

	addName(questChars, charInfoTable);
	addLine(questChars, charInfoTable, addAlignment);
	addLine(questChars, charInfoTable, addDeity);
	addLine(questChars, charInfoTable, addLanguages);
	addLine(questChars, charInfoTable, addAncestry);
	addLine(questChars, charInfoTable, addClasses);
	addLine(questChars, charInfoTable, addStr);
	addLine(questChars, charInfoTable, addDex);
	addLine(questChars, charInfoTable, addCon);
	addLine(questChars, charInfoTable, addInt);
	addLine(questChars, charInfoTable, addWis);
	addLine(questChars, charInfoTable, addCha);
	if (questChars.some(character => character.meta.companion))
		addLine(questChars, charInfoTable, addCompanion);
	if (questChars.some(character => character.meta.source))
		addLine(questChars, charInfoTable, addSource);

	addName(questChars, lootTable);
	addEquipSlots(questChars, lootTable);
	addItemSlots(questChars, lootTable);
	addSum(questChars, lootTable);

	addName(questChars, spellTable);
	addSpellLevels(questChars, spellTable);

	addName(questChars, buildTable);
	addLine(questChars, buildTable, addTraits);
	addLine(questChars, buildTable, addStartingFeats);
	addLine(questChars, buildTable, addProgressFeats);
	// addLine(questChars, buildTable, addTargetFeats);
}