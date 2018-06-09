Greytyphoon.Characters.push({
    name: "Nyarlatoplel",
    meta: {
        quest: "Psychose",
        owner: "Grey"
    },
    alignment: "N",
    deity: "Erastil",
    languages: "Common, Druidic",
    ancestry: { name: "Human", url: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Druid",
        url: "http://www.d20pfsrd.com/classes/core-classes/druid",
        quantity: 5,
        archetypes: [
            { title: "Domain", name: "Plant", url: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/plant-domain" },
            { title: "Subdomain", name: "Growth", url: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/plant-domain/growth" }
        ]
    } ],
    "str": [ 15, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "dex": 14,
    "con": 13,
    "int": 10,
    "wis": 16,
    "cha": 10,
    traits: [
        { name: "Magical Lineage", url: "http://www.d20pfsrd.com/traits/magic-traits/magical-lineage" },
        { name: "Reactionary", url: "http://www.d20pfsrd.com/traits/combat-traits/reactionary" },
        { name: "Warded Against Nature", url: "http://www.d20pfsrd.com/traits/drawbacks/warded-against-nature", drawback: true }
    ],
    startingFeats: [
        { name: "Rime Spell", reason: "Human", url: "http://www.d20pfsrd.com/feats/metamagic-feats/rime-spell-metamagic" },
        { name: "Spell Focus", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/general-feats/spell-focus-final" }
    ],
    progressFeats: [
        { name: "Augment Summoning", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/general-feats/augment-summoning-final"},
        { name: "Natural Spell", reason: "Level 5", url: "http://www.d20pfsrd.com/feats/general-feats/natural-spell-final"}
    ],
    targetFeats: [
        { name: "Powerful Shape", url: "http://www.d20pfsrd.com/feats/general-feats/powerful-shape"}
    ],
    spells: [
        { level: 1, name: "enlarge person", url: "http://www.d20pfsrd.com/magic/all-spells/e/enlarge-person", tag: "domain off-class" },
        { level: 1, name: "cure light wounds", url: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds", tag: "conjuration" },
        { level: 1, name: "feather step", url: "http://www.d20pfsrd.com/magic/all-spells/f/feather-step" },
        { level: 1, name: "frostbite", url: "http://www.d20pfsrd.com/magic/all-spells/f/frostbite", tag: "ice" },
        { level: 1, name: "ice armor", url: "http://www.d20pfsrd.com/magic/all-spells/i/ice-armor", tag: "ice" },
        { level: 1, name: "magic fang", url: "http://www.d20pfsrd.com/magic/all-spells/m/magic-fang" },
        { level: 1, name: "obscuring mist", url: "http://www.d20pfsrd.com/magic/all-spells/o/obscuring-mist", tag: "conjuration" },
        { level: 2, name: "barkskin", url: "http://www.d20pfsrd.com/magic/all-spells/b/barkskin", tag: "domain" },
        { level: 2, name: "frost fall", url: "http://www.d20pfsrd.com/magic/all-spells/f/frost-fall", tag: "ice" },
        { level: 2, name: "lesser restoration", url: "http://www.d20pfsrd.com/magic/all-spells/r/restoration", tag: "conjuration" },
        { level: 2, name: "resist energy", url: "http://www.d20pfsrd.com/magic/all-spells/r/resist-energy" },
        { level: 2, name: "stone call", url: "http://www.d20pfsrd.com/magic/all-spells/s/stone-call", tag: "conjuration" },
        { level: 3, name: "plant growth", url: "http://www.d20pfsrd.com/magic/all-spells/p/plant-growth", tag: "domain" },
        { level: 3, name: "cure moderate wounds", url: "http://www.d20pfsrd.com/magic/all-spells/c/cure-moderate-wounds", tag: "conjuration" },
        { level: 3, name: "sleet storm", url: "http://www.d20pfsrd.com/magic/all-spells/s/sleet-storm", tag: "conjuration ice" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Scimitar", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "armor", value: 150, name: "Hide Shirt", url: "http://www.d20pfsrd.com/equipment/armor" },
        { slot: "armor", value: 257, name: "Darkwood Heavy Wooden Shield", url: "http://www.d20pfsrd.com/equipment/special-materials#TOC-Darkwood" },
        { slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-of-resistance" },
        { slot: "belt", value: 4000, name: "Belt of Giant Strength", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-giant-strength" },
        { slot: "none", value: 1000, name: "Pearl of Power", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/pearl-of-power" }
    ]
});