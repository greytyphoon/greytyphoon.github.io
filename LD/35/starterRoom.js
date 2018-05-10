var roomNumberHack = -1;
function getRandomRoom()
{
   /* ROOM
    * ----
    * .id (int)
    * .visited (bool)
    * .hint (object hint) //might be false, contains "shortDecription" and "longDecription"
    * .doorNorthId (int)
    * .doorSouthId (int)
    * .doorWestId (int)
    * .doorEastId (int)
    *
    * .description (string)
    * .doorNorthOpen (string)
    * .doorNorthClosed (string)
    * .doorSouthOpen (string)
    * .doorSouthClosed (string)
    * .doorWestOpen (string)
    * .doorWestClosed (string)
    * .doorEastOpen (string)
    * .doorEastClosed (string)
    */
    roomNumberHack++;
    var newRoom = { "visited": false, "hint": false, "doorNorthId": -1, "doorSouthId": -1, "doorWestId": -1, "doorEastId": -1};
    switch(roomNumberHack) 
    {
        case 0:
            newRoom["description"]     = "The manor's interior garden is growing in front of you, neglected. Some plants have withered and died, some have grown out of control.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "There is a very small shed in the north of the room, where rakes and shovels are lined up.";
            newRoom["doorSouthOpen"]   = "To the south, you can see a way across the climbing plants and gardening tools.";
            newRoom["doorSouthClosed"] = "To the south, climbing plants have blocked off a large section of the wall.";
            newRoom["doorWestOpen"]    = "A door to the west leads outside the mansion."; // this shouldn't be used.
            newRoom["doorWestClosed"]  = "High windows on the western wall let a flood of moonlight in, a delight for the wild vegetation.";
            newRoom["doorEastOpen"]    = "East of you is a small door, leading back inside the sturdy walls of the mansion. You also notice a small pillar, with a sun clock on it.";
            newRoom["doorEastClosed"]  = "The eastern wall's paint has started peeling off. You notice a small pillar, with a sun clock on it.";
            break;
        case 1:
        // TODO big job here
            newRoom["description"]     = "This is a narrow room that smells like smoke, with heavy leather armchairs.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "An old gramophone is on a shelf on the north wall, and the shelf is filled with discs. A window, nearby, lets some moonlight and fresh air in.";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 2:
            newRoom["description"]     = "You have stepped in a small room that looks like an addendum to the main dinning room.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 3:
            newRoom["description"]     = "This room is mostly a corridor, and it's pretty barren. The floor is very worn.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 4:
            newRoom["description"]     = "You enter the kitchen, and the smell of stale food is strong. You decide not to open the fridge, in case it would make it all worse.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 5:
            newRoom["description"]     = "This room looks like it was a food storage once, and a few wooden tables and butcher's knives were placed to cut large pieces of meat.";
            newRoom["doorNorthOpen"]   = "A door to the north leads outside the mansion."; // this shouldn't be used.
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 6:
            newRoom["description"]     = "The manor's garden is sprawling in front of your eyes. Almost all flowers have withered from lack of care.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "A door to the west leads outside the mansion."; // this shouldn't be used.
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 7:
            newRoom["description"]     = "This is a narrow room that looks like a boudoir, with comfortable armchairs, a few ashtrays and a library.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 8:
            newRoom["description"]     = "This is the main dinning room. The table is elegantly set, and there is water left in a crystal pitcher on the table.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 9:
            newRoom["description"]     = "This is a small dinning room, made for smaller occasions perhaps, because the table could not really hold more than 6 persons. A dirty plate is still on the table, directly on the wood.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 10:
            newRoom["description"]     = "This small hallway feels narrow and has few decorations, save for some elegant chandeliers on the walls.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 11:
            newRoom["description"]     = "This small bedroom reminds you of a prison cell, with its small window.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 12:
            newRoom["description"]     = "You walk into a hallway with blank walls, and a small electric lamp hanging overhead. There is mud on the floor, long dried up.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 13:
            newRoom["description"]     = "The light is out in this hallway. The walls are lined with a few statues, who lose their air of grandeur in the darkness of the night.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 14:
            newRoom["description"]     = "According to a craving in the marble arch, this hallway is the entrance to the west wing.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 15:
            newRoom["description"]     = "The roof is very high in this hallway, and windows on every side let the night look inside the mansion.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 16:
            newRoom["description"]     = "You enter a hallway with worn floor and simple light fixtures. It certainly does not blend in with the other rooms in the mansion, richly decorated.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 17:
            newRoom["description"]     = "This is a small bedroom, probably intended for the personnel. It's very small, and couldn't hold more than one person.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 18:
            newRoom["description"]     = "This is a large wardrobe, several paces wide, and just as many deep.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 19:
            newRoom["description"]     = "You walk in the master's bedroom, where a skylight has been left open. Most of the furniture here is ruined.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 20:
            newRoom["description"]     = "You walk in a large bedroom. Everything is neatly in its place, and every shelf is empty.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 21:
            newRoom["description"]     = "This is a hallway, featuring rich carpets and tapestries.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 22:
            newRoom["description"]     = "This small salon has custom shelves made to hold instruments.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 23:
            newRoom["description"]     = "This room looks like a concert room, with a lot of chairs stacked in a corner, empty space, and wide windows.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "The windows on the east side are taller than you are, but the heavy red curtains are pulled to shield from the darkness of the night outside.";
            break;
        case 24:
            newRoom["description"]     = "This is a wardrobe, but there is ample room to walk around.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 25:
            newRoom["description"]     = "This bedroom has brightly colored furniture and a few toys lying on the ground.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 26:
            newRoom["description"]     = "This bedroom has a single bed, and is fairly barren. A violin has been abandoned on the perfectly drawn sheets.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 27:
            newRoom["description"]     = "The main hall might look warm and welcoming, but in the circumstances it simply feels empty.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 28:
            newRoom["description"]     = "The ceramic tiles of this hallway are an odd change of pace, when most rooms in the mansion have hardwood floor. The sound made you nervous at first.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 29:
            newRoom["description"]     = "This is a simple hallway. The ceramic tiles make a tapping sound under your footsteps.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "";
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 30:
            newRoom["description"]     = "This room leads in the tower that you saw on the ouside. It doesn't actually have a second floor, only a handful of steps that lead to a platform with a telescope.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 31:
            newRoom["description"]     = "This room has a very wide window and cute garden chairs, surely meant to enjoy sunny afternoons. Unfortunately, it's not the afternoon.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 32:
            newRoom["description"]     = "This room has a small table with a teapot and a deck of cards on it.";
            newRoom["doorNorthOpen"]   = "";
            newRoom["doorNorthClosed"] = "";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "";
            newRoom["doorWestOpen"]    = "";
            newRoom["doorWestClosed"]  = "";
            newRoom["doorEastOpen"]    = "";
            newRoom["doorEastClosed"]  = "";
            break;
        case 33:
            newRoom["description"]     = "This is the first room you explored in the mansion: the vestible. It's never a good sign, though, that the lights don't work.";
            newRoom["doorNorthOpen"]   = "A double door on the northern wall leads to the hall.";
            newRoom["doorNorthClosed"] = "You could have sworn that a double door led further in the mansion, but obviously there is no such door. The vestible feels oppressively small.";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "The main door is behind you, on the south wall. You could leave, but you're not done here.";
            newRoom["doorWestOpen"]    = "A white french door on the west wall looks pretty inviting. An elaborate umbrella hangs from a hook next to it.";
            newRoom["doorWestClosed"]  = "There is a bench on the western side, to sit on when removing boots. An elaborate umbrella hangs from a hook next to it.";
            newRoom["doorEastOpen"]    = "A narrow door, probably to be used by the personnel, is on the eastern wall.";
            newRoom["doorEastClosed"]  = "A rich collection of fur coats is lined up on the eastern wall.";
            break;
        case 34:
            newRoom["description"]     = "A billiard room. There are no balls to be found, though.";
            newRoom["doorNorthOpen"]   = "The main door to this room is on the north side, leading to the hallway.";
            newRoom["doorNorthClosed"] = "The room feels somewhat oppressive, perhaps because of the suspicious plain wall on the north side.";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "A golden ashtray, and some gaming equipment, are stored on the shelves of the south wall.";
            newRoom["doorWestOpen"]    = "An unassuming wooden door is on the western wall, on a section outside of the light's radius.";
            newRoom["doorWestClosed"]  = "High chairs are lined up on the western wall.";
            newRoom["doorEastOpen"]    = "There is a small bar on the east side, with a narrow door behind it.";
            newRoom["doorEastClosed"]  = "There is a small bar on the east side, but there are no bottle left anywhere.";
            break;
        default:
            newRoom["description"]     = "The first thing you see in this room in a life-sized stuffed bear, probably not meant to be as menacing as it looks now in the moonlight.";
            newRoom["doorNorthOpen"]   = "The northern wall rises highest, following the curve in the roof, and an imposing, leathered door makes good use of the wall's size.";
            newRoom["doorNorthClosed"] = "The northern wall rises highest, following the curve in the roof, and an imposing portrait of a general makes good use of the wall's size.";
            newRoom["doorSouthOpen"]   = "A door to the south leads outside the mansion."; // this shouldn't be used.
            newRoom["doorSouthClosed"] = "A fireplace on the southern wall is dark and cold, and clearly has been for a while.";
            newRoom["doorWestOpen"]    = "Between the large libraries on the western wall, you can see a small door, made of the same wood as the walls and libraries.";
            newRoom["doorWestClosed"]  = "Large, wooden libraries span the western walls. Most of the books are old, and titles mention various saints.";
            newRoom["doorEastOpen"]    = "A door to the east leads outside the mansion."; // this shouldn't be used.
            newRoom["doorEastClosed"]  = "There are a few windows on the east side of the room, and a few pictures show the owner of the mansion's fishing trips.";
			roomNumberHack = -1;
            break;
    }
    return newRoom;
}