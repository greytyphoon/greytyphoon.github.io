Greytyphoon.Characters.push({
    name: "Mathilda Nalaar",
    flair: "Pharasma's mountain warden",
    meta: {
        quest: "Psychose",
        owner: "Grey",
        companion: { name: "Bat Familiar", link: "https://www.d20pfsrd.com/classes/core-classes/wizard/familiar/" },
        source: null,
        dead: false,
        npc: true
    },
    alignment: "NG",
    deity: "Pharasma",
    languages: "Common, Elven, Sylvan, Draconic, Celestial, Infernal, Abyssal, Undercommon",
    ancestry: { name: "Elf", link: "http://www.d20pfsrd.com/races/core-races/elf" },
    level: [ {
        name: "Witch",
        link: "http://www.d20pfsrd.com/classes/base-classes/witch",
        quantity: 6,
        archetypes: [ { title: "Patron", name: "Death", link: "http://www.d20pfsrd.com/classes/base-classes/witch/witch-patrons" } ]
    } ],
    "str": 10,
    "dex": [ 14, { points: 2, reason: "Racial" } ],
    "con": [ 14, { points: -2, reason: "Racial" } ],
    "int": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "wis": 12,
    "cha": 10,
    traits: [
        { name: "Spirit Guide", link: "http://www.d20pfsrd.com/traits/religion-traits/spirit-guide" },
        { name: "Warrior of Old", link: "http://www.d20pfsrd.com/traits/race-traits/warrior-of-old" },
        { name: "Doubt", link: "http://www.d20pfsrd.com/traits/drawbacks/doubt", drawback: true }
    ],
    startingFeats: [
        { name: "Fortune", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-fortune-su" },
        { name: "Cackle", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cackle-su" }
    ],
    progressFeats: [
        { name: "Slumber", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-slumber-su/" },
        { name: "Misfortune", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-misfortune-su" },
        { name: "Cauldron", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cauldron" },
        { name: "Healing", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-healing-su" },
        { name: "Flight", link: "http://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" }
    ],
    targetFeats: [],
    spells: [
        { level: 1, name: "deathwatch", link: "http://www.d20pfsrd.com/magic/all-spells/d/deathwatch", tag: "patron" },
        { level: 2, name: "blessing of courage and life", link: "http://www.d20pfsrd.com/magic/all-spells/b/blessing-of-courage-and-life", tag: "patron" },
        { level: 3, name: "speak with dead", link: "http://www.d20pfsrd.com/magic/all-spells/s/speak-with-dead", tag: "patron" },
        { level: 1, name: "youthful appearance", link: "http://www.d20pfsrd.com/magic/all-spells/y/youthful-appearance" },
        { level: 2, name: "tattoo potion", link: "http://www.d20pfsrd.com/magic/all-spells/t/tattoo-potion" },
        { level: 3, name: "bestow curse", link: "http://www.d20pfsrd.com/magic/all-spells/b/bestow-curse" }
    ],
    loot: [
        { slot: "weapon-m", value: 300, name: "Longsword", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Longbow", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "none", value: 5000, name: "Caster's Tattoo", link: "http://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/r-z/tattoo-caster-s" },
    ]
});