Greytyphoon.Characters.push({
    name: "Jianna Veeral'tehl",
    flair: "dragon tamer, a.k.a. Thomas Brunyan",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: { name: "Skroa", link: "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions#TOC-Bird" },
        source: null,
        dead: false,
        npc: true,
    },
    alignment: "NE",
    deity: "Irori",
    languages: "Common, Draconic",
    ancestry: { name: "Wyvaran", link: "http://www.d20pfsrd.com/races/other-races/more-races/advanced-races-11-20-rp/wyvaran-17-rp" },
    level: [ {
        name: "Ranger",
        link: "http://www.d20pfsrd.com/classes/core-classes/ranger",
        quantity: 5,
        archetypes: [
            { title: "", name: "Dragon Hunter", link: "http://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo---ranger-archetypes/dragon-hunter-ranger-archetype" },
            { title: "Combat Style", name: "Archery", link: "http://www.d20pfsrd.com/classes/core-classes/ranger/ranger-combat-styles/" }
        ]
    } ],
    "str": 14,
    "dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "con": 12,
    "int": [ 12, { points: -2, reason: "Racial" } ],
    "wis": [ 13, { points: 2, reason: "Racial" } ],
    "cha": 10,
    traits: [
        { name: "Magical Knack", link: "http://www.d20pfsrd.com/traits/magic-traits/magical-knack" },
        { name: "Reactionary", link: "http://www.d20pfsrd.com/traits/combat-traits/reactionary" },
        { name: "Mark of Slavery", link: "http://www.d20pfsrd.com/traits/drawbacks/mark-of-slavery", drawback: true }
    ],
    startingFeats: [
        { name: "Point-Blank Shot", link: "http://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat-final" }
    ],
    progressFeats: [
        { name: "Precise Shot", link: "http://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat-final" },
        { name: "Endurance", link: "http://www.d20pfsrd.com/feats/general-feats/endurance-final" },
        { name: "Deadly Aim", link: "http://www.d20pfsrd.com/feats/combat-feats/deadly-aim-combat" },
        { name: "Boon Companion", link: "http://www.d20pfsrd.com/feats/general-feats/boon-companion" },
        { name: "Dragoncrafting", link: "http://www.d20pfsrd.com/feats/general-feats/dragoncrafting" }
    ],
    targetFeats: [
        { name: "Manyshot", link: "http://www.d20pfsrd.com/feats/combat-feats/manyshot-combat-final" }
    ],
    spells: [
        { level: 1, name: "abundant ammunition", link: "http://www.d20pfsrd.com/magic/all-spells/a/abundant-ammunition" },
		{ level: 1, name: "anticipate peril", link: "http://www.d20pfsrd.com/magic/all-spells/a/anticipate-peril" },
		{ level: 1, name: "longstrider", link: "http://www.d20pfsrd.com/magic/all-spells/l/longstrider" },
        { level: 1, name: "resist energy", link: "http://www.d20pfsrd.com/magic/all-spells/r/resist-energy" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Greatsword", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Longbow [2]", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 60, name: "Special Ammo", link: "http://www.d20pfsrd.com/equipment/weapons/weapon-descriptions/ammunition" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", link: "http://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "wrists", value: 4000, name: "Bracers of Falcon's Aim", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/bracers-of-falcon-s-aim" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});