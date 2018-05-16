var Greytyphoon.Characters.push({
    name: "Engar Chaessdyn",
    flair: "assassin on the loose",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: null,
        source: null,
        dead: false,
        npc: true,
    },
    alignment: "N",
    deity: "Shellyn",
    languages: "Common",
    ancestry: { name: "Human", link: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "uRogue",
        link: "http://www.d20pfsrd.com/classes/unchained-classes/rogue-unchained",
        quantity: 3,
        archetypes: [ { title: "", name: "Knife Master", link: "http://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo---rogue-archetypes/knife-master" } ]
    } ],
    "str": 10,
    "dex": [ 18, { points: 2, reason: "Racial" }, { points: 2, reason: "Enhancement" } ],
    "con": 13,
    "int": 10,
    "wis": 10,
    "cha": 14,
    traits: [
        { name: "Inspired", link: "http://www.d20pfsrd.com/traits/faith-traits/inspired" },
        { name: "River Rat", link: "http://www.d20pfsrd.com/traits/regional-traits/river-rat" },
        { name: "Zealous", link: "http://www.d20pfsrd.com/traits/drawbacks/zealous", drawback: true }
    ],
    startingFeats: [
        { name: "Improved Initiative", link: "http://www.d20pfsrd.com/feats/combat-feats/improved-initiative-combat-final" },
        { name: "Weapon Finesse", link: "http://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat-final" },
        { name: "Two-Weapon Fighting", link: "http://www.d20pfsrd.com/feats/combat-feats/two-weapon-fighting-combat-final" }
    ],
    progressFeats: [
        { name: "Underhanded", link: "http://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo---rogue-talents/underhanded-ex" },
        { name: "Weapon Focus", link: "http://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat-final" }
    ],
    targetFeats: [],
    spells: [],
    loot: [
        { slot: "weapon-m", value: 1200, name: "Dagger*4", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", link: "http://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});