var Greytyphoon.Characters.push({
    name: "Saniokh Emishi",
    flair: "consumed by the black blood",
    meta: {
        quest: "Dave",
        owner: "Grey",
        companion: null,
        source: null,
        dead: false,
        npc: false,
    },
    alignment: "N",
    deity: "Calistria",
    languages: "Common",
    ancestry: { name: "Human", link: "http://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Bloodrager",
        link: "http://www.d20pfsrd.com/classes/hybrid-classes/bloodrager",
        quantity: 1,
        archetypes: [
            { title: "Bloodline", name: "Black Blood", link: "http://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo---bloodrager-bloodlines/black-blood-bloodline" }
        ]
    } ],
    "str": [ 16, { points: 2, reason: "Racial" } ],
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 11,
    traits: [
        { name: "Called", link: "http://www.d20pfsrd.com/traits/faith-traits/called" },
        { name: "Indomitable Faith", link: "http://www.d20pfsrd.com/traits/faith-traits/indomitable-faith" },
        { name: "Carefully Hidden", link: "http://www.d20pfsrd.com/traits/race-traits/carefully-hidden-human" },
        { name: "Vengeful", link: "https://www.d20pfsrd.com/traits/combat-traits/vengeful/" },
        { name: "Warded against Nature", link: "https://www.d20pfsrd.com/traits/drawbacks/warded-against-nature/", drawback: true }
    ],
    startingFeats: [
        { name: "Power Attack", link: "http://www.d20pfsrd.com/feats/combat-feats/power-attack-combat-final" },
        { name: "Quick Draw", link: "http://www.d20pfsrd.com/feats/combat-feats/quick-draw-combat-final" }
    ],
    progressFeats: [],
    targetFeats: [
        { name: "Raging Vitality", link: "http://www.d20pfsrd.com/feats/general-feats/raging-vitality" },
        { name: "Arcane Strike", link: "http://www.d20pfsrd.com/feats/combat-feats/arcane-strike-combat" },
        { name: "Blooded Arcane Strike", link: "http://www.d20pfsrd.com/feats/combat-feats/blooded-arcane-strike-combat" },
        { name: "Combat Reflexes", link: "http://www.d20pfsrd.com/feats/combat-feats/combat-reflexes-combat" },
        { name: "Bodyguard", link: "http://www.d20pfsrd.com/feats/combat-feats/bodyguard-combat" }
    ],
    spells: [],
    loot: [
        { slot: "weapon-m", value: 300, name: "Greatsword", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-m", value: 300, name: "Bardiche", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "weapon-r", value: 300, name: "Javelin", link: "http://www.d20pfsrd.com/equipment/weapons" },
        { slot: "armor", value: 150, name: "Breastplate", link: "http://www.d20pfsrd.com/equipment/armor" }
    ]
});