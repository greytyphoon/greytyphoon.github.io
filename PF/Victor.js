Greytyphoon.Characters.push({
    name: "Victor Emishi",
    flair: "consumed by the black blood",
    meta: {
        quest: "Dave",
        owner: "Grey"
    },
    flavor: {
        eyes: "brown",
        hair: "black",
        weight: "178 lbs",
        height: "6' 3''"
    },
    alignment: "N",
    deity: "Calistria",
    languages: "Common",
    ancestry: { name: "Human", url: "https://www.d20pfsrd.com/races/core-races/human" },
    level: [ {
        name: "Bloodrager",
        url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager",
        quantity: 2,
        archetypes: [
            { title: "Bloodline", name: "Black Blood", url: "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/bloodrager-bloodlines/paizo---bloodrager-bloodlines/black-blood-bloodline" }
        ]
    } ],
    "str": [ 16, { points: 2, reason: "Racial" } ],
    "dex": 12,
    "con": 12,
    "int": 10,
    "wis": 10,
    "cha": 11,
    traits: [
        { name: "Carefully Hidden", url: "https://www.d20pfsrd.com/traits/race-traits/carefully-hidden-human" },
        { name: "Vengeful", url: "https://www.d20pfsrd.com/traits/combat-traits/vengeful/" },
        { name: "Warded against Nature", url: "https://www.d20pfsrd.com/traits/drawbacks/warded-against-nature/", drawback: true }
    ],
    startingFeats: [
        { name: "Power Attack", reason: "Human", url: "https://www.d20pfsrd.com/feats/combat-feats/power-attack-combat-final" },
        { name: "Quick Draw", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/quick-draw-combat-final" }
    ],
    progressFeats: [],
    targetFeats: [
        { name: "Raging Vitality", url: "https://www.d20pfsrd.com/feats/general-feats/raging-vitality" },
        { name: "Arcane Strike", url: "https://www.d20pfsrd.com/feats/combat-feats/arcane-strike-combat" },
        { name: "Blooded Arcane Strike", url: "https://www.d20pfsrd.com/feats/combat-feats/blooded-arcane-strike-combat" },
        { name: "Combat Reflexes", url: "https://www.d20pfsrd.com/feats/combat-feats/combat-reflexes-combat" },
        { name: "Bodyguard", url: "https://www.d20pfsrd.com/feats/combat-feats/bodyguard-combat" }
    ],
    spells: [],
    equips: [
        { slot: "weapon-m", value: 50, name: "Greatsword" },
        { slot: "weapon-m", value: 15, name: "Bec de Corbin" },
        { slot: "weapon-m", value: 315, name: "Longsword", material: { value: 15, name: "Cold-iron", url: "https://www.d20pfsrd.com/equipment/special-materials#TOC-Iron-Cold"} },
        { slot: "weapon-r", value: 1, name: "Chakram", quantity: 3 },
        { slot: "weapon-r", value: 2, name: "Dagger", quantity: 2 },
        { slot: "armor", value: 200, name: "Breastplate" }
    ],
    loot: [
        { slot: "ring", value: 2000, name: "Ring of Protection", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-protection" }
    ]
});