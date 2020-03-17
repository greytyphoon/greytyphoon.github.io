Greytyphoon.Characters.push({
	name: "Shalaiya",
	meta: {
		quest: "Manors & Genies",
		owner: "Myo"
	},
	alignment: "CG",
	deity: "Desna",
	languages: "Common, Elven, Celestial",
	ancestry: { name: "Half-Elf", url: "https://d20pfsrd.com/races/core-races/half-elf" },
	level: [ {
		name: "Inquisitor",
		url: "https://d20pfsrd.com/classes/base-classes/inquisitor",
		quantity: 9,
		archetypes: [
			{ title: "Domain", name: "Liberation", url: "https://d20pfsrd.com/classes/core-classes/cleric/domains/paizo-domains/liberation-domain" },
			{ title: "Subdomain", name: "Freedom", url: "https://d20pfsrd.com/classes/core-classes/cleric/domains/paizo-domains/liberation-domain/freedom" }
		]
	} ],
	"str": 11 ,
	"dex": [ 14, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" }],
	"con": 14,
	"int": 12,
	"wis": [ 15, { points: 1, reason: "Advancement" }],
	"cha": 14,
	traits: [
		{ name: "Elven Reflexes", url: "https://d20pfsrd.com/traits/race-traits/elven-reflexes-half-elf" },
		{ name: "Inspired", url: "https://d20pfsrd.com/traits/faith-traits/inspired" }
	],
	startingFeats: [
		{ name: "Skill Focus (Perception)", reason: "Half-Elf", url: "https://d20pfsrd.com/feats/general-feats/skill-focus" },
		{ name: "Point-Blank Shot", reason: "Level 1", url: "https://d20pfsrd.com/feats/combat-feats/point-blank-shot-combat" }
	],
	progressFeats: [
		{ name: "Precise Shot", reason: "Level 3", url: "https://d20pfsrd.com/feats/combat-feats/precise-shot-combat" },
		{ name: "Shake it Off", reason: "Inquisitor 3", url: "https://d20pfsrd.com/feats/general-feats/shake-it-off-teamwork" },
		{ name: "Rapid Shot", reason: "Level 5", url: "https://d20pfsrd.com/feats/combat-feats/rapid-shot-combat" },
		{ name: "Coordinated Defense", reason: "Inquisitor 6", url: "https://d20pfsrd.com/feats/combat-feats/coordinated-defense-combat-teamwork" },
		{ name: "Shared Insight", reason: "Level 7", url: "https://d20pfsrd.com/feats/general-feats/shared-insight" },
		{ name: "ManyShot", reason: "Level 9", url: "https://d20pfsrd.com/feats/combat-feats/manyshot-combat" },
		{ name: "Coordinated Shot", reason: "Inquisitor 9", url: "https://d20pfsrd.com/feats/combat-feats/coordinated-shot-combat-teamwork" }
	],
	targetFeats: [],
	spells: [
		{ level: 0, name: "create water", url: "https://d20pfsrd.com/magic/all-spells/c/create-water" },
		{ level: 0, name: "detect magic", url: "https://d20pfsrd.com/magic/all-spells/d/detect-magic" },
		{ level: 0, name: "detect poison", url: "https://d20pfsrd.com/magic/all-spells/d/detect-poison" },
		{ level: 0, name: "guidance", url: "https://d20pfsrd.com/magic/all-spells/g/guidance" },
		{ level: 0, name: "light", url: "https://d20pfsrd.com/magic/all-spells/l/light" },
		{ level: 0, name: "sift", url: "https://d20pfsrd.com/magic/all-spells/s/sift" },
		{ level: 0, name: "detect chaos", url: "https://d20pfsrd.com/magic/all-spells/d/detect-chaos" },
		{ level: 0, name: "detect evil", url: "https://d20pfsrd.com/magic/all-spells/d/detect-evil" },
		{ level: 0, name: "detect good ", url: "https://d20pfsrd.com/magic/all-spells/d/detect-good" },
		{ level: 0, name: "detect law", url: "https://d20pfsrd.com/magic/all-spells/d/detect-law" },
		{ level: 1, name: "bless water", url: "https://d20pfsrd.com/magic/all-spells/b/bless-water" },
		{ level: 1, name: "cure light wounds", url: "https://d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "disguise self", url: "https://d20pfsrd.com/magic/all-spells/d/disguise-self" },
		{ level: 1, name: "expeditious retreat", url: "https://d20pfsrd.com/magic/all-spells/e/expeditious-retreat" },
		{ level: 1, name: "magic weapon", url: "https://d20pfsrd.com/magic/all-spells/m/magic-weapon" },
		{ level: 2, name: "cure moderate wounds", url: "https://d20pfsrd.com/magic/all-spells/c/cure-moderate-wounds" },
		{ level: 2, name: "invisibility", url: "https://d20pfsrd.com/magic/all-spells/i/invisibility" },
		{ level: 2, name: "lesser restoration", url: "https://d20pfsrd.com/magic/all-spells/r/restoration" },
		{ level: 2, name: "see invisibility", url: "https://d20pfsrd.com/magic/all-spells/s/see-invisibility" },
		{ level: 2, name: "silence", url: "https://d20pfsrd.com/magic/all-spells/s/silence" },
		{ level: 3, name: "blessing of the mole", url: "https://d20pfsrd.com/magic/all-spells/b/blessing-of-the-mole" },
		{ level: 3, name: "dispel magic", url: "https://d20pfsrd.com/magic/all-spells/d/dispel-magic" },
		{ level: 3, name: "heroism", url: "https://d20pfsrd.com/magic/all-spells/h/heroism" },
		{ level: 3, name: "righteous vigor", url: "https://d20pfsrd.com/magic/all-spells/r/righteous-vigor" }
	],
    equips: [
		{ slot: "weapon-m", value: 305, name: "Longspear" },
		{ slot: "weapon-r", value: 375, name: "Longbow", bonus: 1, enchants: [ { valueB: 1, name: "Frost", url: "https://d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/frost" } ] },
		{ slot: "armor", value: 175, name: "Studded Leather Armor", bonus: 2, enchants: [ { valueF: 3750, name: "Shadow", url: "https://d20pfsrd.com/magic-items/magic-armor/magic-armor-and-shield-special-abilities/shadow" } ] },
    ],
	loot: [
		{ slot: "eyes", value: 3500, name: "Lens of Detection", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/h-l/lens-of-detection" },
		{ slot: "neck", value: 16000, name: "Amulet of Shield", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "neck", value: 1650, name: "Necklace of Fireballs", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/necklace-of-fireballs" },
		{ slot: "chest", value: 10000, name: "Bane Baldric", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/baldric-bane" },
		{ slot: "wrists", value: 4000, name: "Bracers of Falcon's Aim", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-armor" },
		{ slot: "feet", value: 4000, name: "Belt of Incredible Dexterity", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "none", value: 20000, name: "Stone of Good Luck", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" },
		{ slot: "none", value: 2200, name: "Handy Haversack", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" },
		{ slot: "none", value: 2000, name: "Quiver of constant Abundant Ammunition", url: "https://d20pfsrd.com/magic/all-spells/a/abundant-ammunition" }
	]
});