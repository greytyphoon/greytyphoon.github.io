function getRandomDoor(startRoomId, endRoomId, mansionSize)
{
   /* DOOR
    * ----
    * .isOpen (bool)
    * .roomStartId (int)
    * .roomEndId (int)
    * .openFunction (func<string>)
    * .closeFunction (func<string>)
    */
    return {"isOpen": true,
        "roomStartId": startRoomId,
        "roomEndId": endRoomId,
        "openFunction": getRandomFunction(startRoomId, endRoomId, mansionSize),
        "closeFunction": getRandomFunction(startRoomId, endRoomId, mansionSize)};
}

/* The functions returned here can return 3 things:
* - "NoChange", meaning the door's state should not change.
* - "", meaning the door's state should change.
* - "Description", meaning the door's state should change AND the description should be shown to the user.
*/
function getRandomFunction(startRoomId, endRoomId, mansionSize)
{
    var i = myRandom(6);
    var rnd;
    switch (i)
    {
        case 0: // When you leave the room
            rnd = function()
            {
                var currentRoomId = getMansion().player.currentRoomId;
                return (currentRoomId == startRoomId || currentRoomId == endRoomId) ? "You hear a crash in the room you just left. ": "NoChange"; 
            };
            break;
        case 1: // When you leave a room
            var randomRoom = myRandom(mansionSize);
            rnd = function() 
            {
                var tmp = getMansion().player.previousRoomId;
                return (tmp == randomRoom) ? "" : "NoChange";
            };
            break;
        case 2: // When you enter a room
            var randomRoom = myRandom(mansionSize);
            rnd = function() 
            {
                var tmp = getMansion().player.currentRoomId;
                return (tmp == randomRoom) ? "You flick a switch, hoping to turn on the lights, but it has no effect in this room. " : "NoChange";
            };
            break;
        default: // When you move in a direction
            var randomDirection = myRandom(4);
            rnd = function() 
            {
                var tmp = getMansion().player.previousDirection;
                return (tmp == randomDirection) ? "" : "NoChange";
            };
            break;
    }
    return rnd;
}