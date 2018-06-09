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
    ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Magus",
        url: "https://www.d20pfsrd.com/classes/base-classes/magus",
        quantity: 6,
        archetypes: [{ name: "Hexcrafter", url: "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/hexcrafter" }]
    } ],
    "str": 14,
    "dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "con": 14,
    "int": 12,
    "wis": 10,
    "cha": 10,
    traits: [
        { name: "Magical Lineage", url: "https://www.d20pfsrd.com/traits/magic-traits/magical-lineage" },
        { name: "Careful Combattant", url: "https://www.d20pfsrd.com/traits/combat-traits/careful-combattant-combat" }
    ],
    startingFeats: [
        { name: "Weapon Finesse", reason: "Human", url: "https://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat-final" },
        { name: "Dodge", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" }
    ],
    progressFeats: [
        { name: "Mobility", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Concentrate", reason: "Magus 3", url: "https://www.d20pfsrd.com/classes/base-classes/magus/magus-arcana/paizo-magus-arcana/concentrate-ex" },
        { name: "Flight", reason: "Magus 4", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" },
        { name: "Arcane Strike", reason: "Level 5", url: "https://www.d20pfsrd.com/feats/combat-feats/arcane-strike-combat" },
        { name: "Fearsome Spell", reason: "Magus 5", url: "https://www.d20pfsrd.com/feats/metamagic-feats/fearsome-spell-metamagic" },
        { name: "Empowered Spell", reason: "Magus 6", url: "https://www.d20pfsrd.com/classes/base-classes/magus/magus-arcana/paizo-magus-arcana/empowered-magic-su" },
    ],
    targetFeats: [],
    spells: [
        { level: 0, name: "brand", url: "https://www.d20pfsrd.com/magic/all-spells/b/brand", tag: "curse" },
        { level: 0, name: "detect magic", url: "https://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
        { level: 0, name: "ghost sound", url: "https://www.d20pfsrd.com/magic/all-spells/g/ghost-sound" },
        { level: 0, name: "light", url: "https://www.d20pfsrd.com/magic/all-spells/l/light" },
        { level: 0, name: "mage hand", url: "https://www.d20pfsrd.com/magic/all-spells/m/mage-hand" },
        { level: 1, name: "hex vulnerability", url: "https://www.d20pfsrd.com/magic/all-spells/h/hex-vulnerability", tag: "curse" },
        { level: 1, name: "chill touch", url: "https://www.d20pfsrd.com/magic/all-spells/c/chill-touch", tag: "magicalLineage" },
        { level: 1, name: "frostbite", url: "https://www.d20pfsrd.com/magic/all-spells/f/frostbite" },
        { level: 1, name: "shield", url: "https://www.d20pfsrd.com/magic/all-spells/s/shield" },
        { level: 1, name: "vanish", url: "https://www.d20pfsrd.com/magic/all-spells/v/vanish" },
        { level: 2, name: "disfiguring touch", url: "https://www.d20pfsrd.com/magic/all-spells/d/disfiguring-touch", tag: "curse" },
        { level: 2, name: "fearsome chill touch", url: "https://www.d20pfsrd.com/magic/all-spells/c/chill-touch", tag: "magicalLineage" },
        { level: 2, name: "stone call", url: "https://www.d20pfsrd.com/magic/all-spells/s/stone-call" },
    ],
    loot: [
        { slot: "weapon-m", value: 1300, name: "Voidglass Rapier, masterwork", url: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Voidglass" },
        { slot: "weapon-r", value: 300, name: "Longbow [2], masterwork", url: "https://www.d20pfsrd.com/equipment/weapons" },
        { slot: "shield", value: 1150, name: "Mithral Buckler", url: "https://www.d20pfsrd.com/equipment/armor" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", url: "https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/a-b/belt-of-incredible-dexterity" }
    ]
});