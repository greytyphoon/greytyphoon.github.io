Greytyphoon.Characters.push({
    name: "Lao",
    flair: "agent of shadows, disciple of wyrm",
    meta: {
        quest: "Undead",
        owner: "Grey"
    },
    alignment: "CE",
    deity: "Norgorber",
    languages: "Common, Undercommon",
    ancestry: { name: "Human", link: "https://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Magus",
        link: "https://www.d20pfsrd.com/classes/base-classes/magus",
        quantity: 6,
        archetypes: [{ name: "Hexcrafter", link: "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/hexcrafter" }]
    } ],
    "str": 14,
    "dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 10,
    traits: [
        { name: "Magical Lineage", link: "https://www.d20pfsrd.com/traits/faith-traits/inspired" },
        { name: "Careful Combattant", link: "https://www.d20pfsrd.com/traits/combat-traits/careful-combattant-combat" }
    ],
    startingFeats: [
        { name: "Weapon Finesse", reason: "Human", link: "https://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat-final" },
        { name: "Dodge", reason: "Level 1", link: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" }
    ],
    progressFeats: [
        { name: "Mobility", reason: "Level 3", link: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Concentrate", reason: "Magus 3", link: "https://www.d20pfsrd.com/classes/base-classes/magus/magus-arcana/paizo-magus-arcana/concentrate-ex" },
        { name: "Flight", reason: "Magus 4", link: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" },
        { name: "Arcane Strike", reason: "Level 5", link: "https://www.d20pfsrd.com/feats/combat-feats/arcane-strike-combat" },
        { name: "Fearsome Spell", reason: "Magus 5", link: "https://www.d20pfsrd.com/feats/metamagic-feats/fearsome-spell-metamagic" },
        { name: "Empowered Spell", reason: "Magus 6", link: "https://www.d20pfsrd.com/classes/base-classes/magus/magus-arcana/paizo-magus-arcana/empowered-magic-su" },
    ],
    targetFeats: [],
    spells: [
        { level: 0, name: "brand", link: "https://www.d20pfsrd.com/magic/all-spells/b/brand", tag: "curse" },
        { level: 0, name: "detect magic", link: "https://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
        { level: 0, name: "ghost sound", link: "https://www.d20pfsrd.com/magic/all-spells/g/ghost-sound" },
        { level: 0, name: "light", link: "https://www.d20pfsrd.com/magic/all-spells/l/light" },
        { level: 0, name: "mage hand", link: "https://www.d20pfsrd.com/magic/all-spells/m/mage-hand" },
        { level: 1, name: "hex vulnerability", link: "https://www.d20pfsrd.com/magic/all-spells/h/hex-vulnerability", tag: "curse" },
        { level: 1, name: "chill touch", link: "https://www.d20pfsrd.com/magic/all-spells/c/chill-touch", tag: "magicalLineage" },
        { level: 1, name: "frostbite", link: "https://www.d20pfsrd.com/magic/all-spells/f/frostbite" },
        { level: 1, name: "shield", link: "https://www.d20pfsrd.com/magic/all-spells/s/shield" },
        { level: 1, name: "vanish", link: "https://www.d20pfsrd.com/magic/all-spells/v/vanish" },
        { level: 2, name: "disfiguring touch", link: "https://www.d20pfsrd.com/magic/all-spells/d/disfiguring-touch", tag: "curse" },
        { level: 2, name: "fearsome chill touch", link: "https://www.d20pfsrd.com/magic/all-spells/c/chill-touch", tag: "magicalLineage" },
        { level: 2, name: "stone call", link: "https://www.d20pfsrd.com/magic/all-spells/s/stone-call" },
    ],
    loot: [
        { slot: "weapon-m", value: 1300, name: "Voidglass Rapier, masterwork", link: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Voidglass" },
        { slot: "weapon-r", value: 300, name: "Longbow [2], masterwork", link: "https://www.d20pfsrd.com/equipment/weapons" },
        { slot: "shield", value: 1150, name: "Mithral Buckler", link: "https://www.d20pfsrd.com/equipment/armor" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", link: "https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", link: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});