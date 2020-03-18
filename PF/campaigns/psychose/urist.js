Greytyphoon.Characters.push({
	name: "Urist McSong",
	meta: {
		quest: "Psychose",
		owner: "Roujo"
	},
	alignment: "NG",
	deity: "Muse",
	languages: "Common, Elven, Draconic, Dwarven",
	ancestry: { name: "Human", url: "https://d20pfsrd.com/races/core-races/human" },
	level: [ { name: "Bard", url: "https://d20pfsrd.com/classes/core-classes/bard", quantity: 3 } ],
	"str": 10,
	"dex": 16,
	"con": 10,
	"int": 14,
	"wis": 10,
	"cha": [ 16, { points: 2, reason: "Racial" } ],
	traits: [
		{ name: "Historian", url: "https://d20pfsrd.com/traits/race-traits/historian-human" },
		{ name: "City Defender", url: "https://d20pfsrd.com/traits/regional-traits/alkenstar-defender-regional-mana-wastes" }
	],
	startingFeats: [
		{ name: "Point-Blank Shot", reason: "Human", url: "https://d20pfsrd.com/feats/combat-feats/point-blank-shot-combat" },
		{ name: "Precise Shot", reason: "Level 1", url: "https://d20pfsrd.com/feats/combat-feats/precise-shot-combat" }
	],
	progressFeats: [
		{ name: "Dance (Acrobatics, Fly)", reason: "Bard 2", title: "VP" },
		{ name: "Weapon Focus (Shortbow)", reason: "Level 3", url: "https://d20pfsrd.com/feats/combat-feats/weapon-focus-combat" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "cure light wounds", url: "https://d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "identify", url: "https://d20pfsrd.com/magic/all-spells/i/identify" },
		{ level: 1, name: "share language", url: "https://d20pfsrd.com/magic/all-spells/s/share-language" },
		{ level: 1, name: "unseen servant", url: "https://d20pfsrd.com/magic/all-spells/u/unseen-servant" }
	],
	equips: [
		{ slot: "weapon-m", value: 302, name: "Punching Dagger" },
		{ slot: "weapon-r", value: 330, name: "Shortbow [0]" },
		{ slot: "armor", value: 175, name: "Studded Leather Armor" },
		{ slot: "shield", value: 155, name: "Buckler" }
	],
	loot: [
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "https://d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});