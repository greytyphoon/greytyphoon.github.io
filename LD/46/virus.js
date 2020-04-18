

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

	var existingVirus = viruses.find(existingVirus => existingVirus.positionX === x && existingVirus.positionY === y);
	if (existingVirus)
	{
		existingVirus.potency++;
		refreshVirus(existingVirus);
		return;
	}

	let virusDom = document.createElement("div");
	virusDom.classList.add("virus");
	gameBoard.appendChild(virusDom);

	let virus = { positionX: x, positionY: y, dom: virusDom, potency: 1 };
	refreshVirus(virus);
	viruses.push(virus);
}

function moveVirus(virus)
{
}

function refreshVirus(virus)
{
	virus.dom.innerHTML = virus.potency > 1
		? virus.potency
		: "";
	virus.dom.style = "grid-column-start: " + (virus.positionX*2-1) + "; "
				   + "grid-row-start: " + (virus.positionY*2-1) + "; ";
}

function destroyVirus(virus)
{
	virus.dom.parentNode.removeChild(virus.dom);
	viruses.splice(viruses.indexOf(virus), 1);
}