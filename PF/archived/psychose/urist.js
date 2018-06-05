Greytyphoon.Characters.push({
	name: "Urist McSong",
	flair: "",
	meta: {
		quest: "Psychose",
		owner: "Roujo",
		companion: null,
		source: null,
		dead: false,
		npc: false,
	},
	alignment: "NG",
	deity: "Muse",
	languages: "Common, Elven, Draconic, Dwarven",
	ancestry: { name: "Human", link: "http://www.d20pfsrd.com/races/core-races/human" },
	level: [ { name: "Bard", link: "http://www.d20pfsrd.com/classes/core-classes/bard", quantity: 3 } ],
	"str": 10,
	"dex": 16,
	"con": 10,
	"int": 14,
	"wis": 10,
	"cha": [ 16, { points: 2, reason: "Racial" } ],
	traits: [
		{ name: "Historian", link: "http://www.d20pfsrd.com/traits/race-traits/historian-human" },
		{ name: "City Defender", link: "http://www.d20pfsrd.com/traits/regional-traits/alkenstar-defender-regional-mana-wastes" }
	],
	startingFeats: [
		{ name: "Point-Blank Shot", link: "http://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" },
		{ name: "Precise Shot", link: "http://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" }
	],
	progressFeats: [
		{ name: "Dance (Acrobatics, Fly)", title: "VP" },
		{ name: "Weapon Focus", link: "http://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat-final" }
	],
	targetFeats: [],
	spells: [
		{ level: 1, name: "cure light wounds", link: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds" },
		{ level: 1, name: "identify", link: "http://www.d20pfsrd.com/magic/all-spells/i/identify" },
		{ level: 1, name: "share language", link: "http://www.d20pfsrd.com/magic/all-spells/s/share-language" },
		{ level: 1, name: "unseen servant", link: "http://www.d20pfsrd.com/magic/all-spells/u/unseen-servant" }
	],
	loot: [
		{ slot: "weapon-m", value: 300, name: "Punching Dagger", link: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "weapon-r", value: 300, name: "Shortbow [0]", link: "http://www.d20pfsrd.com/equipment/weapons" },
		{ slot: "armor", value: 150, name: "Studded Leather Armor", link: "http://www.d20pfsrd.com/equipment/armor" },
		{ slot: "shield", value: 150, name: "Buckler", link: "http://www.d20pfsrd.com/equipment/armor" },
		{ slot: "shoulders", value: 1000, name: "Cloak of Resistance", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", link: "http://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
	]
});