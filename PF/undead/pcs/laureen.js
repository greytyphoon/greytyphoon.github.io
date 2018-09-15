Greytyphoon.Characters.push({
    name: "Laureen Orwood",
    meta: {
        quest: "Undead",
        owner: "Kashamy"
    },
    alignment: "CE",
    deity: "Tiamat",
    languages: "Common, Dwarven, Undercommon",
    ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Monk",
        url: "https://www.d20pfsrd.com/classes/uchained-classes/unchained-monk",
        quantity: 7,
        archetypes: [
            { title: "Bloodline", name: "Draconic", url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo-bloodrager-bloodlines/draconic" }
        ]
    } ],
    "str": [ 17, { points: 1, reason: "Advancement" }],
    "dex": 14,
    "con": [ 12, { points: 2, reason: "Racial" }],
    "int": 10,
    "wis": [ 10, { points: 2, reason: "Racial" }],
    "cha": [ 14, { points: -2, reason: "Racial" }],
    traits: [
        { name: "Indomitable Faith", url: "https://www.d20pfsrd.com/traits/faith-traits/indomitable-faith" },
        { name: "Reactionary", url: "https://www.d20pfsrd.com/traits/combat-traits/reactionary" }
    ],
    startingFeats: [
        { name: "Dodge", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" },
        { name: "Flight", reason: "Bloodrager 1 & Bloodrager 6", url: "#" }
    ],
    progressFeats: [
        { name: "Mobility", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Spring Attack", reason: "Level 5", url: "https://www.d20pfsrd.com/feats/combat-feats/spring-attack-combat-final" }
    ],
    targetFeats: [],
    spells: [
        { level: 0, name: "enlarge person", url: "https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person", tag: "racial" },
        { level: 0, name: "invisibility", url: "https://www.d20pfsrd.com/magic/all-spells/i/invisibility", tag: "racial" },
        { level: 1, name: "shield", url: "https://www.d20pfsrd.com/magic/all-spells/s/shield" },
        { level: 1, name: "blurred movement", url: "https://www.d20pfsrd.com/magic/all-spells/b/blurred-movement" },
        { level: 1, name: "thunderstomp", url: "https://www.d20pfsrd.com/magic/all-spells/t/thunderstomp" },
        { level: 1, name: "true strike", url: "https://www.d20pfsrd.com/magic/all-spells/t/true-strike" }
    ],
    equips: [
        { slot: "weapon-m", value: 350, name: "Greatsword" },
        { slot: "weapon-r", value: 1, name: "Javelins", quantity: 3 },
        { slot: "armor", value: 1650, name: "Full Plate" }
    ],
    loot: [
        { slot: "hands", value: 8000, name: "Deliquescent Gloves", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/e-g/gloves-deliquescent" }
    ]
});