function setupGame()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    document.getElementById('main').innerHTML = "\
        <div id='hints' style='float:right;' class='small'>\
            <span style='text-decoration: underline;'>Hints</span><br/>\
        </div>\
        <div class='locker'>\
            <a id='btnNorth' onClick='goNorth()' class='small' style='display:none;'>Go North</a>\
        </div>\
        <div class='locker'>\
            <div style='left: -10%;' class='verticallyCentered'>\
                <a id='btnWest' onClick='goWest()' class='small' style='display:none;'>Go West</a>\
            </div>\
            <div style='right: -10%;' class='verticallyCentered'>\
                <a id='btnEast' onClick='goEast()' class='small' style='display:none;'>Go East</a>\
            </div>\
            <div id='mainGameText' style='margin:20px;'>\
                <div id='maphelp' class='small'>You've already been here.</div>\
                <div id='roomMood'>You are in a room.</div>\
                <div id='mapevent'>You hear a crash in the room you just left.</div>\
                <div id='northMood'>Something is north</div>\
                <div id='southMood'>Something is south.</div>\
                <div id='westMood'>Something is west.</div>\
                <div id='eastMood'>Something is east.</div>\
                <div id='hintMood'>You find a creepy thing.</div>\
                <div id='endgame'>You find the stairs.</div>\
            </div>\
        </div>\
        <div class='locker'> \
            <a id='btnSouth' onClick='goSouth()' class='small' style='display:none;'>Go South</a>\
        </div>";

    // Supply the screen with information
    document.getElementById('roomMood').innerHTML = currentRoom.description;
    document.getElementById('maphelp').innerHTML = (currentRoom.visited) ? "You've already been here.": "";
    document.getElementById('mapevent').innerHTML = "";
    document.getElementById('northMood').innerHTML = isOpenDoor(currentRoom.doorNorthId) ? currentRoom.doorNorthOpen : currentRoom.doorNorthClosed;
    document.getElementById('southMood').innerHTML = isOpenDoor(currentRoom.doorSouthId) ? currentRoom.doorSouthOpen : currentRoom.doorSouthClosed;
    document.getElementById('westMood').innerHTML = isOpenDoor(currentRoom.doorWestId) ? currentRoom.doorWestOpen : currentRoom.doorWestClosed;
    document.getElementById('eastMood').innerHTML = isOpenDoor(currentRoom.doorEastId) ? currentRoom.doorEastOpen : currentRoom.doorEastClosed;
    document.getElementById('hintMood').innerHTML = (currentRoom.hint) ? currentRoom.hint.longDecription : "";
    document.getElementById('endgame').innerHTML = "";
    
    // Show the hints that were found
    var hintDisplay = document.getElementById('hints');
    if (mansion.player.hintsFound.length == 0)
        hintDisplay.style.display = 'none';
    else
        for (i = 0; i < mansion.player.hintsFound.length; i++)
        {
            hintDisplay.innerHTML += mansion.player.hintsFound[i].shortDecription + "<br/>";
        }

    // Step in the room: mark as visited, gain hints
    var fadeInSpeed = 15;
    if (!currentRoom.visited)
    {
        fadeInSpeed = 35;
        currentRoom.visited = true;
        if (currentRoom.hint)
            mansion.player.hintsFound.push(currentRoom.hint);
    
        // Check victory condition
        var allVisited = true;
        for(i = 0; i < mansion.rooms.length; i++)
        {
            if (!mansion.rooms[i].visited)
            {
                allVisited = false;
                break;
            }
        }
        if (allVisited)
        {
            mansion.player.finalRoomId = mansion.player.currentRoomId;
        }
    }

    // Fade In the mainGameText, then fade in all the buttons
    fadeIn('mainGameText', fadeInAllBtnDirections, fadeInSpeed);

    // Change state for all doors
    for (i = 0; i < mansion.doors.length; i++)
    {
        var door = mansion.doors[i];
        if (door.isOpen)
        {
            if (door.roomStartId != mansion.player.currentRoomId && door.roomEndId != mansion.player.currentRoomId) // can't close in the room I'm getting in
            {
                var result = door.closeFunction();
                if (result != "NoChange")
                {
                    door.isOpen = false;
//                    if (!allRoomsConnected(mansion)) //cancel if this causes the rooms to not be connected
//                        door.isOpen = true;
//                    else
                        if (result != "")
                            document.getElementById('mapevent').innerHTML += result;
                }
            }
        }
        else
        {
            var result = door.closeFunction();
            if (result != "NoChange")
            {
                door.isOpen = true;
                if (result != "")
                    document.getElementById('mapevent').innerHTML += result;
            }
        }
    }
    
    // Show the stairs in the last room
    if (mansion.player.finalRoomId == mansion.player.currentRoomId)
    {
        document.getElementById('endgame').innerHTML = "You managed to notice a trapdoor, hidden away under the carpet. It has no lock, and a ladder goes down in the dark basement.<br/><a onClick='setupEnd()' class='small'>Climb Down</a>";
    }
}

function goNorth()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    var currentDoor = mansion.doors[currentRoom.doorNorthId];
    var newRoomId = (currentDoor.roomStartId == mansion.player.currentRoomId) ? currentDoor.roomEndId : currentDoor.roomStartId;
    goDirection(newRoomId, 0);
}
function goSouth()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    var currentDoor = mansion.doors[currentRoom.doorSouthId];
    var newRoomId = (currentDoor.roomStartId == mansion.player.currentRoomId) ? currentDoor.roomEndId : currentDoor.roomStartId;
    goDirection(newRoomId, 2);
}
function goWest()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    var currentDoor = mansion.doors[currentRoom.doorWestId];
    var newRoomId = (currentDoor.roomStartId == mansion.player.currentRoomId) ? currentDoor.roomEndId : currentDoor.roomStartId;
    goDirection(newRoomId, 3);
}
function goEast()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    var currentDoor = mansion.doors[currentRoom.doorEastId];
    var newRoomId = (currentDoor.roomStartId == mansion.player.currentRoomId) ? currentDoor.roomEndId : currentDoor.roomStartId;
    goDirection(newRoomId, 1);
}
function goDirection(newRoomId, dir)
{
    var mansion = getMansion();
    mansion.player.previousRoomId = mansion.player.currentRoomId;
    mansion.player.currentRoomId = newRoomId;
    mansion.player.previousDirection = dir;
    darkenColor();
    document.getElementById('movesound').play();
    setupGame();
}

// private function to make the code above more readable
function fadeInAllBtnDirections()
{
    var mansion = getMansion();
    var currentRoom = mansion.rooms[mansion.player.currentRoomId];
    
    //North
    if (isOpenDoor(currentRoom.doorNorthId))
    {
        document.getElementById('btnNorth').style.display = 'block';
        fadeIn('btnNorth', function(){}); // empty function, don't call anybody when done fading in
    }
    
    //South
    if (isOpenDoor(currentRoom.doorSouthId))
    {
        document.getElementById('btnSouth').style.display = 'block';
        fadeIn('btnSouth', function(){});
    }
    
    //West
    if (isOpenDoor(currentRoom.doorWestId))
    {
        document.getElementById('btnWest').style.display = 'block';
        fadeIn('btnWest', function(){});
    }
    
    //East
    if (isOpenDoor(currentRoom.doorEastId))
    {
        document.getElementById('btnEast').style.display = 'block';
        fadeIn('btnEast', function(){});
    }
}
function isOpenDoor(doorId)
{
    return doorId != -1 && getMansion().doors[doorId].isOpen;
}