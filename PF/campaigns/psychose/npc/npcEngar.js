Greytyphoon.Characters.push({
    name: "Engar Chaessdyn",
    flair: "assassin on the loose",
    meta: {
        quest: "Psychose",
        owner: "Grey"
    },
    alignment: "N",
    deity: "Shellyn",
    languages: "Common",
    ancestry: { name: "Human", url: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "uRogue",
        url: "http://www.d20pfsrd.com/classes/unchained-classes/rogue-unchained",
        quantity: 3,
        archetypes: [ { title: "", name: "Knife Master", url: "http://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo---rogue-archetypes/knife-master" } ]
    } ],
    "str": 10,
    "dex": [ 18, { points: 2, reason: "Racial" }, { points: 2, reason: "Enhancement" } ],
    "con": 13,
    "int": 10,
    "wis": 10,
    "cha": 14,
    traits: [
        { name: "Inspired", url: "http://www.d20pfsrd.com/traits/faith-traits/inspired" },
        { name: "River Rat", url: "http://www.d20pfsrd.com/traits/regional-traits/river-rat" },
        { name: "Zealous", url: "http://www.d20pfsrd.com/traits/drawbacks/zealous", drawback: true }
    ],
    startingFeats: [
        { name: "Improved Initiative", reason: "Human", url: "http://www.d20pfsrd.com/feats/combat-feats/improved-initiative-combat-final" },
        { name: "Weapon Finesse", reason: "Rogue 1", url: "http://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat-final" },
        { name: "Two-Weapon Fighting", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/combat-feats/two-weapon-fighting-combat-final" }
    ],
    progressFeats: [
        { name: "Underhanded", reason: "Rogue 2", url: "http://www.d20pfsrd.com/classes/core-classes/rogue/rogue-talents/paizo---rogue-talents/underhanded-ex" },
        { name: "Weapon Focus (Dagger)", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat-final" }
    ],
    targetFeats: [],
    spells: [],
    equips: [
        { slot: "weapon-m", value: 302, name: "Dagger", quantity: 4 },
        { slot: "armor", value: 1100, name: "Mithral Shirt", url: "http://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
    ],
    loot: [
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});