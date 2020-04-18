var gridSize = 10;
var virusesSpawned = 0;
var stations = [];
var viruses = [];
var seed;

function setupMaze()
{
	let gameBoard = document.getElementById("gameBoard");

	// Setup Stations
	let stationSize = Math.floor(gameBoard.offsetWidth / gridSize * 0.6);
	gameBoard.style = "grid-template-columns: 1rem repeat(" + gridSize + ", " + stationSize + "px 1rem); "
					+ "grid-template-rows: 1rem repeat(" + gridSize + ", " + stationSize + "px 1rem); "
					+ "width: calc(" + (gridSize+1) + "rem + " + (gridSize*stationSize) + "px)";
	for (let x = 1; x <= gridSize; x++)
	{
		for (let y = 1; y <= gridSize; y++)
		{
			let stationDiv = document.createElement("div");
			stationDiv.classList.add("station");
			stationDiv.style = "grid-column-start: " + (x*2) + "; "
							 + "grid-row-start: " + (y*2) + ";";
			gameBoard.appendChild(stationDiv);

			let station = { positionX: x, positionY: y, dom: stationDiv, combines: null };
			stations.push(station);
		}
	}

	// Setup Viruses (
	for (let i = 0; i < gridSize; i++)
	{
		spawnVirus();
	}
}

function spawnVirus()
{
	let gameBoard = document.getElementById("gameBoard");

	virusesSpawned++;
	let x = 0;
	let y = 0;
	let position = myRandom(gridSize) + 1; // random 1-10
	switch (myRandom(4)) // 1:NORTH  2:EAST  3:SOUTH  0:WEST
	{
		case 0:
			x = position;
			y = 1;
			break;
		case 1:
			x = 11;
			y = position;
			break;
		case 2:
			x = position + 1; // (Needs to enable (11,11)
			y = 11;
			break;
		case 3:
			x = 1;
			y = position + 1; // (Needs to enable (0,11)
			break;
	}

	var existingVirus = viruses.find(existingVirus => existingVirus.positionX === x && existingVirus.positionY === y);
	if (existingVirus)
	{
		existingVirus.potency++;
		return;
	}

	let virusDom = document.createElement("strong");
	virusDom.classList.add("virus");
	virusDom.style = "grid-column-start: " + (x*2-1) + "; "
				   + "grid-row-start: " + (y*2-1) + "; ";
	gameBoard.appendChild(virusDom);

	let virus = { positionX: x, positionY: y, dom: virusDom, potency: 1 };
	viruses.push(virus);
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}