function setupTilesArray()
{
    var tiles = getRandomTilesArray();
    
    // Yellow starts with 12 tiles
    tiles[0].owner = _Yellow;
    tiles[1].owner = _Yellow;
    tiles[2].owner = _Yellow;
    tiles[3].owner = _Yellow;
    tiles[4].owner = _Yellow;
    tiles[5].owner = _Yellow;
    tiles[8].owner = _Yellow;
    tiles[9].owner = _Yellow;
    tiles[10].owner = _Yellow;
    tiles[11].owner = _Yellow;
    tiles[16].owner = _Yellow;
    tiles[17].owner = _Yellow;
    
    // Blue starts with 12 tiles
    tiles[7].owner = _Blue;
    tiles[14].owner = _Blue;
    tiles[15].owner = _Blue;
    tiles[21].owner = _Blue;
    tiles[22].owner = _Blue;
    tiles[23].owner = _Blue;
    tiles[28].owner = _Blue;
    tiles[29].owner = _Blue;
    tiles[30].owner = _Blue;
    tiles[35].owner = _Blue;
    tiles[36].owner = _Blue;
    tiles[42].owner = _Blue;
    
    // Green starts with 12 tiles
    tiles[6].owner = _Green;
    tiles[12].owner = _Green;
    tiles[13].owner = _Green;
    tiles[18].owner = _Green;
    tiles[19].owner = _Green;
    tiles[20].owner = _Green;
    tiles[25].owner = _Green;
    tiles[26].owner = _Green;
    tiles[27].owner = _Green;
    tiles[33].owner = _Green;
    tiles[34].owner = _Green;
    tiles[41].owner = _Green;
    
    // Red starts with 12 tiles
    tiles[31].owner = _Red;
    tiles[32].owner = _Red;
    tiles[37].owner = _Red;
    tiles[38].owner = _Red;
    tiles[39].owner = _Red;
    tiles[40].owner = _Red;
    tiles[43].owner = _Red;
    tiles[44].owner = _Red;
    tiles[45].owner = _Red;
    tiles[46].owner = _Red;
    tiles[47].owner = _Red;
    tiles[48].owner = _Red;
    tiles[31].seenByPlayerRed = true;
    tiles[32].seenByPlayerRed = true;
    tiles[37].seenByPlayerRed = true;
    tiles[38].seenByPlayerRed = true;
    tiles[39].seenByPlayerRed = true;
    tiles[40].seenByPlayerRed = true;
    tiles[43].seenByPlayerRed = true;
    tiles[44].seenByPlayerRed = true;
    tiles[45].seenByPlayerRed = true;
    tiles[46].seenByPlayerRed = true;
    tiles[47].seenByPlayerRed = true;
    tiles[48].seenByPlayerRed = true;
    
    return tiles;
}

function getRandomTilesArray()
{
    return randomize49().map(i => getTileByNumber(i));
}

function getTileByNumber(nb)
{
   /* TILE
    * ----
    * .number (int)
    * .costToCapture (int)
    * .seenByPlayerRed (bool)
    * .owner (int)
    * .name (string)
    * .description (string)
    * .capture (function (int attacker, int advancePoints, int troop) => bool)
    */
    
    /* TROOP          /* PLAYER
     * -----           * ------
     * 0 -> Archers    *  0 -> Unclaimed
     * 1 -> Knights    *  1 -> Red
     * 2 -> Lancers    *  2 -> Blue
     * 3 -> Assassins  *  3 -> Yellow
     * 4 -> Monks      *  4 -> Green
     */
    
    var newTile = { "number": nb, "costToCapture": myRandom(4)+2, "seenByPlayerRed": false, "owner": 0 };
    switch(nb) 
    {
        case 0:
            newTile["name"]        = "Tiny Bridge";
            newTile["description"] = "Red cannot be defeated here, except by Archers. <br> Knights get +2.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (this.owner == _Red && troop != _Archers) 
                        return false;
                    if (troop == _Knights)
                        power += 2;
                    return power >= this.costToCapture;
                };
            break;
        case 1:
            newTile["name"]        = "Small Tower";
            newTile["description"] = "Blue cannot be defeated here, except by Knights. <br> Lancers and Assassins get +1.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (this.owner == _Blue && troop != _Knights) 
                        return false;
                    if (troop == _Lancers || troop == _Assassins)
                        power += 1;
                    return power >= this.costToCapture;
                };
            break;
        case 2:
            newTile["name"]        = "Little Crevice";
            newTile["description"] = "Green cannot be defeated here, except by Lancers. <br> Monks get +2.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (this.owner == _Green && troop != _Lancers) 
                        return false;
                    if (troop == _Monks)
                        power += 2;
                    return power >= this.costToCapture;
                };
            break;
        case 3:
            newTile["name"]        = "Tiny Forest";
            newTile["description"] = "Yellow cannot be defeated here, except by Assassins. <br> Archers and Knights get +1.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (this.owner == _Yellow && troop != _Assassins) 
                        return false;
                    if (troop == _Archers || troop == _Knights)
                        power += 1;
                    return power >= this.costToCapture;
                };
            break;
        case 4:
            newTile["name"]        = "Little Lake";
            newTile["description"] = "Archers grant automatic victory.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Archers)
                        return true;
                    return power >= this.costToCapture;
                };
            break;
        case 5:
            newTile["name"]        = "Tiny Plains";
            newTile["description"] = "Knights grant automatic victory.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Knights)
                        return true;
                    return power >= this.costToCapture;
                };
            break;
        case 6:
            newTile["name"]        = "Small Road";
            newTile["description"] = "Lancers grant automatic victory.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Lancers)
                        return true;
                    return power >= this.costToCapture;
                };
            break;
        case 7:
            newTile["name"]        = "Mini Sewers";
            newTile["description"] = "Assassins grant automatic victory.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Assassins)
                        return true;
                    return power >= this.costToCapture;
                };
            break;
        case 8:
            newTile["name"]        = "Small Tavern";
            newTile["description"] = "Monks grant automatic victory.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Monks)
                        return true;
                    return power >= this.costToCapture;
                };
            break;
        case 9:
            newTile["name"]        = "Little Cave";
            newTile["description"] = "Archers get -3, Assassins get +3";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Archers)
                        power -= 3;
                    if (troop == _Assassins)
                        power += 3;
                    return power >= this.costToCapture;
                };
            break;
        case 10:
            newTile["name"]        = "Tiny Market";
            newTile["description"] = "Monks get -3, Archers get +3";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Monks)
                        power -= 3;
                    if (troop == _Archers)
                        power += 3;
                    return power >= this.costToCapture;
                };
            break;
        case 11:
            newTile["name"]        = "Mini Pond";
            newTile["description"] = "Lancers get -3, Monks get +3";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Lancers)
                        power -= 3;
                    if (troop == _Monks)
                        power += 3;
                    return power >= this.costToCapture;
                };
            break;
        case 12:
            newTile["name"]        = "Small Swamp";
            newTile["description"] = "Knights get -3, Lancers get +3";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Knights)
                        power -= 3;
                    if (troop == _Lancers)
                        power += 3;
                    return power >= this.costToCapture;
                };
            break;
        case 13:
            newTile["name"]        = "Little Beach";
            newTile["description"] = "Assassins get -3, Knights get +3";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Assassins)
                        power -= 3;
                    if (troop == _Knights)
                        power += 3;
                    return power >= this.costToCapture;
                };
            break;
        case 14:
            newTile["name"]        = "Tiny Shelter";
            newTile["description"] = "Monks get +2. Unless he has Monks, Yellow gets -4.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Monks)
                        power += 2;
                    else if (attacker == _Yellow)
                        power -= 4;
                    return power >= this.costToCapture;
                };
            break;
        case 15:
            newTile["name"]        = "Mini Trail";
            newTile["description"] = "Knights get +2. Unless he has Knights, Red gets -4.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Knights)
                        power += 2;
                    else if (attacker == _Red)
                        power -= 4;
                    return power >= this.costToCapture;
                };
            break;
        case 16:
            newTile["name"]        = "Small Island";
            newTile["description"] = "Assassins get +2. Unless he has Assassins, Green gets -4.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Assassins)
                        power += 2;
                    else if (attacker == _Green)
                        power -= 4;
                    return power >= this.costToCapture;
                };
            break;
        case 17:
            newTile["name"]        = "Little Ranch";
            newTile["description"] = "Lancers get +2. Unless he has Lancers, Blue gets -4.";
            newTile["capture"]     = function (attacker, power, troop) {
                    if (troop == _Lancers)
                        power += 2;
                    else if (attacker == _Blue)
                        power -= 4;
                    return power >= this.costToCapture;
                };
            break;
        default:
            newTile["costToCapture"] = 9001;
            newTile["name"]        = "HUGE VOLCANO";
            newTile["description"] = "Victory here is purely random. The attackers only win &frac13; of the time. Stay away from the volcano.<br><br><i>It&rsquo;s over Anakin, I have the high ground!</i>";
            newTile["capture"]     = function (attacker, power, troop) {
                    return myRandom(3) == 0;
                };
            break;
    }
    return newTile;
}