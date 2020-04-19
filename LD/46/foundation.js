var gridSize = 8;
var stations = [];
var viruses = [];
var seed;
var points= [];

// Stats
var gameOver = false;
var virusesSpawned = 0;
var virusesKilled = 0;
var turnCounter = 0;
var timer, seconds = 0, minutes = 0;

function startGame()
{
	// Reset
	let gameBoard = document.getElementById("gameBoard");
	while (gameBoard.firstChild)	gameBoard.firstChild.remove();
	stations = [];
	viruses = [];
	points= [];
	gameOver = false;
	virusesSpawned = 0;
	virusesKilled = 0;
	turnCounter = 0;
	if (timer)	clearTimeout(timer);
	seconds = 0;
	minutes = 0;

	// Setup board
	let stationSize = Math.floor(document.getElementById("score").offsetWidth / gridSize * 0.6);
	gameBoard.style.gridTemplateColumns = "1rem repeat(" + gridSize + ", " + stationSize + "px 1rem)";
	gameBoard.style.gridTemplateRows = "1rem repeat(" + gridSize + ", " + stationSize + "px 1rem)"
	gameBoard.style.width = "calc(" + (gridSize+1) + "rem + " + (gridSize*stationSize) + "px)";

	// Setup Points
	for (let x = 1; x - 1 <= gridSize; x++)
	{
		for (let y = 1; y - 1 <= gridSize; y++)
		{
			let edgeCheck = x === 1 || x-1 === gridSize
						 || y === 1 || y-1 === gridSize;
			let newPoint = { cx: x, cy: y, links: undefined, distance: undefined, isEdge: edgeCheck };

			// Link new point to existing points
			newPoint.links = points.filter(existingPoint => (newPoint.cx === existingPoint.cx && newPoint.cy - 1 === existingPoint.cy)
														 || (newPoint.cy === existingPoint.cy && newPoint.cx - 1 === existingPoint.cx));

			// Link existing points to new point
			newPoint.links.forEach(l => { l.links.push(newPoint); });

			points.push(newPoint);
		}
	}

	// Setup Stations
	for (let x = 1; x <= gridSize; x++)
	{
		for (let y = 1; y <= gridSize; y++)
		{
			let stationDom = document.createElement("div");
			stationDom.classList.add("station");
			stationDom.style.gridColumnStart =  x*2;
			stationDom.style.gridRowStart = y*2;
			gameBoard.appendChild(stationDom);

			let corners = points.filter(pt => (pt.cx === x || pt.cx - 1 === x)
										   && (pt.cy === y || pt.cy - 1 === y));

			let station = { positionX: x, positionY: y, dom: stationDom, combined: false, threatens: corners };
			stations.push(station);
			stationDom.addEventListener("click", function() { attack(station); });
		}
	}

	// Setup Seed
	let seedPosition = Math.floor(gridSize/2) + 1;
	let seedDom = document.createElement("div");
	seedDom.classList.add("seed");
	seedDom.style.gridColumnStart = seedPosition*2-1;
	seedDom.style.gridRowStart = seedPosition*2-1;
	gameBoard.appendChild(seedDom);

	let seedPoint = points.find(pt => pt.cx === seedPosition && pt.cy === seedPosition);
	seed = { position: seedPoint, dom: seedDom, currentHP: Math.pow(gridSize, 2) };
	seedDom.innerHTML = seed.currentHP;

	// Setup Viruses (
	for (let i = 0; i < gridSize; i++)
	{
		spawnVirus();
		virusesSpawned++;
	}
	refreshViruses();

	//Paths shenanigans
	for (let i = -gridSize; i < gridSize; i++)
	{
		var randomStation = stations[myRandom(stations.length)];
		if (randomStation.combined)	continue;

		switch (myRandom(2))
		{
			case 0: // Combine with SOUTH
				let southStation = stations.find(st => st.positionX === randomStation.positionX && st.positionY === randomStation.positionY + 1 && !st.combined);
				if (!southStation)	break;
				southStation.dom.remove();
				stations.splice(stations.indexOf(southStation), 1);
				randomStation.combined = true;
				randomStation.dom.style.gridRowEnd = "span 3";
				randomStation.threatens.push(...southStation.threatens);
				let pointA = points.find(pt => pt.cx === randomStation.positionX && pt.cy === randomStation.positionY + 1);
				let pointB = points.find(pt => pt.cx === randomStation.positionX + 1 && pt.cy === randomStation.positionY + 1);
				pointA.links.splice(pointA.links.indexOf(pointB), 1);
				pointB.links.splice(pointB.links.indexOf(pointA), 1);
				break;

			case 1: // Combine with EAST
				let eastStation = stations.find(st => st.positionY === randomStation.positionY && st.positionX === randomStation.positionX + 1 && !st.combined);
				if (!eastStation)	break;
				eastStation.dom.remove();
				stations.splice(stations.indexOf(eastStation), 1);
				randomStation.combined = true;
				randomStation.dom.style.gridColumnEnd = "span 3";
				randomStation.threatens.push(...eastStation.threatens);
				let pointC = points.find(pt => pt.cy === randomStation.positionY && pt.cx === randomStation.positionX + 1);
				let pointD = points.find(pt => pt.cy === randomStation.positionY + 1 && pt.cx === randomStation.positionX + 1);
				pointC.links.splice(pointC.links.indexOf(pointD), 1);
				pointD.links.splice(pointD.links.indexOf(pointC), 1);
				break;
		}
	}
	computePaths();

	refreshStats();
}

function attack(station)
{
	if (gameOver)	return;

	// Your turn, attack all 4 corners
	viruses
		.filter(virus => station.threatens.includes(virus.position))
		.forEach(virus => {
			virusesKilled++;
			destroyVirus(virus);
		});
	if (viruses.length == 0)
	{
		// YOU WIN
		gameOver = true;
		clearTimeout(timer);
		timer = null;
		alert("YOU WIN");
		return;
	}

	// Enemy's turn
	viruses.forEach(moveVirus);
	if (viruses.length > 1)
	{
		spawnVirus();
		virusesSpawned++;
	}
	fuseViruses();
	refreshViruses();

	var damageVirus = viruses.find(virus => virus.position === seed.position);
	if (damageVirus)
	{
		seed.currentHP -= damageVirus.potency;
		seed.dom.innerHTML = seed.currentHP;
		if (seed.currentHP <= 0)
		{
			// YOU LOSE
			gameOver = true;
			alert("YOU LOSE!");
		}
	}

	// Stats
	if (!timer)	timer = setTimeout(tick, 1000);
	turnCounter++;
	refreshStats();
}

function tick()
{
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
	}

	timer = setTimeout(tick, 1000);
	refreshStats();
}

function refreshStats()
{
	document.getElementById("turnNumber").innerHTML = turnCounter;
	document.getElementById("virusesKilled").innerHTML = virusesKilled;
	document.getElementById("timer").innerHTML = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds);
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}