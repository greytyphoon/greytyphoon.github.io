Greytyphoon.Characters.push({
	name: "Ellera Latulipe",
	meta: {
		quest: "Manors & Genies",
		owner: "Elizabeth"
	},
	alignment: "CG",
	languages: "Common",
	ancestry: { name: "Human", url: "https://d20pfsrd.com/races/core-races/human" },
	level: [ {
		name: "Ranger",
		url: "https://d20pfsrd.com/classes/core-classes/ranger",
		quantity: 9,
		archetypes: [ { title: "Combat Style", name: "Archery", url: "https://d20pfsrd.com/classes/core-classes/ranger/ranger-combat-styles" } ]
	} ],
	"str": 16,
	"dex": [ 16, { points: 2, reason: "Racial" }, { points: 2, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
	"con": 10,
	"int": 10,
	"wis": 14,
	"cha": 10,
	traits: [],
	startingFeats: [
		{ name: "Power Attack", reason: "Human", url: "https://d20pfsrd.com/feats/combat-feats/power-attack-combat" },
		{ name: "Deadly Aim", reason: "Level 1", url: "https://d20pfsrd.com/feats/combat-feats/deadly-aim-combat" },
		{ title: "Favored Enemy", name: "Undead", reason: "Ranger 1" }
	],
	progressFeats: [
		{ name: "Rapid Shot", reason: "Ranger 2", url: "https://d20pfsrd.com/feats/combat-feats/rapid-shot-combat" },
		{ name: "Quick Draw", reason: "Level 3", url: "https://d20pfsrd.com/feats/combat-feats/quick-draw-combat" },
		{ name: "Endurance", reason: "Ranger 3", url: "https://d20pfsrd.com/feats/general-feats/endurance" },
		{ title: "Favored Terrain", name: "Underground", reason: "Ranger 3" },
		{ name: "Boon Companion", reason: "Level 5", url: "https://d20pfsrd.com/feats/general-feats/boon-companion" },
		{ title: "2nd Favored Enemy", name: "Dragon", reason: "Ranger 5" },
		{ name: "Manyshot", reason: "Ranger 6", url: "https://d20pfsrd.com/feats/combat-feats/manyshot-combat" },
		{ title: "2nd Favored Terrain", name: "Forest", reason: "Ranger 8" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "feather step", url: "https://d20pfsrd.com/magic/all-spells/f/feather-step" },
		{ level: 1, name: "keen senses", url: "https://d20pfsrd.com/magic/all-spells/k/keen-senses" },
		{ level: 1, name: "speak with animals", url: "https://d20pfsrd.com/magic/all-spells/s/speak-with-animals" },
		{ level: 2, name: "air step", url: "https://d20pfsrd.com/magic/all-spells/a/air-step" },
		{ level: 2, name: "stone call", url: "https://d20pfsrd.com/magic/all-spells/s/stone-call" },
	],
	equips: [
		{ slot: "weapon-m", value: 350, name: "Greasword" },
		{ slot: "weapon-r", value: 700, name: "Longbow [3]", bonus: 1,  enchants: [ { valueB: 1, name: "Flaming", url: "https://d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/flaming" } ] },
		{ slot: "armor", value: 1100, name: "Mithral Shirt", url: "https://d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" }
	],
	loot: [
		{ slot: "neck", value: 16000, name: "Amulet of Shield", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "chest", value: 10000, name: "Bane Baldric", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/baldric-bane" },
		{ slot: "feet", value: 4000, name: "Belt of Incredible Dexterity", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" }
	]
});