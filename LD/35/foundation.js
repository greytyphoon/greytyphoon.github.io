// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
    return Math.floor((Math.random() * max));
}

function getRandomArray(length, max)
{
    if (length < 1)
        return [];
    var list = [];
    list.push(myRandom(max)); //speed up by adding the first one at once
    for (i = 1; i < length; i++)
    {
        var addedOne = false;
        while (!addedOne) 
        {
            var rnd = myRandom(max);
            var validRnd = true;
            for (j = 0; j < list.length; j++)
            {
                if (list[j] == rnd)
                    validRnd = false;
            }
            if (validRnd) 
            {
                list.push(rnd);
                addedOne = true;
            }
        }
    }
    return list;
}

// All Rooms Connected, the recursive function block
function allRoomsConnected(mansion)
{
    roomsConnected = new Array(mansion.rooms.length);
    roomsRecursive(mansion, roomsConnected, 0);
    var connectAll = true;
    for (i = 0; i < roomsConnected.length; i++)
    {
        if (roomsConnected[i] != true)
        {
            connectAll = false;
            break;
        }
    }
    return connectAll;
}

function roomsRecursive(mansion, roomsConnected, currentRoomId)
{
    var currentRoom = mansion.rooms[currentRoomId];
    roomsConnected[currentRoomId] = true;
    
    doorsRecursive(mansion, roomsConnected, currentRoomId, currentRoom.doorNorthId);
    doorsRecursive(mansion, roomsConnected, currentRoomId, currentRoom.doorSouthId);
    doorsRecursive(mansion, roomsConnected, currentRoomId, currentRoom.doorWestId);
    doorsRecursive(mansion, roomsConnected, currentRoomId, currentRoom.doorEastId);
}

function doorsRecursive(mansion, roomsConnected, currentRoomId, currentDoorId)
{
    var currentDoor = mansion.doors[currentDoorId];
    if (currentDoorId != -1 && currentDoor.isOpen)
    {
        var otherRoomId = currentDoor.roomStartId == currentRoomId ? currentDoor.roomEndId : currentDoor.roomStartId;
        // call roomsRecursive, but not if it has already been done for that room
        if (roomsConnected[otherRoomId] != true) 
            roomsRecursive(mansion, roomsConnected, otherRoomId);
    }
}

// FadeIn an element
function fadeIn(elementId, animationDoneEvent, optionalSpeed)
{
    var speed = (optionalSpeed) ? optionalSpeed : 35;
    var s = document.getElementById(elementId).style;
    s.opacity = 0;
    (function fadeInInternal(){
        s.opacity = Number(s.opacity) + 0.01;
        if (s.opacity >= 1)
            animationDoneEvent();
        else
            setTimeout(fadeInInternal, speed);
    })();
}

// Room Color darkens
var darkeningColor = 115;
function resetColor() 
{
    darkeningColor = 115;
    document.body.style.backgroundColor = 'rgb(115,125,130)';
}
function darkenColor() 
{
    if (darkeningColor > 40)
    {
        darkeningColor -= 2;
        document.body.style.backgroundColor = 'rgb(' + darkeningColor + ',' + (darkeningColor+10) + ',' + (darkeningColor+15) + ')';
    }
}