var gameTiles;
var isYellowDead = false;
var isGreenDead = false;
var isBlueDead = false;
var turnNumber = 0;

var gameTroops;
var currentPower;
var currentTroop;

function setupStart()
{
    gameTiles = setupTilesArray();
    turnNumber = 0;
    isYellowDead = false;
    isGreenDead = false;
    isBlueDead = false;
    newTurn();
}
function newTurn()
{
    turnNumber++
    gameTroops = randomize49(5);
    currentPower = KnotPrivate.countCurrentPower(_Red);
    currentTroop = gameTroops[1]; // TODO dead players
    
    showCurrentPower(currentPower);
    showCurrentCards(gameTroops[0], gameTroops[1], gameTroops[2], gameTroops[3], gameTroops[4], 1); // TODO dead players
    showCurrentMap(gameTiles);
    log("Turn " + turnNumber + ".");
}
function attack(tile, troop = undefined)
{
    // check if troop was changed, update accordingly
    if (troop == undefined)
        troop = currentTroop;
    else
    {
        for (i = 0; i < gameTroops.length; i++)
        {
            if (gameTroops[i] == troop)
            {
                gameTroops[1] = troop; // TODO dead players
                gameTroops[i] = currentTroop;
                break;
            }
        }
    }
    
    // check if attack successful
    var result = gameTiles[tile].owner == _Unclaimed || gameTiles[tile].capture(_Red, currentPower, troop);
    
    // change values in gameTiles
    if (result)
    {
        gameTiles[tile].owner = _Red;
        gameTiles[tile].seenByPlayerRed = true;
        log("Red attacks Tile " + tile + " and succeeds.");
    }
    else 
        log("Red attacks Tile " + tile + " and fails.");
    
    // check for victory
    if (gameTiles.every(function (t) { return t.seenByPlayerRed; }))
    {
        alert("You have explored every tile of the Small World! You win!");
        setupStart();
        return;
    }
    
    // check if others are dead
    if (!isGreenDead && gameTiles.every(function (t) { return t.owner != _Yellow; }))
        isYellowDead = true;
    if (!isYellowDead && gameTiles.every(function (t) { return t.owner != _Green; }))
        isGreenDead = true;
    if (!isBlueDead && gameTiles.every(function (t) { return t.owner != _Blue; }))
        isBlueDead = true;
    
    // AI's turn
    if (!isBlueDead)
        KnotPrivate.play(_Blue);
    if (!isYellowDead)
        KnotPrivate.play(_Yellow);
    if (!isGreenDead)
        KnotPrivate.play(_Green);
    
    newTurn();
}
function askCornerAttack(tile)
{
    showCornerAttackWindow(tile, gameTroops.slice(1)); // TODO dead players
}

var KnotPrivate = {
    nbDeadPlayers: function()
    {
        var i = 0;
        if (isYellowDead) i++
        if (isGreenDead) i++
        if (isBlueDead) i++
        return i;
    },
    countCurrentPower: function(player)
    {
        var power = 0;
        //For each tile in gametiles, 
        // if it's owned by the current player,
        // if an enemy is near it, count 1.
        for (i = 0; i < 49; i++)
        {
            if (gameTiles[i].owner == player)
            {
                // Check above, if not the first row
                if (i >= 7 && gameTiles[i-7].owner != player && gameTiles[i-7].owner != _Unclaimed)
                {
                    power += 1;
                    continue;
                }
                // Check below, if not the last row
                if (i <= 41 && gameTiles[i+7].owner != player && gameTiles[i+7].owner != _Unclaimed)
                {
                    power += 1;
                    continue;
                }
                // Check left, if not the first column
                if (i%7!=0  && gameTiles[i-1].owner != player && gameTiles[i-1].owner != _Unclaimed)
                {
                    power += 1;
                    continue;
                }
                // Check right, if not the first column
                if (i%7!=6  && gameTiles[i+1].owner != player && gameTiles[i+1].owner != _Unclaimed)
                {
                    power += 1;
                    continue;
                }
            }
        }
        return power;
    },
    play: function(player)
    {
        var _power = KnotPrivate.countCurrentPower(player);
        var _troop = gameTroops[player] // TODO dead players
        
        // let's try to find a tile at random that is menaced by this player
        var tile = myRandom(49);
        while (true)
        {
            if (gameTiles[tile].owner != player) // can't conquer myself
            {
                // check above
                if (tile>=7 && gameTiles[tile-7].owner == player)
                    break;
                // check below
                if (tile<=41 && gameTiles[tile+7].owner == player)
                    break;
                // check left
                if (tile%7!=0 && gameTiles[tile-1].owner == player)
                    break;
                // check right
                if (tile%7!=6 && gameTiles[tile+1].owner == player)
                    break;
            }
            tile = myRandom(49);
        }
        
        // so now, _tile is a tile that is menaced by _player.
        // attack!
        if (gameTiles[tile].owner == _Unclaimed || gameTiles[tile].capture(player, _power, _troop))
        {
            gameTiles[tile].owner = player;
            log(PlayerName(player) + " attacks Tile " + tile + " and succeeds.");
        }
        else 
            log(PlayerName(player) + " attacks Tile " + tile + " and fails.");
    
        // check if others are dead
        if (!isYellowDead && gameTiles.every(function (t) { return t.owner != _Yellow; }))
            isYellowDead = true;
        if (!isGreenDead && gameTiles.every(function (t) { return t.owner != _Green; }))
            isGreenDead = true;
        if (!isBlueDead && gameTiles.every(function (t) { return t.owner != _Blue; }))
            isBlueDead = true;
        if (gameTiles.every(function (t) { return t.owner != _Red; }))
        {
            alert("You got wiped off! You lose!");
            setupStart();
        }
    }
};
// TODO tutorial
// TODO reset
// TODO more unique tiles