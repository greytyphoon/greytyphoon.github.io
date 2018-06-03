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
            logerror("Found a character with no name: " + character);
            continue;
        }
        
        checkOverProperties(character);
        checkFlair(character);
        checkMeta(character);
        checkFlavor(character);
        
        // closing message
        let p = document.createElement("p");
        p.innerHTML = "Finished inspecting " + name;
        document.querySelector("body > .container").appendChild(p);
    }
}

function checkFlair(character)
{
    // Flair can be absent, null, or empty.
    // If Flair is present, it must be a string.
    if (character.flair && typeof character.flair != "string")
        logError(character.name + "'s flair is not a string");
}
function checkMeta(character)
{
    // meta must be present. It must be an object.
    if (!character.meta || typeof character.meta != "object")
    {
        logError(character.name + "'s meta property is wrong");
        return;
    }
    // It must contain Quest, Owner, Dead, and NPC.
    if (!character.meta.quest || typeof character.meta.quest != "string")
        logError(character.name + "'s meta.quest property is wrong");
    if (!character.meta.owner || typeof character.meta.owner != "string")
        logError(character.name + "'s meta.owner property is wrong");
    if (character.meta.dead == null || character.meta.dead == undefined || typeof character.meta.dead != "boolean")
        logError(character.name + "'s meta.dead property is wrong");
    if (character.meta.npc == null || character.meta.npc == undefined || typeof character.meta.npc != "boolean")
        logError(character.name + "'s meta.npc property is wrong");
        
    // It might also contain Companion and Source.
    if (character.meta.companion)
        checkCompanion(character);
    if (character.meta.source)
        checkSource(character);

    // It cannot contain other fields.
    var metaAccepts = ["quest", "owner", "companion", "source", "dead", "npc"];
    for (let metaProp in character.meta)
        if (!metaAccepts.includes(metaProp))
            logError(character.name + "'s meta's " + prop + " property is not supported");
}
function checkCompanion(character)
{
    if (typeof character.meta.companion != "object")
    {
        logError(character.name + "'s companion is not defined properly");
        return;
    }
    var companionAccepts = ["name", "flair", "link"];
    for (let companionProp in character.meta.companion)
        if (!companionAccepts.includes(companionProp))
            logError(character.name +  "'s companion's " + companionProp + " property is not supported");
    
    // companion name is mandatory
    if (!character.meta.companion.name || typeof character.meta.companion.name != "string")
        logError(character.name + "'s companion has no name.");
    // companion link is mandatory
    if (!character.meta.companion.link || typeof character.meta.companion.link != "string")
        logError(character.name + "'s companion has no link.");
    // companion flair is optional
    if (character.meta.companion.flair &&  typeof character.meta.companion.flair != "string")
        logError(character.name + "'s companion has an invalid flair");
}
function checkSource(character)
{
    if (typeof character.meta.source != "object")
    {
        logError(character.name + "'s source is not defined properly");
        return;
    }

    var sourceAccepts = ["name", "link"];
    for (let sourceProp in character.meta.source)
        if (!sourceAccepts.includes(sourceProp))
            logError(character.name +  "'s source's " + sourceProp + " property is not supported");
    
    // source name is mandatory
    if (!character.meta.source.name || typeof character.meta.source.name != "string")
        logError(character.name + "'s source has no name.");
    // source link is mandatory
    if (!character.meta.source.link || typeof character.meta.source.link != "string")
        logError(character.name + "'s source has no link.");
}
function checkFlavor(character)
{
    // flavor is optional
    if (character.flavor)
    {
        if (typeof character.flavor != "object")
        {
            logError(character.name + "'s flavor is all wrong");
            return;
        }
        
        var flavorAccepts = ["eyes", "hair", "weight", "height"];
        for (let flavorProp in character.flavor)
            if (!flavorAccepts.includes(flavorProp))
                logError(character.name + "'s flavor's " + flavorProp + " property is not supported");
            
        // flavor eyes is optional
        if (character.flavor.eyes &&  typeof character.flavor.eyes != "string")
            logError(character.name + "'s flavor has invalid eyes");
        // flavor hair is optional
        if (character.flavor.hair &&  typeof character.flavor.hair != "string")
            logError(character.name + "'s flavor has invalid hair");
        // flavor weight is optional
        if (character.flavor.weight &&  typeof character.flavor.weight != "string")
            logError(character.name + "'s flavor has invalid weight");
        // flavor height is optional
        if (character.flavor.height &&  typeof character.flavor.height != "string")
            logError(character.name + "'s flavor has invalid height");
    }
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