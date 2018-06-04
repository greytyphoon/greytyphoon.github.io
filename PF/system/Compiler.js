var Greytyphoon = { Characters: [] };

function logError(val)
{
    let p = document.createElement("p");
    p.className = "error";
    p.innerHTML = val;
    document.querySelector("body > .container").appendChild(p);
}
/* Main */
function main() {
	for (let character of Greytyphoon.Characters)
    {
        // Check the name first
        let name = character.name;
        if (!name || name == "" || typeof name != "string")
        {
            logError("Found a character with no name: " + character);
            continue;
        }

        checkOverProperties(character);
        checkMeta(character);
        checkAlignment(character);
        checkAncestry(character);
        checkLevels(character);
        checkStat(character.str);
        checkStat(character.dex);
        checkStat(character.con);
        checkStat(character.int);
        checkStat(character.wis);
        checkStat(character.cha);

        if (character.flair) OptionalChecks.checkFlair(character);
        if (character.flavor) OptionalChecks.checkFlavor(character);
        if (character.deity) OptionalChecks.checkDeity(character);
        if (character.languages) OptionalChecks.checkLanguages(character);

        // closing message
        let p = document.createElement("p");
        p.innerHTML = "Finished inspecting " + name;
        document.querySelector("body > .container").appendChild(p);
    }
}

function checkMeta(character)
{
    // Self-check
    if (!character.meta || typeof character.meta != "object")
    {
        logError(character.name + "'s meta property is wrong");
        return;
    }

    // Accepted properties
    var metaAccepts = ["quest", "owner", "companion", "source", "dead", "npc"];
    for (let metaProp in character.meta)
        if (!metaAccepts.includes(metaProp))
            logError(character.name + "'s meta's " + prop + " property is not supported");

    // Simple properties
    if (!character.meta.quest || typeof character.meta.quest != "string")
        logError(character.name + "'s meta.quest property is wrong");
    if (!character.meta.owner || typeof character.meta.owner != "string")
        logError(character.name + "'s meta.owner property is wrong");
    if (character.meta.dead == null || character.meta.dead == undefined || typeof character.meta.dead != "boolean")
        logError(character.name + "'s meta.dead property is wrong");
    if (character.meta.npc == null || character.meta.npc == undefined || typeof character.meta.npc != "boolean")
        logError(character.name + "'s meta.npc property is wrong");

    // Complex/children properties
    if (character.meta.companion) OptionalChecks.checkCompanion(character);
    if (character.meta.source) OptionalChecks.checkSource(character);
}
function checkAlignment(character)
{
    // Alignment is mandatory. Must be a valid, two-letters alignment.
    if (!character.alignment)
    {
        logError(character.name + " has no alignment");
        return;
    }
    var alignmentAccepts = ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"];
    if (!alignmentAccepts.includes(character.alignment))
        logError(character.name + "'s alignment was not recognized");
}
function checkAncestry(character)
{
    // Self-check
    if (!character.ancestry)
    {
        logError(character.name + " has no ancestry");
        return;
    }

    // Accepted properties
    var ancestryAccepts= ["name", "link", "archetypes"];
    for (let ancestryProp in character.ancestry)
        if (!ancestryAccepts.includes(ancestryProp))
            logError(character.name + "'s ancestry's " + ancestryProp + " property is not supported");

    // Simple properties
    if (!character.ancestry.name || typeof character.ancestry.name != "string")
        logError(character.name + "'s ancestry has no name.");
    if (!character.ancestry.link || typeof character.ancestry.link != "string")
        logError(character.name + "'s ancestry has no link.");

    // Complex/children properties
    if (character.ancestry.archetypes)
    {
        if (typeof character.ancestry.archetypes != "object" || character.ancestry.archetypes.constructor !== Array)
            logError(character.name + "'s ancestry's archetype  is not formatted correctly");
        else
            for (let ancestryArch of character.ancestry.archetypes)
                checkAncestryArchetype(ancestryArch);
    }
}
function checkAncestryArchetype(archetype)
{
    // Self-check
    if (typeof archetype != "object")
    {
        logError("Bad ancestry Archetype");
        return;
    }

    // Accepted properties
    var aaAccepts = ["name", "link"];
    for (let prop in archetype)
        if (!aaAccepts.includes(prop))
            logError("Bad Ancestry Archetype, unsupported property");

    // Simple properties
    if (!archetype.name || typeof archetype.name != "string")
        logError("Bad ancestry Archetype, no name");
    if (!archetype.link || typeof archetype.link != "string")
        logError("Bad ancestry Archetype, no link");
}
function checkLevels(character)
{
    if (typeof character.level != "object" || character.level.constructor !== Array)
    {
        logError(character.name + "'s level is not formatted correctly");
        return;
    }
    if (character.level.length < 1)
        logError(character.name + " has no levels");
    for (let level of character.level)
        checkSingleLevel(level);
}
function checkSingleLevel(level)
{
    // Self-check
    if (!level || typeof level != "object")
    {
        logError("Bad level");
        return;
    }

    // Accepted properties
    var levelAccepts = ["name", "link", "quantity", "archetypes"];
    for (let levelProp in level)
        if (!levelAccepts.includes(levelProp))
            logError("Invalid level property: " + levelProp);

    // Simple properties
    if (!level.name || typeof level.name != "string")
        logError("Bad level name");
    if (!level.link || typeof level.link != "string")
        logError("Bad level link");
    if (!level.quantity || typeof level.quantity != "number" || level.quantity < 1 || level.quantity > 20)
        logError("Bad level quantity");

    // Complex/children properties
    if (level.archetypes) 
    {
        if (typeof level.archetypes != "object" || level.archetypes.constructor !== Array)
            logError("Level Archetype is not an array");
        else
            for (let archetype of level.archetypes)
                checkLevelArchetype(archetype);
    }
}
function checkLevelArchetype(archetype)
{
    // Self-check
    if (!archetype || typeof archetype != "object")
    {
        logError("Archetype has bad format");
        return;
    }
    
    // Accepted properties
    var lvlArchetypeAccepts = ["title", "name", "link"];
    for (let archProp in archetype)
        if (!lvlArchetypeAccepts.includes(archProp))
            logError("Unknown property: " + archProp);
        
    // Simple properties
    if (!archetype.name || typeof archetype.name != "string")
        logError("Bad Archetype Name");
    if (!archetype.link || typeof archetype.link != "string")
        logError("Bad Archetype Link");
    if (archetype.title && typeof archetype.title != "string")
        logError("Bad Archetype Title");
}
function checkStat(stat)
{
        // Stat is either an int (no mods) or an array [base, {mod}, {mod}]
        if (typeof stat == "number")
        {
            if (stat < 7 || stat > 17)
                logError("Impossible unmodded stat");
            return;
        }
        if (typeof stat != "object" || stat.constructor !== Array)
        {
            logError("Invalid stat format:" + stat);
            return
        }

        if (typeof stat[0] != "number" || stat[0] < 7 || stat[0] > 18)
            logError
}

var OptionalChecks = {
    checkCompanion: function (character)
    {
        // Self-check
        if (typeof character.meta.companion != "object")
        {
            logError(character.name + "'s companion is not defined properly");
            return;
        }

        // Accepted properties
        var companionAccepts = ["name", "flair", "link"];
        for (let companionProp in character.meta.companion)
            if (!companionAccepts.includes(companionProp))
                logError(character.name +  "'s companion's " + companionProp + " property is not supported");

        // Simple properties
        if (!character.meta.companion.name || typeof character.meta.companion.name != "string")
            logError(character.name + "'s companion has no name.");
        if (!character.meta.companion.link || typeof character.meta.companion.link != "string")
            logError(character.name + "'s companion has no link.");
        if (character.meta.companion.flair &&  typeof character.meta.companion.flair != "string")
            logError(character.name + "'s companion has an invalid flair");
    },
    checkSource: function (character)
    {
        // Self-check
        if (typeof character.meta.source != "object")
        {
            logError(character.name + "'s source is not defined properly");
            return;
        }

        // Accepted properties
        var sourceAccepts = ["name", "link"];
        for (let sourceProp in character.meta.source)
            if (!sourceAccepts.includes(sourceProp))
                logError(character.name +  "'s source's " + sourceProp + " property is not supported");

        // Simple properties
        if (!character.meta.source.name || typeof character.meta.source.name != "string")
            logError(character.name + "'s source has no name.");
        if (!character.meta.source.link || typeof character.meta.source.link != "string")
            logError(character.name + "'s source has no link.");
    },
    checkFlair: function (character)
    {
        // If Flair is present, it must be a string.
        if (typeof character.flair != "string")
            logError(character.name + "'s flair is not a string");
    },
    checkFlavor: function (character)
    {
        // Self-check
        if (typeof character.flavor != "object")
        {
            logError(character.name + "'s flavor is all wrong");
            return;
        }

        // Accepted properties
        var flavorAccepts = ["eyes", "hair", "weight", "height"];
        for (let flavorProp in character.flavor)
            if (!flavorAccepts.includes(flavorProp))
                logError(character.name + "'s flavor's " + flavorProp + " property is not supported");

        // Simple properties
        if (character.flavor.eyes &&  typeof character.flavor.eyes != "string")
            logError(character.name + "'s flavor has invalid eyes");
        if (character.flavor.hair &&  typeof character.flavor.hair != "string")
            logError(character.name + "'s flavor has invalid hair");
        if (character.flavor.weight &&  typeof character.flavor.weight != "string")
            logError(character.name + "'s flavor has invalid weight");
        if (character.flavor.height &&  typeof character.flavor.height != "string")
            logError(character.name + "'s flavor has invalid height");
    },
    checkDeity: function (character)
    {
        // Deity is either a string (god's name) or an object {name, link}
        if (typeof character.deity == "string")
            return;
        if (typeof character.deity != "object")
        {
            logError(character.name + "'s deity is invalid");
            return;
        }

        // Accepted properties
        var deityAccepts = ["name", "link"];
        for (let deityProp in character.deity)
            if (!deityAccepts.includes(deityProp))
                logError(character.name + "'s deity's " + deityProp + " property is not supported");

        // Simple properties
        if (!character.deity.name || typeof character.deity.name != "string")
            logError(character.name + "'s deity has no name.");
        if (!character.deity.link || typeof character.deity.link != "string")
            logError(character.name + "'s deity has no link.");
    },
    checkLanguages: function (character)
    {
        // If Languages is present, it must be a string.
        if (typeof character.languages != "string")
            logError(character.name + "'s language is not a string");
    },
}
function checkOverProperties(character)
{
    var allAccepted = [
        "name", "flair", "meta", "flavor",
        "alignment", "deity", "languages",
        "ancestry", "level",
        "str", "dex", "con", "int", "wis", "cha",
        "traits", "startingFeats", "progressFeats", "targetFeats",
        "spells", "loot"
    ];
    for (let prop in character)
        if (!allAccepted.includes(prop))
            logError(character.name + "'s " + prop + " property is not supported");
}