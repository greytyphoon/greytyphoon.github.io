Greytyphoon.Characters.push({
    name: "Diaelle Pinecreek",
    meta: {
        quest: "Undead",
        owner: "Mike",
        source: { name: "Google Drive", url: "https://docs.google.com/spreadsheets/d/1hFmIRxzlbFIMjzIo2Q8BX8EQZ5lPLNIncM974nC2OPM/edit?usp=drive_web&ouid=115282848900712416421" }
    },
    alignment: "CN",
    deity: "Pharasma",
    languages: "Common, Halfling",
    ancestry: { 
        name: "Halfling",
        url: "https://www.d20pfsrd.com/races/core-races/halfling",
        archetypes: ["Low Blow", "Adaptable Luck"]
    },
    level: [ {
        name: "Rogue",
        url: "https://www.d20pfsrd.com/classes/unchained-classes/rogue-unchained",
        quantity: 4,
        archetypes: [{ name: "Scout", url: "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/scout" }]
    }, {
        name: "Divine Agent",
        url: "https://www.d20pfsrd.com/extras/community-creations/cartmanbeck-s-lab/multiclass-archetypes/divine-agent-cleric-rogue",
        quantity: 1,
        archetypes: [{ title: "Domain", name: "Healing", url: "https://www.d20pfsrd.com/classes/core-classes/cleric/domains/paizo-domains/healing-domain" }]
    }, {
        name: "Warpriest",
        url: "https://www.d20pfsrd.com/classes/hybrid-classes/warpriest",
        quantity: 2,
        archetypes: [{ title: "Blessing", name: "Trickery", url: "https://www.d20pfsrd.com/classes/hybrid-classes/warpriest/blessings" }]
    } ],
    "str": [ 12, { points: -2, reason: "Racial" } ],
    "dex": [ 17, { points: 2, reason: "Racial" }, { points: 1, reason: "Advancement" }, { points: 2, reason: "Enhancement" } ],
    "con": 12,
    "int": 11,
    "wis": [ 14, { points: 2, reason: "Enhancement" } ],
    "cha": [ 12, { points: 2, reason: "Racial" } ],
    traits: [
        { name: "Anatomist", url: "https://www.d20pfsrd.com/traits/combat-traits/anatomist" },
        { name: "Beast Bond", url: "https://www.d20pfsrd.com/traits/social-traits/beast-bond" },
        { name: "Dirty Fighter", url: "https://www.d20pfsrd.com/traits/combat-traits/dirty-fighter" },
        { name: "Provincial", url: "https://www.d20pfsrd.com/traits/drawbacks/provincial", drawback: true }
    ],
    startingFeats: [
        { name: "Dodge", reason: "Level 1", url: "https://www.d20pfsrd.com/feats/combat-feats/dodge-combat-final" },
        { name: "Weapon Finesse", reason: "Rogue 1", url: "https://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat-final" }
    ],
    progressFeats: [
        { name: "Two-Weapon Fighting", reason: "Rogue 2", url: "https://www.d20pfsrd.com/feats/combat-feats/two-weapon-fighting-combat-final" },
        { name: "Mobility", reason: "Level 3", url: "https://www.d20pfsrd.com/feats/combat-feats/mobility-combat-final" },
        { name: "Underfoot", reason: "D.Agent 1", title: "Combat Trick", url: "https://www.d20pfsrd.com/feats/combat-feats/underfoot-combat" },
        { name: "Canny Tumble", reason: "Level 5", url: "https://www.d20pfsrd.com/feats/combat-feats/canny-tumble-combat" },
        { name: "Resiliency", reason: "Rogue 4", url: "https://www.d20pfsrd.com/classes/unchained-classes/rogue-unchained/rogue-talents/paizo-rogue-talents/resiliency" },
        { name: "Weapon Focus (Rapier)", reason: "Warpriest 1", url: "https://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat-final" },
        { name: "Agile Maneuvers", reason: "Level 7", url: "https://www.d20pfsrd.com/feats/combat-feats/agile-maneuvers-combat" }
    ],
    targetFeats: [],
    spells: [
        { level: 1, name: "obscuring mist", url: "https://www.d20pfsrd.com/magic/all-spells/o/obscuring-mist" },
        { level: 1, name: "shield of faith", url: "https://www.d20pfsrd.com/magic/all-spells/s/shield-of-faith" },
        { level: 1, name: "vanish", url: "https://www.d20pfsrd.com/magic/all-spells/v/vanish" }
    ],
    equips: [
        { slot: "weapon-m", value: 320, name: "Rapier", bonus: 1, enchants: [{ name: "Keen", valueB: 1, url: "https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/keen" }] },
        { slot: "weapon-m", value: 302, name: "Dagger", bonus: 1, enchants: [{ name: "Wounding", valueB: 1, url: "https://www.d20pfsrd.com/magic-items/magic-weapons/magic-weapon-special-abilities/wounding" }] },
        { slot: "weapon-r", value: 300, name: "Sling" },
        { slot: "armor", value: 1100, name: "Mithral Shirt", bonus: 1, url: "https://www.d20pfsrd.com/magic-items/magic-armor/specific-magic-armor/mithral-shirt" },
        { slot: "shield", value: 5, name: "Buckler", material: { value: 1000, name: "Mithral", url: "https://www.d20pfsrd.com/equipment/special-materials/#TOC-Mithral" } }
    ],
    loot: [
        { slot: "headband", value: 4000, name: "Headband of Inspired Wisdom", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/h-l/headband-of-inspired-wisdom" },
        { slot: "shoulders", value: 1000, name: "Cloak of Resistance", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/c-d/cloak-of-resistance" },
        { slot: "body", value: 1000, name: "Quick Runner's Shirt", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/r-z/shirt-quick-runners" },
        { slot: "wrists", value: 200, name: "Sleeves of Many Garments", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/r-z/sleeves-of-many-garments" },
		{ slot: "hands", value: 8000, name: "Deliquescent Gloves", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/e-g/gloves-deliquescent" },
		{ slot: "ring", value: 6000, name: "Ring of Swarming Stabs", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-swarming-stabs" },
		{ slot: "ring", value: 2000, name: "Ring of Protection", url: "https://www.d20pfsrd.com/magic-items/rings/ring-of-protection" },
		{ slot: "belt", value: 4000, name: "Belt of Incredible Dexterity", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/belt-of-incredible-dexterity" },
		{ slot: "feet", value: 2500, name: "Boots of Elvenkind", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/boots-of-elvenkind" },
		{ slot: "none", value: 800, name: "Magenta Prism Ioun Stone", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/h-l/ioun-stones" },
        { slot: "none", value: 2000, name: "Handy Haversack", url: "https://www.d20pfsrd.com/magic-items/wondrous-items/a-b/bag-handy-haversack" }
    ]
});