var gridSize = 10;
var virusesSpawned = 0;
var stations = [];
var viruses = [];
var paths= [];
var seed;

function setupMaze()
{
	// Reset
	stations = [];
	viruses = [];
	virusesSpawned = 0
	
	// Setup board
	let gameBoard = document.getElementById("gameBoard");
	let stationSize = Math.floor(gameBoard.offsetWidth / gridSize * 0.6);
	gameBoard.style = "grid-template-columns: 1rem repeat(" + gridSize + ", " + stationSize + "px 1rem); "
					+ "grid-template-rows: 1rem repeat(" + gridSize + ", " + stationSize + "px 1rem); "
					+ "width: calc(" + (gridSize+1) + "rem + " + (gridSize*stationSize) + "px)";

	// Setup Stations
	for (let x = 1; x <= gridSize; x++)
	{
		for (let y = 1; y <= gridSize; y++)
		{
			let stationDom = document.createElement("div");
			stationDom.classList.add("station");
			stationDom.style = "grid-column-start: " + (x*2) + "; "
							 + "grid-row-start: " + (y*2) + ";";
			gameBoard.appendChild(stationDom);

			let station = { positionX: x, positionY: y, dom: stationDom, combines: null };
			stations.push(station);
			stationDom.addEventListener("click", function() { attack(station); });
		}
	}

	// Setup Seed
	let seedPosition = Math.floor(gridSize/2) + 1;
	let seedDom = document.createElement("div");
	seedDom.classList.add("seed");
	seedDom.style = "grid-column-start: " + (seedPosition*2-1) + "; "
				  + "grid-row-start: " + (seedPosition*2-1) + "; ";
	gameBoard.appendChild(seedDom);
	seed = { positionX: seedPosition, positionY: seedPosition, dom: seedDom, currentHP: 20 };
	seedDom.addEventListener("click", function() { heal(seed); });

	// Setup Viruses (
	for (let i = 0; i < gridSize; i++)
	{
		spawnVirus();
	}
	refreshViruses();
}

function attack(station)
{
	// Your turn, attack all 4 corners
	viruses
		.filter(virus => (virus.positionX === station.positionX || virus.positionX - 1 === station.positionX)
					  && (virus.positionY === station.positionY || virus.positionY - 1 === station.positionY))
		.forEach(destroyVirus);
	if (viruses.length == 0)
	{
		// YOU WIN
		alert("YOU WIN");
		return;
	}

	// Enemy's turn
	eneymyTurn();
}

function heal(seed)
{
	// Your turn, replenish the seed
	seed.currentHP = 20;

	// Enemy's turn
	eneymyTurn();
}

function eneymyTurn()
{
	computePaths();
	viruses.forEach(moveVirus);
	spawnVirus();
	fuseViruses();
	refreshViruses();

	var damageVirus = viruses.find(virus => virus.positionX === seed.positionX && virus.positionY === seed.positionY);
	if (damageVirus)
	{
		seed.currentHP -= damageVirus.potency;
		if (seed.currentHP <= 0)
		{
			// YOU LOSE
			alert("YOU LOSE!");
		}
	}
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}