Greytyphoon.Characters.push({
    name: "Corren Delass",
    flair: "warden of the firelands",
    meta: {
        quest: "Psychose",
        owner: "Grey"
    },
    flavor: {
        eyes: "green",
        hair: "brown",
        weight: "137 lbs",
        height: "5' 2''"
    },
    alignment: "N",
    deity: "Pharasma",
    languages: "Common, Druidic, Elven, Dwarven, Gnome",
    ancestry: { name: "Human", url: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Druid",
        url: "http://www.d20pfsrd.com/classes/core-classes/druid",
        quantity: 9,
        archetypes: [
            { title: "Domain", name: "Fire", url: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/fire-domain" },
            { title: "Subdomain", name: "Ash", url: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/fire-domain/ash" }
        ]
    } ],
    "str": 10,
    "dex": [ 13, { points: 2, reason: "Enhancement" } ],
    "con": 14,
    "int": 10,
    "wis": [ 18, { points: 2, reason: "Racial" }, { points: 2, reason: "Advancement" }, { points: 4, reason: "Enhancement" } ],
    "cha": 10,
    traits: [
        { name: "Fate's Favored", url: "https://www.d20pfsrd.com/traits/faith-traits/fate-s-favored" },
        { name: "Magical Lineage", url: "https://www.d20pfsrd.com/traits/magic-traits/magical-lineage" }
    ],
    startingFeats: [
        { name: "Spell Focus (Conjuration)", reason: "Human", url: "http://www.d20pfsrd.com/feats/general-feats/spell-focus-final" },
        { name: "Augment Summoning", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/general-feats/augment-summoning-final" }
    ],
    progressFeats: [
        { name: "Improved Initiative", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/combat-feats/improved-initiative-combat-final" },
        { name: "Natural Spell", reason: "Level 5", url: "http://www.d20pfsrd.com/feats/general-feats/natural-spell-final" },
        { name: "Intensified Spell", reason: "Level 7", url: "http://www.d20pfsrd.com/feats/metamagic-feats/intensified-spell-metamagic" }
    ],
    targetFeats: [],
    spells: [
		{ level: 0, name: "SUMMON NATURE'S ALLY", url: "https://www.d20pfsrd.com/magic/all-spells/s/summon-natures-ally/", tag: "conjuration" },
		{ level: 0, name: "create water", url: "http://www.d20pfsrd.com/magic/all-spells/c/create-water", tag: "conjuration" },
		{ level: 0, name: "detect magic", url: "http://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
		{ level: 0, name: "guidance", url: "http://www.d20pfsrd.com/magic/all-spells/g/guidance" },
		{ level: 0, name: "light", url: "http://www.d20pfsrd.com/magic/all-spells/l/light" },
        { level: 1, name: "burning hands", url: "http://www.d20pfsrd.com/magic/all-spells/b/burning-hands", tag: "domain" },
		{ level: 1, name: "burning disarm", url: "http://www.d20pfsrd.com/magic/all-spells/b/burning-disarm" },
		{ level: 1, name: "cure light wounds", url: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds", tag: "conjuration" },
		{ level: 1, name: "hibernate", url: "http://www.d20pfsrd.com/magic/all-spells/h/hibernate" },
		{ level: 1, name: "obscuring mist", url: "http://www.d20pfsrd.com/magic/all-spells/o/obscuring-mist", tag: "conjuration" },
		{ level: 2, name: "produce flame", url: "http://www.d20pfsrd.com/magic/all-spells/p/produce-flame", tag: "domain" },
		{ level: 3, name: "fireball", url: "http://www.d20pfsrd.com/magic/all-spells/f/fireball", tag: "domain" },
		{ level: 4, name: "wall of fire", url: "http://www.d20pfsrd.com/magic/all-spells/w/wall-of-fire", tag: "domain" },
		{ level: 5, name: "fire shield", url: "http://www.d20pfsrd.com/magic/all-spells/f/fire-shield", tag: "domain" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Scimitar", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Sling", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "headband", value: 16000, name: "Headband of Inspired Wisdom", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/h-l/headband-of-inspired-wisdom" },
        { slot: "armor", value: 4150, name: "Hide Shirt +2", url: "http://www.d20pfsrd.com/equipment/armor" },
        { slot: "shield", value: 1257, name: "Darkwood Heavy Wooden Shield +1", url: "http://www.d20pfsrd.com/equipment/special-materials#TOC-Darkwood" },
        { slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
        { slot: "hands", value: 2200, name: "Apprentice's Cheating Gloves", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/e-g/gloves-apprentice-s-cheating" },
        { slot: "ring", value: 2200, name: "Ring of Eloquence", url: "http://www.d20pfsrd.com/magic-items/rings/ring-of-eloquence" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
        { slot: "none", value: 6000, name: "Caster's Tattoo", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/tattoo-caster-s" },
        { slot: "none", value: 2000, name: "Handy Haversack", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bag-handy-haversack" },
        { slot: "none", value: 1000, name: "Pearl of Power", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-q/pearl-of-power" },
        { slot: "none", value: 20000, name: "Stone of Good Luck", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/stone-of-good-luck-luckstone" }
    ]
});