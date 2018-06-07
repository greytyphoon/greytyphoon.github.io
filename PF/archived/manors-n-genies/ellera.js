Greytyphoon.Characters.push({
	name: "Ellera Latulipe",
	meta: {
		quest: "Manors & Genies",
		owner: "Elizabeth"
	},
	alignment: "CG",
	languages: "Common",
	ancestry: { name: "Human", link: "https://www.d20pfsrd.com/races/core-races/human" },
	level: [ {
		name: "Ranger",
		link: "https://www.d20pfsrd.com/classes/core-classes/ranger",
		quantity: 9,
		archetypes: [ { title: "Combat Style", name: "Archery", link: "https://www.d20pfsrd.com/classes/core-classes/ranger/ranger-combat-styles" } ]
	} ],
	"str": 16,
	"dex": [ 16, { points: 2, reason: "Racial" }, { points: 2, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
	"con": 10,
	"int": 10,
	"wis": 14,
	"cha": 10,
	traits: [],
	startingFeats: [
		{ name: "Power Attack", reason: "Human", link: "https://www.d20pfsrd.com/feats/combat-feats/power-attack-combat-final" },
		{ name: "Deadly Aim", reason: "Level 1", link: "https://www.d20pfsrd.com/feats/combat-feats/deadly-aim-combat" },
		{ title: "Favored Enemy", name: "Undead", reason: "Ranger 1" }
	],
	progressFeats: [
		{ name: "Rapid Shot", reason: "Ranger 2", link: "https://www.d20pfsrd.com/feats/combat-feats/rapid-shot-combat-final" },
		{ name: "Quick Draw", reason: "Level 3", link: "https://www.d20pfsrd.com/feats/combat-feats/quick-draw-combat-final" },
		{ name: "Endurance", reason: "Ranger 3", link: "https://www.d20pfsrd.com/feats/general-feats/endurance" },
		{ title: "Favored Terrain", name: "Underground", reason: "Ranger 3" },
		{ name: "Boon Companion", reason: "Level 5", link: "https://www.d20pfsrd.com/feats/general-feats/boon-companion" },
		{ title: "2nd Favored Enemy", name: "Dragon", reason: "Ranger 5" },
		{ name: "Manyshot", reason: "Ranger 6", link: "https://www.d20pfsrd.com/feats/combat-feats/manyshot-combat-final" },
		{ title: "2nd Favored Terrain", name: "Forest", reason: "Ranger 8" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "feather step", link: "https://www.d20pfsrd.com/magic/all-spells/f/feather-step" },
		{ level: 1, name: "keen senses", link: "https://www.d20pfsrd.com/magic/all-spells/k/keen-senses" },
		{ level: 1, name: "speak with animals", link: "https://www.d20pfsrd.com/magic/all-spells/s/speak-with-animals" },
		{ level: 2, name: "air step", link: "https://www.d20pfsrd.com/magic/all-spells/a/air-step" },
		{ level: 2, name: "stone call", link: "https://www.d20pfsrd.com/magic/all-spells/s/stone-call" },
	],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Greasword, masterwork", link: "https://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 8300, name: "Longbow [3], +1 Flaming", link: "https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/flaming" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", link: "https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
		{ slot: "neck", value: 16000, name: "Amulet of Shield", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "chest", value: 10000, name: "Bane Baldric", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/baldric-bane" },
		{ slot: "feet", value: 4000, name: "Belt of Incredible Dexterity", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" },
	]
});