function showCurrentPower(power)
{
    document.getElementById('powerLevel').innerHTML = "Current Power: " + power;
}

function showCurrentCards(troop1, troop2, troop3, troop4, troop5, nbGreyTroops)
{
    //TODO account for dead players: Names are hard-coded...
    document.getElementById('cardTray').innerHTML =
        "<div><img src='assets/Troop" + TroopName(troop1) + ".png' alt='" + TroopName(troop1) + "s' title='" + TroopName(troop1) + "s' class='disabled' /></div>" +
        "<div><img src='assets/Troop" + TroopName(troop2) + ".png' alt='" + TroopName(troop2) + "s' title='" + TroopName(troop2) + "s' " + (nbGreyTroops>=2?"class='disabled":"") + " /><br>Red</div>" +
        "<div><img src='assets/Troop" + TroopName(troop3) + ".png' alt='" + TroopName(troop3) + "s' title='" + TroopName(troop3) + "s' " + (nbGreyTroops>=3?"class='disabled":"") + " /><br>Blue</div>" +
        "<div><img src='assets/Troop" + TroopName(troop4) + ".png' alt='" + TroopName(troop4) + "s' title='" + TroopName(troop4) + "s' " + (nbGreyTroops>=4?"class='disabled":"") + " /><br>Yellow</div>" +
        "<div><img src='assets/Troop" + TroopName(troop5) + ".png' alt='" + TroopName(troop5) + "s' title='" + TroopName(troop5) + "s' /><br>Green</div>";
}

function showCurrentMap(tiles) // tiles should be an array of Tile objects
{
    var html = "";
    for(i = 0; i < tiles.length; i++)
    {
        var ownerName = PlayerName(tiles[i].owner);
        var scout = !tiles[i].seenByPlayerRed
            ? ""
            : "<span class='scoutBadge' onmouseenter=\"showScoutInfo('"
            + tiles[i].name + "', "
            + tiles[i].costToCapture + ", '"
            + tiles[i].description + "', event.pageX, event.pageY)\" onmouseleave='hideScoutInfo()'>?</span>";

        // see if Red menaces the tile, and how many times.
        var nbMenaces = 0;
        if (tiles[i].owner != _Red) // can't menace my own tiles
        {
            //Check the tile above, is it red?
            if (i>=7 && tiles[i-7].owner == _Red)
                nbMenaces++
            //Check the tile below, is it red?
            if (i<=41 && tiles[i+7].owner == _Red)
                nbMenaces++
            //Check the tile left, is it red?
            if (i%7!=0 && tiles[i-1].owner == _Red)
                nbMenaces++
            //Check the tile right, is it red?
            if (i%7!=6 && tiles[i+1].owner == _Red)
                nbMenaces++
        }

        if (nbMenaces == 0)
            html += "<div class='owner-" + ownerName + "'>" + scout + "</div>";
        else if (nbMenaces == 1 || tiles[i].owner == _Unclaimed)
            html += "<div onclick='attack(" + i + ")' class='owner-" + ownerName + " menaced'>" + scout + "</div>";
        else
            html += "<div onclick='askCornerAttack(" + i + ")' class='owner-" + ownerName + " menaced corner'>" + scout + "</div>";
    }
    document.getElementById('gameBoard').innerHTML = html;
}

function showScoutInfo(title, power, desc, mouseX, mouseY)
{
    var floater = document.getElementById('mouseoverInfo');
    floater.innerHTML = "<div style='float:right'><small>Power</small> " + power + "</div><h3>" + title + "</h3>" + desc;
    floater.style.opacity = 1;
    floater.style.left = mouseX;
    floater.style.top = mouseY;
}
function hideScoutInfo()
{
    var floater = document.getElementById('mouseoverInfo');
    floater.style.opacity = 0;
    floater.style.left = 0;
    floater.style.top = 0;
}

function showCornerAttackWindow(tile, availableTroops)
{
    document.getElementById('cornerAttack').className = "in";
    var html = "<div><h3>Corner Attack</h3>When attacking from two sides, you can choose which Troop Card you want to use.<div>";
    for (i = 0; i < availableTroops.length; i++)
    {
        var name = TroopName(availableTroops[i]);
        html += "<img onclick='hideCornerAttackWindow();attack(" + tile + ", " + availableTroops[i] + ")' src='assets/Troop" + name + ".png' alt='" + name + "s' title='" + name + "s' />";
    }
    html += "</div><a onclick='hideCornerAttackWindow()'>Cancel</a></div>";
    document.getElementById('cornerAttack').innerHTML = html;
}
function hideCornerAttackWindow()
{
    document.getElementById('cornerAttack').className = "";
}