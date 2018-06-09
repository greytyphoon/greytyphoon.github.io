Greytyphoon.Characters.push({
	name: "Elie The Witch",
	meta: {
		quest: "Manors & Genies",
		owner: "Elizabeth",
        companion: { name: "Bat Familiar", url: "http://www.d20pfsrd.com/bestiary/monster-listings/animals/bat/" }
	},
	alignment: "N",
	languages: "Common, Abyssal, Celestial, Elven, Necril, Terran",
	ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human" },
	level: [ {
		name: "Witch",
		url: "https://www.d20pfsrd.com/classes/base-classes/witch",
		quantity: 9,
		archetypes: [ { title: "Patron", name: "Plague", url: "https://www.d20pfsrd.com/classes/base-classes/witch/witch-patrons#patron-shadow" } ]
	} ],
	"str": 10,
	"dex": 14,
	"con": 12,
	"int": [ 17, { points: 2, reason: "Racial" }, { points: 2, reason: "Advancement" } ],
	"wis": 10,
	"cha": 14,
	traits: [
        { name: "Reactionary", url: "https://www.d20pfsrd.com/traits/combat-traits/reactionary" }
    ],
	startingFeats: [
		{ name: "Improved Initiative", reason: "Human", url: "https://www.d20pfsrd.com/feats/general-feats/improved-initiative" },
		{ name: "Accursed Hex", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/general-feats/accursed-hex" },
        { name: "Evil Eye", reason: "Witch 1", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-evil-eye-su" }
	],
	progressFeats: [
        { name: "Fortune", reason: "Witch 2", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-fortune-su" },
        { name: "Cackle", reason: "Level 3 Extra Hex", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cackle-su" },
        { name: "Misfortune", reason: "Witch 2", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-misfortune-su" },
		{ name: "Quick Draw", reason: "Level 5", url: "https://www.d20pfsrd.com/feats/combat-feats/quick-draw-combat-final" },
        { name: "Flight", reason: "Witch 6", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" },
		{ name: "Spell Focus (Necromancy)", reason: "Level 7", url: "https://www.d20pfsrd.com/feats/general-feats/spell-focus" },
        { name: "Charm", reason: "Witch 8", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-charm-su" },
		{ name: "Magical Aptitude", reason: "Level 9", url: "https://www.d20pfsrd.com/feats/general-feats/magical-aptitude" }
	],
	targetFeats: [],
	spells: [
		{ level: 0, name: "detect magic", url: "https://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
		{ level: 0, name: "guidance", url: "https://www.d20pfsrd.com/magic/all-spells/g/guidance" },
		{ level: 0, name: "light", url: "https://www.d20pfsrd.com/magic/all-spells/l/light" },
		{ level: 0, name: "message", url: "https://www.d20pfsrd.com/magic/all-spells/m/message" },
		{ level: 1, name: "cure light wounds", url: "https://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "detect undead", url: "https://www.d20pfsrd.com/magic/all-spells/d/detect-undead" },
		{ level: 1, name: "mage armor", url: "https://www.d20pfsrd.com/magic/all-spells/m/mage-armor" },
		{ level: 1, name: "obscuring mist", url: "https://www.d20pfsrd.com/magic/all-spells/o/obscuring-mist" },
		{ level: 1, name: "sanctify corpse", url: "https://www.d20pfsrd.com/magic/all-spells/s/sanctify-corpse" },
		{ level: 2, name: "blood blaze", url: "https://www.d20pfsrd.com/magic/all-spells/b/blood-blaze" },
		{ level: 2, name: "command undead", url: "https://www.d20pfsrd.com/magic/all-spells/c/command-undead" },
		{ level: 2, name: "glitterdust", url: "https://www.d20pfsrd.com/magic/all-spells/g/glitterdust" },
		{ level: 2, name: "summon swarm", url: "https://www.d20pfsrd.com/magic/all-spells/summon-swarm" },
		{ level: 2, name: "web", url: "https://www.d20pfsrd.com/magic/all-spells/w/web" },
		{ level: 3, name: "contagion", url: "https://www.d20pfsrd.com/magic/all-spells/c/contagion" },
		{ level: 3, name: "speak with dead", url: "https://www.d20pfsrd.com/magic/all-spells/s/speak-with-dead" },
		{ level: 3, name: "vision of hell", url: "https://www.d20pfsrd.com/magic/all-spells/v/vision-of-hell" },
		{ level: 3, name: "water walk", url: "https://www.d20pfsrd.com/magic/all-spells/w/water-walk" },
		{ level: 3, name: "witness", url: "https://www.d20pfsrd.com/magic/all-spells/w/witness" },
		{ level: 4, name: "animate dead", url: "https://www.d20pfsrd.com/magic/all-spells/a/animate-dead" },
		{ level: 4, name: "cure serious wounds", url: "https://www.d20pfsrd.com/magic/all-spells/c/cure-serious-wounds" },
		{ level: 4, name: "neutralize poison", url: "https://www.d20pfsrd.com/magic/all-spells/n/neutralize-poison" },
		{ level: 4, name: "secure shelter", url: "https://www.d20pfsrd.com/magic/all-spells/s/secure-shelter" },
		{ level: 4, name: "volcanic storm", url: "https://www.d20pfsrd.com/magic/all-spells/v/volcanic-storm" },
		{ level: 5, name: "cure critical wounds", url: "https://www.d20pfsrd.com/magic/all-spells/c/cure-critical-wounds" },
		{ level: 5, name: "pain strike, mass", url: "https://www.d20pfsrd.com/magic/all-spells/p/pain-strike" }
	],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Longspear, masterwork", url: "https://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 300, name: "Crossbow, masterwork", url: "https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/flaming" },
		{ slot: "neck", value: 16000, name: "Amulet of Shield", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" }
	]
});