var Greytyphoon.Characters.push({
    name: "Nyarlatoplel",
    flair: "",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: null,
        source: null,
        dead: false,
        npc: true,
    },
    alignment: "N",
    deity: "Erastil",
    languages: "Common, Druidic",
    ancestry: { name: "Human", link: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Druid",
        link: "http://www.d20pfsrd.com/classes/core-classes/druid",
        quantity: 5,
        archetypes: [ 
            { title: "Domain", name: "Plant", link: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/plant-domain" },
            { title: "Subdomain", name: "Growth", link: "http://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo---domains/plant-domain/growth" } 
        ]
    } ],
    "str": [ 15, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "dex": 14,
    "con": 13,
    "int": 10,
    "wis": 16,
    "cha": 10,
    traits: [
        { name: "Magical Lineage", link: "http://www.d20pfsrd.com/traits/magic-traits/magical-lineage" },
        { name: "Reactionary", link: "http://www.d20pfsrd.com/traits/combat-traits/reactionary" },
        { name: "Warded Against Nature", link: "http://www.d20pfsrd.com/traits/drawbacks/warded-against-nature", drawback: true }
    ],
    startingFeats: [
        { name: "Rime Spell", link: "http://www.d20pfsrd.com/feats/metamagic-feats/rime-spell-metamagic" },
        { name: "Spell Focus", link: "http://www.d20pfsrd.com/feats/general-feats/spell-focus-final" }
    ],
    progressFeats: [
        { name: "Augment Summoning", link: "http://www.d20pfsrd.com/feats/general-feats/augment-summoning-final"},
        { name: "Natural Spell", link: "http://www.d20pfsrd.com/feats/general-feats/natural-spell-final"}
    ],
    targetFeats: [
        { name: "Powerful Shape", link: "http://www.d20pfsrd.com/feats/general-feats/powerful-shape"}
    ],
    spells: [
        { level: 1, name: "enlarge person", link: "http://www.d20pfsrd.com/magic/all-spells/e/enlarge-person", tag: "domain off-class" },
        { level: 1, name: "cure light wounds", link: "http://www.d20pfsrd.com/magic/all-spells/c/cure-light-wounds", tag: "conjuration" },
        { level: 1, name: "feather step", link: "http://www.d20pfsrd.com/magic/all-spells/f/feather-step" },
        { level: 1, name: "frostbite", link: "http://www.d20pfsrd.com/magic/all-spells/f/frostbite", tag: "ice" },
        { level: 1, name: "ice armor", link: "http://www.d20pfsrd.com/magic/all-spells/i/ice-armor", tag: "ice" },
        { level: 1, name: "magic fang", link: "http://www.d20pfsrd.com/magic/all-spells/m/magic-fang" },
        { level: 1, name: "obscuring mist", link: "http://www.d20pfsrd.com/magic/all-spells/o/obscuring-mist", tag: "conjuration" },
        { level: 2, name: "barkskin", link: "http://www.d20pfsrd.com/magic/all-spells/b/barkskin", tag: "domain" },
        { level: 2, name: "frost fall", link: "http://www.d20pfsrd.com/magic/all-spells/f/frost-fall", tag: "ice" },
        { level: 2, name: "lesser restoration", link: "http://www.d20pfsrd.com/magic/all-spells/r/restoration", tag: "conjuration" },
        { level: 2, name: "resist energy", link: "http://www.d20pfsrd.com/magic/all-spells/r/resist-energy" },
        { level: 2, name: "stone call", link: "http://www.d20pfsrd.com/magic/all-spells/s/stone-call", tag: "conjuration" },
        { level: 3, name: "plant growth", link: "http://www.d20pfsrd.com/magic/all-spells/p/plant-growth", tag: "domain" },
        { level: 3, name: "cure moderate wounds", link: "http://www.d20pfsrd.com/magic/all-spells/c/cure-moderate-wounds", tag: "conjuration" },
        { level: 3, name: "sleet storm", link: "http://www.d20pfsrd.com/magic/all-spells/s/sleet-storm", tag: "conjuration ice" }
    ],
    loot:
        { slot: "weapon-m", value: 300, name: "Scimitar", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "armor", value: 150, name: "Hide Shirt", link: "http://www.d20pfsrd.com/equipment/armor" },
        { slot: "armor", value: 257, name: "Darkwood Heavy Wooden Shield", link: "http://www.d20pfsrd.com/equipment/special-materials#TOC-Darkwood" },
        { slot: "shoulders", value: 1000, name: "Cloak of Resistance", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/c-d/cloak-" },
        { slot: "none", value: 1000, name: "Pearl of Power", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/pearl-of-power" }
    ]
});