Greytyphoon.Characters.push({
    name: "Jianna Veeral'tehl",
    flair: "dragon tamer, a.k.a. Thomas Brunyan",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: { name: "Skroa", url: "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions#TOC-Bird" }
    },
    alignment: "NE",
    deity: "Irori",
    languages: "Common, Draconic",
    ancestry: { name: "Wyvaran", url: "http://www.d20pfsrd.com/races/other-races/more-races/advanced-races-11-20-rp/wyvaran-17-rp" },
    level: [ {
        name: "Ranger",
        url: "http://www.d20pfsrd.com/classes/core-classes/ranger",
        quantity: 5,
        archetypes: [
            { title: "", name: "Dragon Hunter", url: "http://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo---ranger-archetypes/dragon-hunter-ranger-archetype" },
            { title: "Combat Style", name: "Archery", url: "http://www.d20pfsrd.com/classes/core-classes/ranger/ranger-combat-styles/" }
        ]
    } ],
    "str": 14,
    "dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "con": 12,
    "int": [ 12, { points: -2, reason: "Racial" } ],
    "wis": [ 13, { points: 2, reason: "Racial" } ],
    "cha": 10,
    traits: [
        { name: "Magical Knack", url: "http://www.d20pfsrd.com/traits/magic-traits/magical-knack" },
        { name: "Reactionary", url: "http://www.d20pfsrd.com/traits/combat-traits/reactionary" },
        { name: "Mark of Slavery", url: "http://www.d20pfsrd.com/traits/drawbacks/mark-of-slavery", drawback: true }
    ],
    startingFeats: [
        { name: "Point-Blank Shot", reason: "Level 1", url: "http://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" }
    ],
    progressFeats: [
        { name: "Precise Shot", reason: "Ranger 2", url: "http://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" },
        { name: "Endurance", reason: "Ranger 3", url: "http://www.d20pfsrd.com/feats/general-feats/endurance-final" },
        { name: "Deadly Aim", reason: "Level 3", url: "http://www.d20pfsrd.com/feats/combat-feats/deadly-aim-combat" },
        { name: "Boon Companion", reason: "Level 5", url: "http://www.d20pfsrd.com/feats/general-feats/boon-companion" },
        { name: "Dragoncrafting", reason: "Dragon Hunter 5", url: "http://www.d20pfsrd.com/feats/general-feats/dragoncrafting" }
    ],
    targetFeats: [
        { name: "Manyshot", url: "http://www.d20pfsrd.com/feats/combat-feats/manyshot-combat-final" }
    ],
    spells: [
        { level: 1, name: "abundant ammunition", url: "http://www.d20pfsrd.com/magic/all-spells/a/abundant-ammunition" },
		{ level: 1, name: "anticipate peril", url: "http://www.d20pfsrd.com/magic/all-spells/a/anticipate-peril" },
		{ level: 1, name: "longstrider", url: "http://www.d20pfsrd.com/magic/all-spells/l/longstrider" },
        { level: 1, name: "resist energy", url: "http://www.d20pfsrd.com/magic/all-spells/r/resist-energy" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Greatsword", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Longbow [2]", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 60, name: "Special Ammo", url: "http://www.d20pfsrd.com/equipment/weapons/weapon-descriptions/ammunition" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", url: "http://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "wrists", value: 4000, name: "Bracers of Falcon's Aim", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-falcon-s-aim" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});