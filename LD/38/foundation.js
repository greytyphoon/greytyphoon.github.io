var _Archers = 0;
var _Knights = 1;
var _Lancers = 2;
var _Assassins = 3;
var _Monks = 4;
function TroopName (troop)
{
    switch (troop)
    {
        case _Archers: return "Archer";
        case _Knights: return "Knight";
        case _Lancers: return "Lancer";
        case _Assassins: return "Assassin";
        case _Monks: return "Monk";
    }
    return "";
}

var _Unclaimed = 0;
var _Red = 1;
var _Blue = 2;
var _Yellow = 3;
var _Green = 4;
function PlayerName (player)
{
    switch (player)
    {
        case _Red: return "Red";
        case _Blue: return "Blue";
        case _Yellow: return "Yellow";
        case _Green: return "Green";
    }
    return "None";
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
    return Math.floor((Math.random() * max));
}

// This function returns an array of 49 values: the numbers between 0 and 48, no repeating, at random places.
function randomize49(length)
{
    length = length || 49;
    
    // First, create an array with 0 to 48 in order
    var randomArray = []
    for (i = 0; i < length; i++)
    {
        randomArray[i] = i;
    }
    
    // Second, shuffle it: for each position, roll another and exchange them.
    for (j = 0; j < length; j++)
    {
        var roll = myRandom(length);
        if (roll != j)
        {
            var permute = randomArray[j];
            randomArray[j] = randomArray[roll];
            randomArray[roll] = permute;
        }
    }
    
    // Third, for extra randomness, exchange some more random places.
    for (k = 0; k < 25; k++)
    {
        var roll1 = myRandom(length);
        var roll2 = myRandom(length);
        if (roll1 != roll2)
        {
            var permute = randomArray[roll1];
            randomArray[roll1] = randomArray[roll2];
            randomArray[roll2] = permute;
        }
    }
    return randomArray;
}