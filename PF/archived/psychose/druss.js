Greytyphoon.Characters.push({
	name: "Druss Malroy",
	meta: {
		quest: "Psychose",
		owner: "Cloj"
	},
	alignment: "",
	deity: "",
	languages: "Common",
	ancestry: { name: "Human", url: "http://www.d20pfsrd.com/races/core-races/human" },
	level: [ {
		name: "Bloodrager",
		url: "http://www.d20pfsrd.com/classes/hybrid-classes/bloodrager",
		quantity: 3,
		archetypes: [
			{ title: "Bloodline", name: "Aberrant", url: "http://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo---bloodrager-bloodlines/aberrant" },
			{ name: "Greenrager", url: "http://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo---bloodrager-archetypes/greenrager" }
		]
	} ],
	"str": [ 17, { points: 2, reason: "Racial" } ],
	"dex": 12,
	"con": 14,
	"int": 8,
	"wis": 14,
	"cha": 12,
	traits: [
		{ name: "Helpful", url: "http://www.d20pfsrd.com/traits/combat-traits/helpful-combat" },
		{ name: "Honorable Champion", url: "http://www.d20pfsrd.com/traits/combat-traits/honorable-champion-combat" }
	],
	startingFeats: [
		{ name: "Power Attack", reason: "Human", url: "http://www.d20pfsrd.com/feats/combat-feats/power-attack-combat-final" },
		{ name: "Combat Reflexes", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/combat-feats/combat-reflexes-combat" }
	],
	progressFeats: [
		{ name: "Bodyguard", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/combat-feats/bodyguard-combat" }
	],
	targetFeats: [],
	spells: [],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Greataxe", url: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 300, name: "Longbow [3]", url: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "armor", value: 150, name: "Chain Shirt", url: "http://www.d20pfsrd.com/equipment/armor" },
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "http://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});