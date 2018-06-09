Greytyphoon.Characters.push({
	name: "Urist McSong",
	meta: {
		quest: "Psychose",
		owner: "Roujo"
	},
	alignment: "NG",
	deity: "Muse",
	languages: "Common, Elven, Draconic, Dwarven",
	ancestry: { name: "Human", url: "http://www.d20pfsrd.com/races/core-races/human" },
	level: [ { name: "Bard", url: "http://www.d20pfsrd.com/classes/core-classes/bard", quantity: 3 } ],
	"str": 10,
	"dex": 16,
	"con": 10,
	"int": 14,
	"wis": 10,
	"cha": [ 16, { points: 2, reason: "Racial" } ],
	traits: [
		{ name: "Historian", url: "http://www.d20pfsrd.com/traits/race-traits/historian-human" },
		{ name: "City Defender", url: "http://www.d20pfsrd.com/traits/regional-traits/alkenstar-defender-regional-mana-wastes" }
	],
	startingFeats: [
		{ name: "Point-Blank Shot", reason: "Human", url: "http://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" },
		{ name: "Precise Shot", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" }
	],
	progressFeats: [
		{ name: "Dance (Acrobatics, Fly)", reason: "Bard 2", title: "VP" },
		{ name: "Weapon Focus (Shortbow)", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat-final" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "cure light wounds", url: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "identify", url: "http://www.d20pfsrd.com/magic/all-spells/i/identify" },
		{ level: 1, name: "share language", url: "http://www.d20pfsrd.com/magic/all-spells/s/share-language" },
		{ level: 1, name: "unseen servant", url: "http://www.d20pfsrd.com/magic/all-spells/u/unseen-servant" }
	],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Punching Dagger", url: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 300, name: "Shortbow [0]", url: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "armor", value: 150, name: "Studded Leather Armor", url: "http://www.d20pfsrd.com/equipment/armor" },
		{ slot: "shield", value: 150, name: "Buckler", url: "http://www.d20pfsrd.com/equipment/armor" },
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "http://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});