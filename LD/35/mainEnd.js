function setupEnd()
{
    document.getElementById('main').innerHTML = "\
        <div id='endText1' style='text-align:center;'>\
            You go down to the basement<br/>\
            and never come back up.\
        </div><br/>";
    fadeIn('endText1', endText1Over);
}
function endText1Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='endText2' style='text-align:center;'>\
            You are now missing, too,<br/>\
            but we know we can't follow you.\
        </div><br/>";
    fadeIn('endText2', endText2Over);
}
function endText2Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='endText3' style='text-align:center;'>\
            Farewell, and thanks for playing.\
        </div><br/>";
    fadeIn('endText3', endText3Over);
}
function endText3Over()
{
    document.getElementById('main').innerHTML += "\
        <div id='endText3' style='text-align:center;' class='small'>\
            <a onClick='setupStart();'>Replay?</a>\
        </div><br/>";
}