Greytyphoon.Characters.push({
	name: "Nedor Tave",
	meta: {
		quest: "Undead",
		owner: "Didier",
        source: { name: "Google Drive", url: "https://docs.google.com/spreadsheets/d/1wPLH8TjP9sonulneFimgJYCNdmREQVuBRkD7h5qcn_A/edit?usp=drive_web&ouid=115282848900712416421" }
	},
	alignment: "NG",
	deity: "Cayden Cailean",
	languages: "Common, Elven, Celestial",
	ancestry: { name: "Half-Elf", url: "https://www.d20pfsrd.com/races/core-races/half-elf" },
	level: [ { name: "Bard", url: "https://www.d20pfsrd.com/classes/core-classes/bard", quantity: 7 } ],
	"str": 10,
	"dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
	"con": 12,
	"int": 13,
	"wis": 12,
	"cha": 14,
	traits: [
        { name: "Reactionary", url: "https://www.d20pfsrd.com/traits/combat-traits/reactionary" },
		{ name: "Weapon Proficiency: Longbow", url: "#" }
	],
	startingFeats: [
		{ name: "Skill Focus (Perception)", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/general-feats/skill-focus-final" },
		{ name: "Point-Blank Shot", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" },
	],
	progressFeats: [
		{ name: "String (Bluff, Diplomacy)", reason: "Bard 2", title: "VP" },
		{ name: "Precise Shot", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" },
		{ name: "Rapid Shot", reason: "Level 5", url: "https://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" },
		{ name: "Oratory (Diplomacy, Sense Motive)", reason: "Bard 6", title: "VP" },
		{ name: "Stabbing Shot", reason: "Level 7", url: "https://www.d20pfsrd.com/feats/combat-feats/stabbing-shot-combat" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "alarm", url: "https://www.d20pfsrd.com/magic/all-spells/a/alarm" },
		{ level: 1, name: "cure light wounds", url: "https://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "ear-piercing scream", url: "https://www.d20pfsrd.com/magic/all-spells/e/ear-piercing-scream" },
		{ level: 1, name: "grease", url: "https://www.d20pfsrd.com/magic/all-spells/g/grease" },
		{ level: 1, name: "saving finale", url: "https://www.d20pfsrd.com/magic/all-spells/s/saving-finale" },
		{ level: 1, name: "silent image", url: "https://www.d20pfsrd.com/magic/all-spells/s/silent-image" },
		{ level: 1, name: "timely inspiration", url: "https://www.d20pfsrd.com/magic/all-spells/t/timely-inspiration" },
		{ level: 2, name: "allegro", url: "https://www.d20pfsrd.com/magic/all-spells/a/allegro" },
		{ level: 2, name: "mirror image", url: "https://www.d20pfsrd.com/magic/all-spells/m/mirror-image" },
		{ level: 2, name: "sonic scream", url: "https://www.d20pfsrd.com/magic/all-spells/s/sonic-scream" },
		{ level: 2, name: "summon monster II", url: "https://www.d20pfsrd.com/magic/all-spells/s/summon-monster" },
		{ level: 3, name: "thundering drums", url: "https://www.d20pfsrd.com/magic/all-spells/t/thundering-drums" },
		{ level: 3, name: "seek thoughts", url: "https://www.d20pfsrd.com/magic/all-spells/s/seek-thoughts" }
	],
    equips: [
        { slot: "weapon-m", value: 320, name: "Rapier", material: { value: 1000, name: "Voidglass", url: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Voidglass" } },
		{ slot: "weapon-r", value: 330, name: "Longbow [0]", bonus: 1, enchants: [{ valueB: 1, name: "Musehair", url: "#" }] },
        { slot: "armor", value: 1100, name: "Mithral Shirt", bonus: 1, url: "https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "shield", value: 5, name: "Buckler", material: { value: 1000, name: "Mithral", url: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Mithral" } }
    ],
	loot: [
		{ slot: "head", value: 4500, name: "Circlet of Persuasion", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/c-d/circlet-of-persuasion" },
		{ slot: "neck", value: 2000, name: "Amulet of Natural Armor", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/amulet-of-natural-armor" },
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance [Royal]", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "wrists", value: 5000, name: "Bracers of Archery", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/bracers-of-archery" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-protection" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
        { slot: "none", value: 4800, name: "Fork of Perfect Tuning", url: "#" },
        { slot: "none", value: 3400, name: "Bag of Tricks, Gray", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/bag-of-tricks" },
        { slot: "none", value: 4000, name: "Endless Quiver", url: "https://www.d20pfsrd.com/magic/all-spells/a/abundant-ammunition" },
        { slot: "none", value: 2000, name: "Handy Haversack", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/bag-handy-haversack" }
	]
});