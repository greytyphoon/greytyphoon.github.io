function setupTilesArray(objective)
{
	let weaknesses = randomize49().map(i => i % 6);
	let resist1 = randomize49().map(i => i % 6);
	let resist2 = randomize49().map(i => i % 6);
	let tiles = [];
	let fctOwner = objective === 'protect' ? getProtectChallengeStartingOwner : getStartingOwner;

	for (let i = 0; i < 49; i++)
	{
		let own = fctOwner(i);
		let newTile = { index: i, fortified: false, seenByPlayerRed: (own === _Red), owner: own, weakTo: weaknesses[i], resist: [] };

		// It wouldn't make sense to resist something you're weak to, or to be weak to the same thing twice
		if (newTile.weakTo !== resist1[i])
			newTile.resist.push(resist1[i]);
		if (newTile.weakTo !== resist2[i] && resist1[i] !== resist2[i])
			newTile.resist.push(resist2[i]);
		tiles.push(newTile);
	}

	return tiles;
}

function getStartingOwner(i)
{
	if (i === 24)	return _Unclaimed;
	if ([0, 1, 2, 3, 4, 5, 8, 9,10,11,16,17].includes(i))	return _Yellow;
	if ([7,14,15,21,22,23,28,29,30,35,36,42].includes(i))	return _Blue;
	if ([6,12,13,18,19,20,25,26,27,33,34,41].includes(i))	return _Green;
	return _Red;
}
function getProtectChallengeStartingOwner(i)
{
	if (i === 24)	return _Unclaimed;
	if ([ 0, 1, 2, 3, 4, 5, 6, 8, 9,10,11,12].includes(i))	return _Yellow;
	if ([ 7,14,15,21,22,28,29,35,36,42,43,44].includes(i))	return _Blue;
	if ([13,19,20,26,27,33,34,40,41,46,47,48].includes(i))	return _Green;
	return _Red;
}