Greytyphoon.Characters.push({
    name: "Dnor",
    flair: "black-scaled duergar, disciple of wyrm",
    meta: {
        quest: "Undead",
        owner: "Grey",
        companion: null,
        source: null,
        dead: false,
        npc: true,
    },
    alignment: "CE",
    deity: "Tiamat",
    languages: "Common, Dwarven, Undercommon",
    ancestry: { name: "Duergar", link: "https://www.d20pfsrd.com/races/other-races/uncommon-races/arg-duergar" },
    level: [ {
        name: "Bloodrager",
        link: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager",
        quantity: 6,
        archetypes: [
            { title: "Bloodline", name: "Draconic", link: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo-bloodrager-bloodlines/draconic" }
        ]
    } ],
    "str": [ 17, { points: 1, reason: "Advancement" } ],
    "dex": 14,
    "con": [ 12, { points: 2, reason: "Racial" } ],
    "int": 10,
    "wis": [ 10, { points: 2, reason: "Racial" } ,
    "cha": [ 14, { points: -2, reason: "Racial" } ,
    traits: [
        { name: "Indomitable Faith", link: "https://www.d20pfsrd.com/traits/faith-traits/indomitable-faith" },
        { name: "Reactionary", link: "https://www.d20pfsrd.com/traits/combat-traits/reactionary" }
    ],
    startingFeats: [
        { name: "Dodge", reason: "Level 1", link: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" },
        { name: "Flight", reason: "Bloodrager 1 & Bloodrager 6", link: "#" }
    ],
    progressFeats: [
        { name: "Mobility", reason: "Level 3", link: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Spring Attack", reason: "Level 5", link: "https://www.d20pfsrd.com/feats/combat-feats/spring-attack-combat-final" }
    ],
    targetFeats: [],
    spells: [
        { level: 0, name: "enlarge person", link: "https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person", tag: "racial" },
        { level: 0, name: "invisibility", link: "https://www.d20pfsrd.com/magic/all-spells/i/invisibility", tag "racial" },
        { level: 1, name: "shield", link: "https://www.d20pfsrd.com/magic/all-spells/s/shield" },
        { level: 1, name: "blurred movement", link: "https://www.d20pfsrd.com/magic/all-spells/b/blurred-movement" },
        { level: 1, name: "thunderstomp", link: "https://www.d20pfsrd.com/magic/all-spells/t/thunderstomp" },
        { level: 1, name: "true strike", link: "https://www.d20pfsrd.com/magic/all-spells/t/true-strike" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Greatsword, masterwork", link: "https://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 900, name: "Javelins, masterwork *3", link: "https://www.d20pfsrd.com/equipment/weapons" },
        { slot: "armor", value: 150, name: "Full Plate", link: "https://www.d20pfsrd.com/equipment/armor" },
        { slot: "hands", value: 8000, name: "Deliquescent Gloves", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/e-g/gloves-deliquescent" }
    ]
});