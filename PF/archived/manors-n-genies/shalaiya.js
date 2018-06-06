Greytyphoon.Characters.push({
	name: "Shalaiya",
	meta: {
		quest: "Manors & Genies",
		owner: "Myo"
	},
	alignment: "CG",
	deity: "Desna",
	languages: "Common, Elven, Celestial",
	ancestry: { name: "Half-Elf", link: "https://www.d20pfsrd.com/races/core-races/half-elf" },
	level: [ {
		name: "Inquisitor",
		link: "https://www.d20pfsrd.com/classes/base-classes/inquisitor",
		quantity: 9,
		archtypes: [
			{ title: "Domain", name: "Liberation", link: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/liberation-domain" },
			{ title: "Subdomain", name: "Freedom", link: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/liberation-domain/freedom" }
		]
	} ],
	"str": 11 ,
	"dex": [ 14, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" }],
	"con": 14,
	"int": 12,
	"wis": [ 15, { points: 1, reason: "Advancement" }],
	"cha": 14,
	traits: [
		{ name: "Elven Reflexes", link: "https://www.d20pfsrd.com/traits/race-traits/elven-reflexes-half-elf" },
		{ name: "Inspired", link: "https://www.d20pfsrd.com/traits/faith-traits/inspired" }
	],
	startingFeats: [
		{ name: "Skill Focus", reason: "Half-Elf" },
		{ name: "Point-Blank Shot", reason: "Level 1" }
	],
	progressFeats: [
		{ name: "Precise Shot", reason: "Level 3" },
		{ name: "Shake it Off", reason: "Inquisitor 3" },
		{ name: "Rapid Shot", reason: "Level 5" },
		{ name: "Coordinated Defense", reason: "Inquisitor 6" },
		{ name: "Shared Insight", reason: "Level 7" },
		{ name: "ManyShot", reason: "Level 9" },
		{ name: "Coordinated Shot", reason: "Inquisitor 9" }
	],
	targetFeats: [],
	spells: [
		{ level: 0, name: "create water", link: "http://www.d20pfsrd.com/magic/all-spells/c/create-water" },
		{ level: 0, name: "detect magic", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
		{ level: 0, name: "detect poison", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-poison" },
		{ level: 0, name: "guidance", link: "http://www.d20pfsrd.com/magic/all-spells/g/guidance" },
		{ level: 0, name: "light", link: "http://www.d20pfsrd.com/magic/all-spells/l/light" },
		{ level: 0, name: "sift", link: "http://www.d20pfsrd.com/magic/all-spells/s/sift" },
		{ level: 0, name: "detect chaos", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-chaos" },
		{ level: 0, name: "detect evil", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-evil" },
		{ level: 0, name: "detect good ", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-good" },
		{ level: 0, name: "detect law", link: "http://www.d20pfsrd.com/magic/all-spells/d/detect-law" },
		{ level: 1, name: "bless water", link: "http://www.d20pfsrd.com/magic/all-spells/b/bless-water" },
		{ level: 1, name: "cure light wounds", link: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "disguise self", link: "http://www.d20pfsrd.com/magic/all-spells/d/disguise-self" },
		{ level: 1, name: "expeditious retreat", link: "http://www.d20pfsrd.com/magic/all-spells/e/expeditious-retreat" },
		{ level: 1, name: "magic weapon", link: "http://www.d20pfsrd.com/magic/all-spells/m/magic-weapon" },
		{ level: 2, name: "cure moderate wounds", link: "http://www.d20pfsrd.com/magic/all-spells/c/cure-moderate-wounds" },
		{ level: 2, name: "invisibility", link: "http://www.d20pfsrd.com/magic/all-spells/i/invisibility" },
		{ level: 2, name: "lesser restoration", link: "http://www.d20pfsrd.com/magic/all-spells/r/restoration" },
		{ level: 2, name: "see invisibility", link: "http://www.d20pfsrd.com/magic/all-spells/s/see-invisibility" },
		{ level: 2, name: "silence", link: "http://www.d20pfsrd.com/magic/all-spells/s/silence" },
		{ level: 3, name: "blessing of the mole", link: "http://www.d20pfsrd.com/magic/all-spells/b/blessing-of-the-mole" },
		{ level: 3, name: "dispel magic", link: "http://www.d20pfsrd.com/magic/all-spells/d/dispel-magic" },
		{ level: 3, name: "heroism", link: "http://www.d20pfsrd.com/magic/all-spells/h/heroism" },
		{ level: 3, name: "righteous vigor", link: "http://www.d20pfsrd.com/magic/all-spells/r/righteous-vigor" }
	],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Spear, masterwork", link: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 8300, name: "LongBow, +1 Frost", link: "https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/frost" },
		{ slot: "armor", value: 7900, name: "Studded Leather Armor, +2 Shadow", link: "https://www.d20pfsrd.com/magic-items/magic-armor/magic-armor-and-shield-special-abilities/shadow/" },
		{ slot: "eyes", value: 3500, name: "Lens of Detection", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/h-l/lens-of-detection" },
		{ slot: "neck", value: 16000, name: "Amulet of Shield", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "neck", value: 1650, name: "Necklace of Fireballs", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/necklace-of-fireballs" },
		{ slot: "chest", value: 10000, name: "Bane Baldric", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/baldric-bane" },
		{ slot: "wrists", value: 4000, name: "Bracers of Falcon's Aim", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "feet", value: 4000, name: "Belt of Incredible Dexterity", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" },
		{ slot: "none", value: 2000, name: "Quiver of constant Abundant Ammunition", link: "https://www.d20pfsrd.com/magic/all-spells/a/abundant-ammunition" }
	]
});