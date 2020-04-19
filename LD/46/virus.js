function spawnVirus()
{
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
			x = gridSize + 1;
			y = position;
			break;
		case 2:
			x = position + 1; // (Needs to enable (11,11)
			y = gridSize + 1;
			break;
		case 3:
			x = 1;
			y = position + 1; // (Needs to enable (0,11)
			break;
	}

	spawnVirusAt(x, y, 1);
}

function spawnVirusAt(x, y, potency)
{
	var existingVirus = viruses.find(existingVirus => existingVirus.positionX === x && existingVirus.positionY === y);
	if (existingVirus)
	{
		existingVirus.potency += potency;
		return;
	}

	let gameBoard = document.getElementById("gameBoard");
	let virusDom = document.createElement("div");
	virusDom.classList.add("virus");
	gameBoard.appendChild(virusDom);

	let virus = { positionX: x, positionY: y, dom: virusDom, potency: potency };
	viruses.push(virus);
}

function moveVirus(virus)
{
	var currentPosition = points.find(point => point.positionX === virus.positionX && point.positionY === virus.positionY);
	var minimumDistance = currentPosition.links.reduce((a,b) => { return a.distance < b.distance ? a : b; }).distance;
	if (minimumDistance > currentPosition.distance)
	{
		// You're already as good as can be. Don't move.
		return;
	}

	var optimalPaths = currentPosition.links.filter(link => link.distance === minimumDistance);
	virus.positionX = optimalPaths[0].positionX;
	virus.positionY = optimalPaths[0].positionY;

	// Many equal paths: the "Zombicide" rule.
	if (optimalPaths.length !== 1)
	{
		let newPotency = Math.ceil(virus.potency / optimalPaths.length);
		virus.potency = newPotency;
		optimalPaths.shift();
		optimalPaths.forEach(point => spawnVirusAt(point.positionX, point.positionY, newPotency));
	}
}

function fuseViruses()
{
	let duplicatedViruses = [];
	for (let i = 1; i < viruses.length; i++)
	{
		let otherVirus = viruses[i];
		for (let j = 0; j < i; j++)
		{
			let baseVirus = viruses[j];
			if (baseVirus.positionX === otherVirus.positionX && baseVirus.positionY === otherVirus.positionY)
			{
				baseVirus.potency += otherVirus.potency;
				duplicatedViruses.push(otherVirus);
				break;
			}
		}
	}

	duplicatedViruses.forEach(destroyVirus);
}

function refreshViruses()
{
	viruses.forEach(virus =>
	{
		virus.dom.innerHTML = virus.potency > 1
			? virus.potency
			: "";
		virus.dom.style = "grid-column-start: " + (virus.positionX*2-1) + "; "
						+ "grid-row-start: " + (virus.positionY*2-1) + "; ";
	});
}

function destroyVirus(virus)
{
	virus.dom.remove();
	viruses.splice(viruses.indexOf(virus), 1);
}