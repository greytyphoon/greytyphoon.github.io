Greytyphoon.Characters.push({
	name: "Kashamy",
	meta: {
		quest: "Psychose",
		owner: "Kashamy",
		companion: { name: "Sissi L'Assoupi", url: "http://d20pfsrd.com/bestiary/monster-listings/animals/birds/dodo/" }
	},
	alignment: "CG",
	deity: "",
	languages: "Common, Elven, Dwarven, Abyssal, Ignan, Terran",
	ancestry: { name: "Elf", url: "http://d20pfsrd.com/races/core-races/elf", archetypes: ["Arcane Focus"] },
	level: [ { name: "Magus", url: "http://d20pfsrd.com/classes/base-classes/magus", quantity: 3 } ],
	"str": 10,
	"dex": [ 16, { points: 2, reason: "Racial" } ],
	"con": [ 14, { points: -2, reason: "Racial" } ],
	"int": [ 16, { points: 2, reason: "Racial" } ],
	"wis": 10,
	"cha": 10,
	traits: [
		{ name: "Slippery", url: "http://d20pfsrd.com/traits/combat-traits/slippery-bellflower-network" },
		{ name: "Warrior of Old", url: "http://d20pfsrd.com/traits/race-traits/warrior-of-old" }
	],
	startingFeats: [
		{ name: "Weapon Finesse", reason: "Level 1", url: "http://d20pfsrd.com/feats/combat-feats/weapon-finesse-combat" }
	],
	progressFeats: [
		{ name: "Fencing Grace", reason: "Level 3", url: "http://d20pfsrd.com/feats/combat-feats/fencing-grace-combat" },
		{ name: "Familiar", reason: "Magus 3", url: "http://d20pfsrd.com/classes/base-classes/magus/magus-arcana/paizo-magus-arcana/familiar-ex" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "blend", url: "http://d20pfsrd.com/magic/all-spells/b/blend" },
		{ level: 1, name: "burning hands", url: "http://d20pfsrd.com/magic/all-spells/b/burning-hands" },
		{ level: 1, name: "chill touch", url: "http://d20pfsrd.com/magic/all-spells/c/chill-touch", tag: "touch" },
		{ level: 1, name: "frostbite", url: "http://d20pfsrd.com/magic/all-spells/f/frostbite", tag: "touch" },
		{ level: 1, name: "magic weapon", url: "http://d20pfsrd.com/magic/all-spells/m/magic-weapon" },
		{ level: 1, name: "mirror strike", url: "http://d20pfsrd.com/magic/all-spells/m/mirror-strike" },
		{ level: 1, name: "obscuring mist", url: "http://d20pfsrd.com/magic/all-spells/o/obscuring-mist" },
		{ level: 1, name: "shocking grasp", url: "http://d20pfsrd.com/magic/all-spells/s/shocking-grasp", tag: "touch" },
		{ level: 1, name: "shock shield", url: "http://d20pfsrd.com/magic/all-spells/s/shock-shield" },
		{ level: 1, name: "true strike", url: "http://d20pfsrd.com/magic/all-spells/t/true-strike" },
		{ level: 1, name: "vanish", url: "http://d20pfsrd.com/magic/all-spells/v/vanish" }
	],
    equips: [
		{ slot: "weapon-m", value: 320, name: "Rapier" },
		{ slot: "weapon-r", value: 375, name: "Longbow [0]" },
		{ slot: "armor", value: 175, name: "Studded Leather Armor" }
    ],
	loot: [
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "http://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "http://d20pfsrd.com/magic-items/rings/ring-of-protection" },
		{ slot: "none", value: 2200, name: "Handy Haversack", url: "http://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" }
	]
});