function spawnVirus()
{
	var edges = points.filter(pt => pt.isEdge);
	var randomEdge = edges[myRandom(edges.length)];
	spawnVirusAt(randomEdge, 1);
}

function spawnVirusAt(point, potency)
{
	var existingVirus = viruses.find(existingVirus => existingVirus.position === point);
	if (existingVirus)
	{
		existingVirus.potency += potency;
		return;
	}

	let gameBoard = document.getElementById("gameBoard");
	let virusDom = document.createElement("div");
	virusDom.classList.add("virus");
	gameBoard.appendChild(virusDom);

	let virus = { position: point, dom: virusDom, potency: potency };
	viruses.push(virus);
}

function moveVirus(virus)
{
	var minimumDistance = virus.position.links.reduce((a,b) => { return a.distance < b.distance ? a : b; }).distance;
	if (minimumDistance > virus.position.distance)
	{
		// You're already as good as can be. Don't move.
		return;
	}

	var optimalPaths = virus.position.links.filter(lnk => lnk.distance === minimumDistance);
	virus.position = optimalPaths[0];

	// Many equal paths: the "Zombicide" rule.
	if (optimalPaths.length !== 1)
	{
		let newPotency = Math.ceil(virus.potency / optimalPaths.length);
		virus.potency = newPotency;
		optimalPaths.shift();
		optimalPaths.forEach(point => spawnVirusAt(point, newPotency));
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
			if (baseVirus.position === otherVirus.position)
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
		virus.dom.style.gridColumnStart = virus.position.cx*2-1;
		virus.dom.style.gridRowStart = virus.position.cy*2-1;
	});
}

function destroyVirus(virus)
{
	virus.dom.remove();
	viruses.splice(viruses.indexOf(virus), 1);
}