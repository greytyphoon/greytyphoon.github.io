Greytyphoon.Characters.push({
	name: "Supi",
	meta: {
		quest: "Psychose",
		owner: "Supi",
		companion: { name: "Ligre", url: "https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions#TOC-Cat-Big" }
	},
	alignment: "NG",
	deity: "",
	languages: "Common, Elven, Dwarven, Celestial",
	ancestry: { name: "Half-Elf",  url: "https://www.d20pfsrd.com/races/core-races/half-elf" },
	level: [ { name: "Hunter", url: "https://www.d20pfsrd.com/classes/hybrid-classes/hunter", quantity: 3 } ],
	"str": 10,
	"dex": [ 16, { points: 2, reason: "Racial" } ],
	"con": 14,
	"int": 14,
	"wis": 14,
	"cha": 10,
	traits: [
		{ name: "Heavenly Touch", url: "https://www.d20pfsrd.com/traits/regional-traits/heavenly-touch-tianjing" },
		{ name: "Grim Optimism", url: "https://www.d20pfsrd.com/traits/social-traits/grim-optimi" }
	],
	startingFeats: [
		{ name: "Skill Focus (Perception)", reason: "Half-Elf", url: "https://www.d20pfsrd.com/feats/general-feats/skill-focus-final" },
		{ name: "Point-blank Shot", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" }
	],
	progressFeats: [
		{ name: "Precise Shot", reason: "Hunter 2", url: "https://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" },
		{ name: "Mounted Combat", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/mounted-combat-combat-final" },
		{ name: "Coordinated Shot", reason: "Hunter 3", url: "https://www.d20pfsrd.com/feats/combat-feats/coordinated-shot-combat-teamwork" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "acid maw", url: "https://www.d20pfsrd.com/magic/all-spells/a/acid-maw" },
		{ level: 1, name: "charm animal", url: "https://www.d20pfsrd.com/magic/all-spells/c/charm-animal" },
		{ level: 1, name: "cure light wounds", url: "https://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "expeditious excavation", url: "https://www.d20pfsrd.com/magic/all-spells/e/expeditious-excavation" },
		{ level: 1, name: "summon nature's ally", url: "https://www.d20pfsrd.com/magic/all-spells/s/summon-natures-ally" }
	],
    equips: [
		{ slot: "weapon-m", value: 350, name: "Greatsword" },
		{ slot: "weapon-r", value: 375, name: "Longbow [0]" },
		{ slot: "armor", value: 175, name: "Studded Leather Armor" }
    ],
	loot: [
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});