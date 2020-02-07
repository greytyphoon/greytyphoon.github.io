Greytyphoon.Characters.push({
    name: "Acruta",
    flair: "vermin witch, disciple of wyrm",
    meta: {
        quest: "Undead",
        owner: "Grey"
    },
    alignment: "CE",
    deity: "Urgathoa",
    languages: "Common, Dwarven, Undercommon, Necril, Draconic, Abyssal",
    ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human", archetypes: ["Dual Talent"] },
    level: [ {
        name: "Witch",
        url: "https://www.d20pfsrd.com/classes/base-classes/witch",
        quantity: 6,
        archetypes: [
            { title: "", name: "Jinx Witch", url: "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/jinx-witch-witch" },
            { title: "Patron", name: "Shadow", url: "https://www.d20pfsrd.com/classes/base-classes/witch/witch-patrons#patron-shadow" }
        ]
    } ],
    "str": 10,
    "dex": [ 14, { points: 2, reason: "Racial" } ],
    "con": 12,
    "int": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" } ],
    "wis": 14,
    "cha": 11,
    traits: [
        { name: "Inspired", url: "https://www.d20pfsrd.com/traits/faith-traits/inspired" },
        { name: "Resilient", url: "https://www.d20pfsrd.com/traits/combat-traits/resilient" }
    ],
    startingFeats: [
        { name: "Dodge", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" },
        { name: "Evil Eye", reason: "Witch 1", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-evil-eye-su" }
    ],
    progressFeats: [
        { name: "Jinx-Eating", reason: "Witch 2" },
        { name: "Mobility", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Flight", reason: "Witch 4", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-flight-su" },
        { name: "Cackle", reason: "Level 5; Extra Hex", url: "https://www.d20pfsrd.com/classes/base-classes/witch/hexes/hexes/common-hexes/hex-cackle-su" },
        { name: "Jinx-Gorging", reason: "Witch 6" }
    ],
    targetFeats: [],
    spells: [
        { level: 0, name: "detect magic", url: "https://www.d20pfsrd.com/magic/all-spells/d/detect-magic" },
        { level: 0, name: "dancing lights", url: "https://www.d20pfsrd.com/magic/all-spells/d/dancing-lights" },
        { level: 0, name: "guidance", url: "https://www.d20pfsrd.com/magic/all-spells/g/guidance" },
        { level: 0, name: "message", url: "https://www.d20pfsrd.com/magic/all-spells/m/message" },
        { level: 1, name: "silent image", url: "https://www.d20pfsrd.com/magic/all-spells/s/silent-image", tag: "patron" },
        { level: 1, name: "enlarge person", url: "https://www.d20pfsrd.com/magic/all-spells/e/enlarge-person" },
        { level: 1, name: "mage armor", url: "https://www.d20pfsrd.com/magic/all-spells/m/mage-armor" },
        { level: 1, name: "hex vulnerability", url: "https://www.d20pfsrd.com/magic/all-spells/h/hex-vulnerability" },
        { level: 1, name: "ray of enfeeblement", url: "https://www.d20pfsrd.com/magic/all-spells/r/ray-of-enfeeblement" },
        { level: 2, name: "darkness", url: "https://www.d20pfsrd.com/magic/all-spells/d/darkness", tag: "patron" },
        { level: 2, name: "burning gaze", url: "https://www.d20pfsrd.com/magic/all-spells/b/burning-gaze" },
        { level: 2, name: "summon swarm", url: "https://www.d20pfsrd.com/magic/all-spells/s/summon-swarm" },
        { level: 2, name: "vomit swarm", url: "https://www.d20pfsrd.com/magic/all-spells/v/vomit-swarm" },
        { level: 3, name: "deeper darkness", url: "https://www.d20pfsrd.com/magic/all-spells/d/deeper-darkness", tag: "patron" },
        { level: 3, name: "dispel magic", url: "https://www.d20pfsrd.com/magic/all-spells/d/dispel-magic" },
        { level: 3, name: "sleet storm", url: "https://www.d20pfsrd.com/magic/all-spells/s/sleet-storm" }
    ],
    equips: [
        { slot: "weapon-m", value: 305, name: "Longspear" },
        { slot: "weapon-r", value: 335, name: "Light Crossbow" },
        { slot: "shield", value: 5, name: "Buckler", material: { value: 1000, name: "Mithral", url: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Mithral" } }
    ],
    loot: [
        { slot: "ring", value: 4000, name: "Ring of Counterspells", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-counterspells" },
        { slot: "none", value: 4000, name: "Pearl of Power", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/wondrous-items/m-p/pearl-of-power" }
    ]
});