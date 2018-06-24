Greytyphoon.Characters.push({
	name: "Druss Malroy",
	meta: {
		quest: "Psychose",
		owner: "Cloj"
	},
	alignment: "",
	deity: "",
	languages: "Common",
	ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human" },
	level: [ {
		name: "Bloodrager",
		url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager",
		quantity: 3,
		archetypes: [
			{ title: "Bloodline", name: "Aberrant", url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo---bloodrager-bloodlines/aberrant" },
			{ name: "Greenrager", url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo---bloodrager-archetypes/greenrager" }
		]
	} ],
	"str": [ 17, { points: 2, reason: "Racial" } ],
	"dex": 12,
	"con": 14,
	"int": 8,
	"wis": 14,
	"cha": 12,
	traits: [
		{ name: "Helpful", url: "https://www.d20pfsrd.com/traits/combat-traits/helpful-combat" },
		{ name: "Honorable Champion", url: "https://www.d20pfsrd.com/traits/combat-traits/honorable-champion-combat" }
	],
	startingFeats: [
		{ name: "Power Attack", reason: "Human", url: "https://www.d20pfsrd.com/feats/combat-feats/power-attack-combat-final" },
		{ name: "Combat Reflexes", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/combat-reflexes-combat" }
	],
	progressFeats: [
		{ name: "Bodyguard", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/bodyguard-combat" }
	],
	targetFeats: [],
	spells: [],
    equips: [
		{ slot: "weapon-m", value: 350, name: "Greataxe" },
		{ slot: "weapon-r", value: 700, name: "Longbow [3]" },
		{ slot: "armor", value: 250, name: "Chain Shirt" }
    ],
	loot: [
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});