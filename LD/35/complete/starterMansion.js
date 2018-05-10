var GameMansion = 0;
function getMansion()
{
    if (GameMansion == 0)
        setRandomMansion();
    return GameMansion;
}

function setRandomMansion()
{
   /* MANSION
    * -------
    * .player (object player)
    * .rooms[] (object room)
    * .doors[] (object room)
    */
    var mansionSize = 36;
    var firstRoom = 33; // vestible

	// Generate 6 rows of 6 columns of rooms, and the doors to go with it
	var rooms = [];
	var doors = [];
	var roomPlan = [];
	for (i = 0; i < 6; i++)
	{
		roomPlan[i] = [];
		for (j = 0; j < 6; j++)
        {
            var newRoom = getRandomRoom();
            newRoom.id = rooms.length;
            rooms.push(newRoom);
            roomPlan[i][j] = newRoom;

            if (i != 0)
            {
                // Door with room above
                var oldRoom = roomPlan[i-1][j];
                var door = getRandomDoor(newRoom.id, oldRoom.id, mansionSize);
                oldRoom.doorSouthId = doors.length;
                newRoom.doorNorthId = doors.length;
                doors.push(door);
            }
            if (j != 0)
            {
                // Door with room to left
                var oldRoom = roomPlan[i][j-1];
                var door = getRandomDoor(newRoom.id, oldRoom.id, mansionSize);
                oldRoom.doorEastId = doors.length;
                newRoom.doorWestId = doors.length;
                doors.push(door);
            }
        }
	}

    // place hints in random rooms
    var sizeOfArrays = myRandom(3) + 4; // random length between 4 and 6
    var roomsWithHints = getRandomArray(sizeOfArrays, rooms.length);
    var hintsInRooms = getRandomArray(sizeOfArrays, allPossibleHints.length);
    for (i = 0; i < sizeOfArrays; i++)
    {
        var roomNumber = roomsWithHints[i];
        var hintNumber = hintsInRooms[i];
        rooms[roomNumber].hint = allPossibleHints[hintNumber];
    }

    // initialize player
	var player = new Player(firstRoom);
    
    // build mansion variable
    var mansion = {"player": player, "rooms": rooms, "doors": doors};
    
    // close a few random doors
    var nbDoorsToClose = Math.floor(doors.length / 3); // close up to 1/3 doors. With 36 rooms, there should be 60 doors, so that would be 20 doors closed.
    var doorsToOpen = getRandomArray(nbDoorsToClose, doors.length);
    for(var doorId in doorsToOpen)
    {
        doors[doorId].isOpen = false;
        if (!allRoomsConnected(mansion)) //cancel if this causes the rooms to not be connected
            doors[doorId].isOpen = true;
    }
    
    // Set the mansion, so everybody can see it
	GameMansion = mansion;
}

function Player(firstRoom)
{
   /* PLAYER
    * ------
    * .currentRoomId (int)
    * .previousRoomId (int)
    * .finalRoomId (int)
    * .previousDirection (int) // 0 up, 1 right, 2 down, 3 left
    * .hintsFound[] (object hint)
    */
    this.currentRoomId = firstRoom;
    this.previousRoomId = firstRoom;
    this.finalRoomId = -1;
    this.previousDirection = 0;
    this.hintsFound = [];
}