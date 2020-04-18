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
	}

	// Enemy's turn
}