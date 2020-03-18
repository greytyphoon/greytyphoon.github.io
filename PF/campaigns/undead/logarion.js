Greytyphoon.Characters.push({
	name: "Logarion",
	meta: {
		quest: "Undead",
		owner: "Cloj",
		companion: { name: "Seth le Scorpion", url: "https://d20pfsrd.com/bestiary/monster-listings/vermin/scorpion/scorpion-greensting" },
		// companion: { name: "Robino", url: "https://d20pfsrd.com/bestiary/monster-listings/animals/bat/bat" },
		source: { name: "Google Drive", url: "https://docs.google.com/spreadsheets/d/1JxqtoBGLej2w9OHaB8TYDJe3lp_B4RUH8Lrby1Uu3DE/edit?usp=drive_web&ouid=115282848900712416421" }
	},
	alignment: "LG",
	deity: "Nethys",
	languages: "Common, Elven, +11",
	ancestry: { name: "Elf", url: "https://d20pfsrd.com/races/core-races/elf" },
	level: [ {
		name: "Wizard",
		url: "https://d20pfsrd.com/classes/core-classes/wizard",
		quantity: 7,
		archetypes: [
			{ title: "School / Ev+N", name: "Conjuration", url: "https://d20pfsrd.com/classes/core-classes/wizard/arcane-schools/paizo-arcane-schools/classic-arcane-schools/conjuration" },
		]
	} ],
	"str": 8,
	"dex": [ 16, { points: 2, reason: "Racial" } ],
	"con": [ 14, { points: -2, reason: "Racial" } ],
	"int": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
	"wis": 10,
	"cha": 9,
	traits: [
		{ name: "Pragmatic Activator", url: "https://d20pfsrd.com/traits/magic-traits/pragmatic-activator" },
		{ name: "Warrior of Old", url: "https://d20pfsrd.com/traits/race-traits/warrior-of-old" }
	],
	startingFeats: [
		{ name: "Thoughness", reason: "Level 1", url: "https://d20pfsrd.com/feats/general-feats/toughness" },
		{ name: "Spell Focus (Conjuration)", reason: "Wizard 1", url: "https://d20pfsrd.com/feats/general-feats/spell-focus" }
	],
	progressFeats: [
		{ name: "Augment Summoning", reason: "Level 3", url: "https://d20pfsrd.com/feats/general-feats/augment-summoning" },
		{ name: "Improved Initiative", reason: "Level 5", url: "https://d20pfsrd.com/feats/combat-feats/improved-initiative-combat" },
		{ name: "Scribe Scroll", reason: "Wizard 5", url: "https://d20pfsrd.com/feats/item-creation-feats/scribe-scroll-item-creation" },
		{ name: "???", reason: "Level 7", url: "#" },
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "enlarge person", url: "https://d20pfsrd.com/magic/all-spells/e/enlarge-person" },
		{ level: 1, name: "grease", url: "https://d20pfsrd.com/magic/all-spells/g/grease", tag: "conjuration" },
		{ level: 1, name: "mage armor", url: "https://d20pfsrd.com/magic/all-spells/m/mage-armor", tag: "conjuration" },
		{ level: 1, name: "mount", url: "https://d20pfsrd.com/magic/all-spells/m/mount", tag: "conjuration" },
		{ level: 1, name: "protection from evil", url: "https://d20pfsrd.com/magic/all-spells/p/protection-from-evil" },
		{ level: 1, name: "silent image", url: "https://d20pfsrd.com/magic/all-spells/s/silent-image" },
		{ level: 1, name: "summon monster I", url: "https://d20pfsrd.com/magic/all-spells/s/summon-monster", tag: "conjuration" },
		{ level: 2, name: "create pit", url: "https://d20pfsrd.com/magic/all-spells/c/create-pit", tag: "conjuration" },
		{ level: 2, name: "mirror image", url: "https://d20pfsrd.com/magic/all-spells/m/mirror-image" },
		{ level: 2, name: "rope trick", url: "https://d20pfsrd.com/magic/all-spells/r/rope-trick" },
		{ level: 2, name: "web", url: "https://d20pfsrd.com/magic/all-spells/w/web", tag: "conjuration" },
		{ level: 3, name: "fly", url: "https://d20pfsrd.com/magic/all-spells/f/fly" },
		{ level: 3, name: "haste", url: "https://d20pfsrd.com/magic/all-spells/h/haste" },
		{ level: 3, name: "shrink item", url: "https://d20pfsrd.com/magic/all-spells/s/shrink-item" },
		{ level: 3, name: "stinking cloud", url: "https://d20pfsrd.com/magic/all-spells/s/stinking-cloud", tag: "conjuration" },
		{ level: 4, name: "black tentacles", url: "https://d20pfsrd.com/magic/all-spells/b/black-tentacles", tag: "conjuration" },
		{ level: 4, name: "confusion", url: "https://d20pfsrd.com/magic/all-spells/c/confusion" }
	],
	equips: [
		{ slot: "weapon-m", value: 302, name: "Dagger" },
		{ slot: "weapon-r", value: 335, name: "Light Crossbow" },
		{ slot: "shield", value: 5, name: "Buckler", material: { value: 1000, name: "Mithral", url: "https://d20pfsrd.com/equipment/special-materials/#TOC-Mithral" } }
	],
	loot: [
		{ slot: "headband", value: 4000, name: "Headband of Vast Intelligence", url: "https://d20pfsrd.com/magic-items/wondrous-items/h-l/headband-of-vast-intelligence" },
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "https://d20pfsrd.com/magic-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "wrists", value: 1000, name: "Bracers of Armor", url: "https://d20pfsrd.com/magic-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "ring", value: 4000, name: "Ring of Spell Storing", url: "https://d20pfsrd.com/magic-items/rings/ring-of-counterspells" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://d20pfsrd.com/magic-items/rings/ring-of-protection" },
		{ slot: "none", value: 1000, name: "Pearl of Power", url: "https://d20pfsrd.com/magic-items/wondrous-items/m-p/pearl-of-power" },
		{ slot: "none", value: 4000, name: "Pearl of Power L2", url: "https://d20pfsrd.com/magic-items/wondrous-items/m-p/pearl-of-power" },
		{ slot: "none", value: 3000, name: "Extend Rod", url: "https://d20pfsrd.com/magic-items/rods/metamagic-rods/metamagic-extend" },
		{ slot: "none", value: 3000, name: "Apocalytic Rod", url: "https://d20pfsrd.com/magic-items/rods/metamagic-rods/metamagic-rod-apocalyptic" },
		{ slot: "none", value: 2000, name: "Handy Haversack", url: "https://d20pfsrd.com/magic-items/wondrous-items/a-b/bag-handy-haversack" }
	]
});