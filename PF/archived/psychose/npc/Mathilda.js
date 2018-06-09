Greytyphoon.Characters.push({
    name: "Mathilda Nalaar",
    flair: "Pharasma's mountain warden",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: { name: "Bat Familiar", url: "https://www.d20pfsrd.com/classes/core-classes/wizard/familiar/" }
    },
    alignment: "NG",
    deity: "Pharasma",
    languages: "Common, Elven, Sylvan, Draconic, Celestial, Infernal, Abyssal, Undercommon",
    ancestry: { name: "Elf", url: "http://www.d20pfsrd.com/races/core-races/elf" },
    level: [ {
        name: "Witch",
        url: "http://www.d20pfsrd.com/classes/base-classes/witch",
        quantity: 6,
        archetypes: [ { title: "Patron", name: "Death", url: "http://www.d20pfsrd.com/classes/base-classes/witch/witch-patrons" } ]
    } ],
    "str": 10,
    "dex": [ 14, { points: 2, reason: "Racial" } ],
    "con": [ 14, { points: -2, reason: "Racial" } ],
    "int": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "wis": 12,
    "cha": 10,
    traits: [
        { name: "Spirit Guide", url: "http://www.d20pfsrd.com/traits/religion-traits/spirit-guide" },
        { name: "Warrior of Old", url: "http://www.d20pfsrd.com/traits/race-traits/warrior-of-old" },
        { name: "Doubt", url: "http://www.d20pfsrd.com/traits/drawbacks/doubt", drawback: true }
    ],
    startingFeats: [
        { name: "Fortune", reason: "Witch 1", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-fortune-su" },
        { name: "Cackle", reason: "Level 1; Extra Hex", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cackle-su" }
    ],
    progressFeats: [
        { name: "Slumber", reason: "Witch 2", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-slumber-su/" },
        { name: "Misfortune", reason: "Level 3; Extra Hex", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-misfortune-su" },
        { name: "Cauldron", reason: "Witch 4", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cauldron" },
        { name: "Healing", reason: "Level 5; Extra Hex", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-healing-su" },
        { name: "Flight", reason: "Witch 6", url: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" }
    ],
    targetFeats: [],
    spells: [
        { level: 1, name: "deathwatch", url: "http://www.d20pfsrd.com/magic/all-spells/d/deathwatch", tag: "patron" },
        { level: 2, name: "blessing of courage and life", url: "http://www.d20pfsrd.com/magic/all-spells/b/blessing-of-courage-and-life", tag: "patron" },
        { level: 3, name: "speak with dead", url: "http://www.d20pfsrd.com/magic/all-spells/s/speak-with-dead", tag: "patron" },
        { level: 1, name: "youthful appearance", url: "http://www.d20pfsrd.com/magic/all-spells/y/youthful-appearance" },
        { level: 2, name: "tattoo potion", url: "http://www.d20pfsrd.com/magic/all-spells/t/tattoo-potion" },
        { level: 3, name: "bestow curse", url: "http://www.d20pfsrd.com/magic/all-spells/b/bestow-curse" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Longsword", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Longbow", url: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "none", value: 5000, name: "Caster's Tattoo", url: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/tattoo-caster-s" },
    ]
});