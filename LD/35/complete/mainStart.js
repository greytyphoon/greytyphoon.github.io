var name = "";

function setupStart()
{
    resetColor();
    document.getElementById('main').innerHTML = "\
        <div id='namediv' style='text-align:center;'>\
            <input type='text' id='txtPlayerName' placeholder='Enter your name' onchange='nameEntered()' />\
        </div>";
}
function nameEntered()
{
    name = document.getElementById('txtPlayerName').value;
    document.getElementById('main').innerHTML = "\
        <div id='startText1' style='text-align:center;'>\
           " + name + " has been dead for a few months now.\
        </div><br/>";
    fadeIn('startText1', startText1Over);
}
function startText1Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='startText2' style='text-align:center;'>\
           Or so the neighbors say.<br/>\
           The house has been too quiet, for too long.\
        </div><br/>";
    fadeIn('startText2', startText2Over);
}
function startText2Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='startText3' style='text-align:center;'>\
           You don't believe any of it.<br/>\
           And you're going to explore the house find out what happened,<br/>\
           even if you have to sneak in:<br/>\
           no one is allowed in while the investigation is in progress,<br/>\
           but it's been a suspiciously long time.\
        </div><br/>";
    fadeIn('startText3', startText3Over);
}
function startText3Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='startText4' style='text-align:center;'>\
           It's about two in the morning when you creep silently under the gate.<br/>\
           You have a feeling you'll need to explore every room in the mansion:<br/>\
           you'd better start making a map.\
        </div><br/>";
    fadeIn('startText4', startText4Over);
}
function startText4Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='startText5' style='text-align:center;' class='small'>\
            <a onClick='cleanupStart();'>Enter the mansion</a>\
        </div><br/>";
}
function cleanupStart()
{
    document.getElementById('main').innerHTML = "";
    setRandomMansion();
    setupGame();
}