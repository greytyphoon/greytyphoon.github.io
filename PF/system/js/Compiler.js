var Greytyphoon = { Characters: [] };

function logError(val) {
	let p = document.createElement("p");
	p.className = "error";
	p.innerHTML = val;
	document.querySelector("body > .container").appendChild(p);
}
/* Main */
function main() {
	for (let character of Greytyphoon.Characters) {
		// Check the name first
		let name = character.name;
		if (!name || name == "" || typeof name != "string") {
			logError("Found a character with no name: " + character);
			continue;
		}

		checkOverProperties(character);
		checkMeta(character);
		checkAlignment(character);
		checkAncestry(character);
		checkLevels(character);
		checkStat(character.str);
		checkStat(character.dex);
		checkStat(character.con);
		checkStat(character.int);
		checkStat(character.wis);
		checkStat(character.cha);
		checkTraits(character);
		checkStartingFeats(character);
		checkProgressFeats(character);
		checkTargetFeats(character);
		checkSpells(character);
		checkEquipment(character);
		checkLoot(character);

		if (character.flair) OptionalChecks.checkFlair(character);
		if (character.deity) OptionalChecks.checkDeity(character);
		if (character.languages) OptionalChecks.checkLanguages(character);

		// closing message
		let p = document.createElement("p");
		p.innerHTML = "Finished inspecting " + name;
		document.querySelector("body > .container").appendChild(p);
	}
}

function checkMeta(character) {
	// Self-check
	if (!character.meta || typeof character.meta != "object") {
		logError(character.name + "'s meta property is wrong");
		return;
	}

	// Accepted properties
	var metaAccepts = ["quest", "owner", "companion", "source"];
	for (let metaProp in character.meta)
		if (!metaAccepts.includes(metaProp))
			logError(character.name + "'s meta's " + prop + " property is not supported");

	// Simple properties
	if (!character.meta.quest || typeof character.meta.quest != "string")
		logError(character.name + "'s meta.quest property is wrong");
	if (!character.meta.owner || typeof character.meta.owner != "string")
		logError(character.name + "'s meta.owner property is wrong");

	// Complex/children properties
	if (character.meta.companion) OptionalChecks.checkCompanion(character);
	if (character.meta.source) OptionalChecks.checkSource(character);
}
function checkAlignment(character) {
	// Alignment is mandatory. Must be a valid, two-letters alignment.
	if (!character.alignment) {
		logError(character.name + " has no alignment");
		return;
	}
	var alignmentAccepts = ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"];
	if (!alignmentAccepts.includes(character.alignment))
		logError(character.name + "'s alignment was not recognized");
}
function checkAncestry(character) {
	// Self-check
	if (!character.ancestry) {
		logError(character.name + " has no ancestry");
		return;
	}

	// Accepted properties
	var ancestryAccepts= ["name", "url", "archetypes"];
	for (let ancestryProp in character.ancestry)
		if (!ancestryAccepts.includes(ancestryProp))
			logError(character.name + "'s ancestry's " + ancestryProp + " property is not supported");

	// Simple properties
	if (!character.ancestry.name || typeof character.ancestry.name != "string")
		logError(character.name + "'s ancestry has no name.");
	if (!character.ancestry.url || typeof character.ancestry.url != "string")
		logError(character.name + "'s ancestry has no url.");

	// Complex/children properties
	if (character.ancestry.archetypes) {
		if (typeof character.ancestry.archetypes != "object" || character.ancestry.archetypes.constructor !== Array)
			logError(character.name + "'s ancestry's archetype  is not formatted correctly");
		else
			for (let ancestryArch of character.ancestry.archetypes)
				checkAncestryArchetype(ancestryArch);
	}
}
function checkAncestryArchetype(archetype) {
	// Self-check
	if (!archetype || typeof archetype != "string") {
		logError("Bad Ancestry Archetype");
	}
}
function checkLevels(character) {
	if (typeof character.level != "object" || character.level.constructor !== Array) {
		logError(character.name + "'s level is not formatted correctly");
		return;
	}
	if (character.level.length < 1)
		logError(character.name + " has no levels");
	for (let level of character.level)
		checkSingleLevel(level);
}
function checkSingleLevel(level) {
	// Self-check
	if (!level || typeof level != "object") {
		logError("Bad level");
		return;
	}

	// Accepted properties
	var levelAccepts = ["name", "url", "quantity", "archetypes"];
	for (let levelProp in level)
		if (!levelAccepts.includes(levelProp))
			logError("Invalid level property: " + levelProp);

	// Simple properties
	if (!level.name || typeof level.name != "string")
		logError("Bad level name");
	if (!level.url || typeof level.url != "string")
		logError("Bad level url");
	if (!level.quantity || typeof level.quantity != "number" || level.quantity < 1 || level.quantity > 20)
		logError("Bad level quantity");

	// Complex/children properties
	if (level.archetypes)
	{
		if (typeof level.archetypes != "object" || level.archetypes.constructor !== Array)
			logError("Level Archetype is not an array");
		else
			for (let archetype of level.archetypes)
				checkLevelArchetype(archetype);
	}
}
function checkLevelArchetype(archetype) {
	// Self-check
	if (!archetype || typeof archetype != "object") {
		logError("Archetype has bad format");
		return;
	}

	// Accepted properties
	var lvlArchetypeAccepts = ["title", "name", "url"];
	for (let archProp in archetype)
		if (!lvlArchetypeAccepts.includes(archProp))
			logError("Unknown property: " + archProp);

	// Simple properties
	if (!archetype.name || typeof archetype.name != "string")
		logError("Bad Archetype Name");
	if (!archetype.url || typeof archetype.url != "string")
		logError("Bad Archetype url");
	if (archetype.title && typeof archetype.title != "string")
		logError("Bad Archetype Title");
}
function checkStat(stat) {
	// Stat is either an int (no mods) or an array [base, {mod}, {mod}]
	if (typeof stat == "number") {
		if (stat < 7 || stat > 17)
			logError("Impossible unmodded stat");
		return;
	}
	if (typeof stat != "object" || stat.constructor !== Array) {
		logError("Invalid stat format:" + stat);
		return
	}

	if (typeof stat[0] != "number" || stat[0] < 7 || stat[0] > 18)
		logError("Invalid first stat");
	for (let statMod of stat.splice(1, stat.length))
		checkStatModifier(statMod);
}
function checkStatModifier(mod) {
	// Self-check
	if (!mod || typeof mod != "object") {
		logError("Bad stat mod");
		return;
	}

	// Accepted properties
	var statModAccepts = ["points", "reason"];
	for (let modProp in mod)
		if (!statModAccepts.includes(modProp))
			logError("Unsupported stat modifier property: " + modProp);

	// Simple Properties
	if (!mod.points || typeof mod.points != "number" || mod.points > 6 || mod.points < -6)
		logError("Invalid stat modifier points");
	if (!mod.reason || typeof mod.reason != "string")
		logError("Invalid stat modifier reason");
}
function checkTraits(character) {
	if (!character.traits || typeof character.traits != "object" || character.traits.constructor !== Array)
		logError("Bad Traits");
	else
		for (let trait of character.traits)
			checkSingleTrait(trait);
}
function checkSingleTrait(trait) {
	// Self-check
	if (!trait || typeof trait != "object") {
		logError("Bad Trait");
		return;
	}

	// Accepted properties
	var traitAccepts = ["name", "url", "drawback"];
	for (let traitProp in trait)
		if (!traitAccepts.includes(traitProp))
			logError("Unexpected property in trait");

	// Simple properties
	if (!trait.name || typeof trait.name != "string")
		logError("Bad trait name");
	if (!trait.url || typeof trait.url != "string")
		logError("Bad trait url");
	if (trait.drawback && typeof trait.drawback != "boolean")
		logError("Bad trait drawback");
}
function checkStartingFeats(character) {
	if (!character.startingFeats || typeof character.startingFeats != "object" || character.startingFeats.constructor !== Array)
		logError("Bad Starting Feats");
	else
		for (let sf of character.startingFeats)
			checkSingleFeat(sf);
}
function checkProgressFeats(character) {
	if (!character.progressFeats || typeof character.progressFeats != "object" || character.progressFeats.constructor !== Array)
		logError("Bad Progress Feats");
	else
		for (let sf of character.progressFeats)
			checkSingleFeat(sf);
}
function checkTargetFeats(character) {
	if (!character.targetFeats || typeof character.targetFeats != "object" || character.targetFeats.constructor !== Array)
		logError("Bad Target Feats");
	else
		for (let sf of character.targetFeats)
			checkSingleFeat(sf, true);
}
function checkSingleFeat(feat, isReasonOptional) {
	// Self-check
	if (!feat || typeof feat != "object") {
		logError("Bad Feat: " + feat);
		return;
	}

	// Accepted properties
	var featAccepts = ["name", "url", "title", "reason"];
	for (let featProp in feat)
		if (!featAccepts.includes(featProp))
			logError("Unsupported feat property: " + featProp);

	// Simple properties
	if (!feat.name || typeof feat.name != "string")
		logError("Bad feat name");
	if (feat.url && typeof feat.url != "string")
		logError("Bad feat url");
	if (feat.title && typeof feat.title != "string")
		logError("Bad feat title");
	if (feat.reason && typeof feat.reason != "string") // reason is present but the type is wrong
		logError("Bad feat reason");
	if (!feat.reason && !isReasonOptional) // reason is absent but it shouldn't
		logError("Feat reason is not optional in this case");

	if (feat.name == "Skill Focus" || feat.name == "Spell Focus" || feat.name == "Weapon Focus")
		logError("Untyped " + feat.name);
}
function checkSpells(character) {
	if (!character.spells || typeof character.spells != "object" || character.spells.constructor !== Array)
		logError("Bad Spells");
	else
		for (let spell of character.spells)
			checkSingleSpell(spell);
}
function checkSingleSpell(spell) {
	// Self-check
	if (!spell || typeof spell != "object") {
		logError("Bad spell: " + spell);
		return;
	}

	// Accepted properties
	var spellAccepts = ["level", "name", "url", "tag"];
	for (let spellProp in spell)
		if (!spellAccepts.includes(spellProp))
			logError("Unsupported spell property: " + spellProp);

	// Simple properties
	if (spell.level === null || spell.level === undefined || typeof spell.level != "number" || spell.level < 0 || spell.level > 9)
		logError("Bad spell level");
	if (!spell.name || typeof spell.name != "string")
		logError("Bad spell name");
	if (!spell.url || typeof spell.url != "string")
		logError("Bad spell url");
	if (spell.tag && typeof spell.tag != "string")
		logError("Bad spell tag");
}
function checkEquipment(character) {
	if (!character.equips || typeof character.equips != "object" || character.equips.constructor !== Array)
		logError("Bad Equipment");
	else
		for (let equip of character.equips)
			checkSingleEquip(equip);
}
function checkSingleEquip(weapon) {
	// Self-check
	if (!weapon || typeof weapon != "object") {
		logError("Bad weapon: " + weapon);
		return;
	}

	// Accepted properties
	var equipAccepts = ["slot", "value", "name", "url", "material", "bonus", "enchants", "quantity"];
	for (let equipProp in weapon)
		if (!equipAccepts.includes(equipProp))
			logError("Unsupported equipment property: " + equipProp);

	// Simple properties
	var slotAccepts = ["weapon-m", "weapon-r", "armor", "shield"];
	if (!weapon.slot || !slotAccepts.includes(weapon.slot))
		logError("Bad equipment slot");
	if (!weapon.name || typeof weapon.name != "string")
		logError("Bad equipment name");
	else if (weapon.name.includes("masterwork"))
		logError("Masterwork equipments are assumed");
	if (weapon.url && typeof weapon.url != "string") // Optional: always https://www.d20pfsrd.com/equipment/weapons if omitted
		logError("Bad equipment url");
	if (weapon.value && (typeof weapon.value != "number" || weapon.value < 1)) // Optional: always 300 (mwk) if omitted
		logError("Bad equipment value");
	if (weapon.bonus && (typeof weapon.bonus != "number" || weapon.bonus < 0 || weapon.bonus > 5))
		logError("Bad equipment bonus");
	if (weapon.quantity && (typeof weapon.quantity != "number" || weapon.quantity < 0))
		logError("Bad equipment quantity");

	// Complex/children properties
	if (weapon.material)
		checkEquipMaterial(weapon.material);
	if (weapon.enchants) {
		if (!weapon.bonus)
			logError("Can't add enchantments to a weapon without a bonus");
		if (typeof weapon.enchants != "object" || weapon.enchants.constructor !== Array)
			logError("Bad equipment enchants: not an array");
		else
			for (let enchant of weapon.enchants)
				checkEquipEnchant(enchant);
	}
}
function checkEquipMaterial(material) {
	// Self-check
	if (typeof material != "object") {
		logError("Bad weapon material");
		return;
	}

	// Accepted properties
	var equipAccepts = ["value", "name", "url"];
	for (let equipProp in material)
		if (!equipAccepts.includes(equipProp))
			logError("Unsupported material property: " + equipProp);

	// Simple properties
	if (!material.name || typeof material.name != "string")
		logError("Bad material name");
	if (!material.url || typeof material.url != "string")
		logError("Bad material url");
	if (!material.value || typeof material.value != "number" || material.value < 1)
		logError("Bad material value");
}
function checkEquipEnchant(enchant) {
	// Self-check
	if (!enchant || typeof enchant != "object") {
		logError("Bad weapon enchant");
		return;
	}

	// Accepted properties
	var equipAccepts = ["valueB", "valueF", "name", "url"];
	for (let equipProp in enchant)
		if (!equipAccepts.includes(equipProp))
			logError("Unsupported enchant property: " + equipProp);

	// Simple properties
	if (!enchant.name || typeof enchant.name != "string")
		logError("Bad enchant name");
	if (!enchant.url || typeof enchant.url != "string")
		logError("Bad enchant url");
	if (enchant.valueF && (typeof enchant.valueF != "number" || enchant.valueF < 1))
		logError("Bad enchant value(F)");
	if (enchant.valueB && (typeof enchant.valueB != "number" || enchant.valueB < 1 || enchant.valueB > 5))
		logError("Bad enchant value(B)");

	if (enchant.valueF && enchant.valueB)
		logError("Enchantment cannot have two values");
	if (!enchant.valueF && !enchant.valueB)
		logError("Enchantment must have one value");
}
function checkLoot(character) {
	if (!character.loot || typeof character.loot != "object" || character.loot.constructor !== Array)
		logError("Bad Loot");
	else
		for (let item of character.loot)
			checkSingleItem(item);
}
function checkSingleItem(item) {
	// Self-check
	if (!item || typeof item != "object") {
		logError("Bad item: " + item);
		return;
	}

	// Accepted properties
	var itemAccepts = ["slot", "value", "name", "url"];
	for (let itemProp in item)
		if (!itemAccepts.includes(itemProp))
			logError("Unsupported item property: " + itemProp);

	// Simple properties
	var slotAccepts = ["none", "head", "headband", "eyes",
					   "neck", "shoulders", "chest",
					   "body", "belt", "wrists",
					   "hands", "ring", "feet"];
	if (!item.slot || !slotAccepts.includes(item.slot))
		logError("Bad item slot");
	if (!item.value || typeof item.value != "number" || item.value < 0)
		logError("Bad item value");
	if (!item.name || typeof item.name != "string")
		logError("Bad item name");
	if (!item.url || typeof item.url != "string")
		logError("Bad item url");
}

var OptionalChecks = {
	checkCompanion: function (character) {
		// Self-check
		if (typeof character.meta.companion != "object") {
			logError(character.name + "'s companion is not defined properly");
			return;
		}

		// Accepted properties
		var companionAccepts = ["name", "flair", "url"];
		for (let companionProp in character.meta.companion)
			if (!companionAccepts.includes(companionProp))
				logError(character.name +  "'s companion's " + companionProp + " property is not supported");

		// Simple properties
		if (!character.meta.companion.name || typeof character.meta.companion.name != "string")
			logError(character.name + "'s companion has no name.");
		if (!character.meta.companion.url || typeof character.meta.companion.url != "string")
			logError(character.name + "'s companion has no url.");
		if (character.meta.companion.flair &&  typeof character.meta.companion.flair != "string")
			logError(character.name + "'s companion has an invalid flair");
	},
	checkSource: function (character) {
		// Self-check
		if (typeof character.meta.source != "object") {
			logError(character.name + "'s source is not defined properly");
			return;
		}

		// Accepted properties
		var sourceAccepts = ["name", "url"];
		for (let sourceProp in character.meta.source)
			if (!sourceAccepts.includes(sourceProp))
				logError(character.name +  "'s source's " + sourceProp + " property is not supported");

		// Simple properties
		if (!character.meta.source.name || typeof character.meta.source.name != "string")
			logError(character.name + "'s source has no name.");
		if (!character.meta.source.url || typeof character.meta.source.url != "string")
			logError(character.name + "'s source has no url.");
	},
	checkFlair: function (character) {
		// If Flair is present, it must be a string.
		if (typeof character.flair != "string")
			logError(character.name + "'s flair is not a string");
	},
	checkDeity: function (character) {
		// Deity is either a string (god's name) or an object {name, url}
		if (typeof character.deity == "string")
			return;
		if (typeof character.deity != "object") {
			logError(character.name + "'s deity is invalid");
			return;
		}

		// Accepted properties
		var deityAccepts = ["name", "url"];
		for (let deityProp in character.deity)
			if (!deityAccepts.includes(deityProp))
				logError(character.name + "'s deity's " + deityProp + " property is not supported");

		// Simple properties
		if (!character.deity.name || typeof character.deity.name != "string")
			logError(character.name + "'s deity has no name.");
		if (!character.deity.url || typeof character.deity.url != "string")
			logError(character.name + "'s deity has no url.");
	},
	checkLanguages: function (character) {
		// If Languages is present, it must be a string.
		if (typeof character.languages != "string")
			logError(character.name + "'s language is not a string");
	},
}
function checkOverProperties(character) {
	var allAccepted = [
		"name", "flair", "meta",
		"alignment", "deity", "languages",
		"ancestry", "level",
		"str", "dex", "con", "int", "wis", "cha",
		"traits", "startingFeats", "progressFeats", "targetFeats",
		"spells", "equips", "loot"
	];
	for (let prop in character)
		if (!allAccepted.includes(prop))
			logError(character.name + "'s " + prop + " property is not supported");
}