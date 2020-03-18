Greytyphoon.Characters.push({
	name: "Samari Tealeaf",
	meta: {
		quest: "Manors & Genies",
		owner: "Zivilyn"
	},
	alignment: "CG",
	deity: "Desna",
	languages: "Common, Hafling, Elven, Dwarven",
	ancestry: { name: "Halfling", url: "https://d20pfsrd.com/races/core-races/halfling" },
	level: [ { name: "Rogue", url: "https://d20pfsrd.com/classes/core-classes/rogue", quantity: 9 } ],
	"str": [ 12, { points: -2, reason: "Racial" } ],
	"dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
	"con": 12,
	"int": [ 14, { points: 1, reason: "Advancement" } ],
	"wis": 14,
	"cha": [ 8, { points: 2, reason: "Racial" } ],
	traits: [
		{ name: "Fate's Favored", url: "https://d20pfsrd.com/traits/faith-traits/fate-s-favored" },
		{ name: "Reactionary", url: "https://d20pfsrd.com/traits/combat-traits/reactionary" }
	],
	startingFeats: [
		{ name: "Weapon Finesse", reason: "Level 1", url: "https://d20pfsrd.com/feats/combat-feats/weapon-finesse-combat" }
	],
	progressFeats: [
		{ name: "Fast Stealth", reason: "Rogue 2", url: "https://d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo-rogue-talents/fast-stealth-ex" },
		{ name: "Deadly Aim", reason: "Level 3", url: "https://d20pfsrd.com/feats/combat-feats/deadly-aim-combat" },
		{ name: "Swift Poison", reason: "Rogue 4", url: "https://d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo-rogue-talents/swift-poison-ex" },
		{ name: "Piranha Strike", reason: "Level 5", url: "https://d20pfsrd.com/feats/combat-feats/piranha-strike-combat" },
		{ name: "Sniper's Eye", reason: "Rogue 6", url: "https://d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo-rogue-talents/sniper-s-eye-ex" },
		{ name: "Sacred Sneak Attack", reason: "Rogue 8", url: "https://d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo-rogue-talents/sacred-sneak-attack-su" }
	],
	targetFeats: [],
	spells: [],
	equips: [
		{ slot: "weapon-m", value: 302, name: "Dagger", bonus: 1, enchants: [ { valueB: 1, name: "UndeadBane", url: "https://d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/bane" } ] },
		{ slot: "weapon-m", value: 8302, name: "Dagger of Venom", url: "https://d20pfsrd.com/magic-items/magic-weapons/specific-magic-weapons/dagger-of-venom" },
		{ slot: "weapon-m", value: 302, name: "Dagger", quantity: 4 },
		{ slot: "weapon-r", value: 335, name: "Light Crossbow" },
		{ slot: "armor", value: 160, name: "Leather Armor" }
	],
	loot: [
		{ slot: "head", value: 1800, name: "Hat of Disguise", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/h-l/hat-of-disguise" },
		{ slot: "neck", value: 16000, name: "Amulet of Shield", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "chest", value: 10000, name: "Bane Baldric", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/baldric-bane" },
		{ slot: "ring", value: 300, name: "Thieve's Ring", url: "https://d20pfsrd.com/equipment/goods-and-services/tools-kits/#TOC-Thieves-Ring" },
		{ slot: "feet", value: 4000, name: "Belt of Incredible Dexterity", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "feet", value: 4800, name: "Slippers of Spider Climbing", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/slippers-of-spider-climbing" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" },
		{ slot: "none", value: 8100, name: "Deck of Illusions", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/deck-of-illusions" }
	]
});