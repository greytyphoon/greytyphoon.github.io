var gameTiles;
var currentTroop;
var isYellowDead = false;
var isGreenDead = false;
var isBlueDead = false;
var turnNumber = 0;
var gameOver = false;

function setupStart()
{
	gameTiles = setupTilesArray();
	initGameBoard(gameTiles);

	// Reset
	isYellowDead = false;
	isGreenDead = false;
	isBlueDead = false;
	turnNumber = 0;
	gameOver = false;
	timer.zero();

	currentTroop = myRandom(6);
	refreshAllTilesClasses(gameTiles);
	refreshCardTray(currentTroop);
	refreshScore(turnNumber);
}
function attack(tile, hasAdvantage)
{
	if (gameOver) return;
	turnNumber++;
	timer.start();

	// attack!
	if (KnotPrivate.captureTile(tile, currentTroop, hasAdvantage))
	{
		tile.owner = _Red;
		tile.seenByPlayerRed = true;
	}

	// check for victory
	if (gameTiles.every(t => t.seenByPlayerRed))
	{
		alert("You have explored every tile of the Small World! You win!");
		gameOver = true;
		timer.stop();
		return;
	}

	// check if others are dead
	KnotPrivate.checkDeadPlayers();

	// AI's turn
	if (!isBlueDead)	KnotArtificalIntelligence.playRandom(_Blue);
	if (!isYellowDead)	KnotArtificalIntelligence.playRandom(_Yellow);
	if (!isGreenDead)	KnotArtificalIntelligence.playRandom(_Green);

	currentTroop = myRandom(6);
	refreshAllTilesClasses(gameTiles);
	refreshCardTray(currentTroop);
	refreshScore(turnNumber);
}

var KnotPrivate = {
	menacedByPlayer: function(tile, player)
	{
		if (tile.owner === player) // can't conquer myself
			return 0;

		let menaces = 0;
		// check above
		if (tile.index>=7 && gameTiles[tile.index-7].owner === player)
			menaces++;
		// check below
		if (tile.index<=41 && gameTiles[tile.index+7].owner === player)
			menaces++;
		// check left
		if (tile.index%7!=0 && gameTiles[tile.index-1].owner === player)
			menaces++;
		// check right
		if (tile.index%7!=6 && gameTiles[tile.index+1].owner === player)
			menaces++;
		return menaces;
	},

	captureTile: function(tile, troop, advantage)
	{
		if (tile.owner === _Unclaimed || tile.weakTo === troop || advantage)
		{
			tile.fortified = false;
			return true;
		}
		if (tile.resist.includes(troop))	return false;
		if (tile.fortified)
		{
			tile.fortified = false;
			return false;
		}
		else
		{
			return true;
		}
	},

	checkDeadPlayers()
	{
		if (!isYellowDead && gameTiles.every(t => t.owner !== _Yellow))
			isYellowDead = true;
		if (!isGreenDead && gameTiles.every(t => t.owner !== _Green))
			isGreenDead = true;
		if (!isBlueDead && gameTiles.every(t => t.owner !== _Blue))
			isBlueDead = true;
		if (gameTiles.every(t => t.owner !== _Red))
		{
			alert("You got wiped off! You lose!");
			gameOver = true;
			timer.stop();
		}
	}
};

// During their turn, bots will a) fortify one of their squares OR b) conquer one tile, then c) routinely check if they killed another player.
// Bots are unaffected by fortifications, weaknesses and resistances. When they attack, they win. To compensate, they always have a 1/4 fortify instead of attacking.
// If a bot captures a fortified tile, the fortification is lost.
var KnotArtificalIntelligence = {
	// A bot that plays randomly will fortify a random valid tile, and conquer a random valid tile.
	playRandom: function(player)
	{
		if (myRandom(4) === 0)
		{
			let fortificationCandidates = gameTiles.filter(t => t.owner === player && !t.fortified);
			let fortifiedTile = arrayRandom(fortificationCandidates);
			if (fortifiedTile)
				fortifiedTile.fortified = true;
		}
		else
		{
			let attackCandidates = gameTiles.filter(t => KnotPrivate.menacedByPlayer(t, player));
			let conqueredTile = arrayRandom(attackCandidates);
			conqueredTile.fortified = false;
			conqueredTile.owner = player;
		}

		KnotPrivate.checkDeadPlayers();
	},
	// A bot that plays recklessly will fortify a tile on the edge (menaced=1 if possible, then 2, 3, etc) and will spread fast (attack a tile with minimal menaced value, to reach far)
	playReckless: function(player)
	{
		let fortificationCandidates = gameTiles.filter(t => t.owner === player && !t.fortified)
			.reduce(function(acc, t)
			{
				let menaceValue = KnotPrivate.menacedByPlayer(t, _Red);
				(acc[menaceValue] = acc[menaceValue] || []).push(t);
				return acc;
			},
			{});
		arrayRandom(fortificationCandidates[1] || fortificationCandidates[2] || fortificationCandidates[3]).fortified = true;

		KnotPrivate.checkDeadPlayers();
	},
	// A bot that plays safe will fortify inner tiles (menaced=0 if possible), and will conquer blocks if it can (attack a tile with maximum menaced value)
	playSafe: function(player)
	{

		// check if others are dead
		KnotPrivate.checkDeadPlayers();
	}
};