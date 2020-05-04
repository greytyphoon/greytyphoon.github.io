function initGameBoard(tiles)
{
	let gameBoard = document.getElementById("gameBoard");
	while (gameBoard.firstChild)	gameBoard.firstChild.remove();

	tiles.forEach(tile =>
	{
		let tileDom = document.createElement("div")
		tileDom.addEventListener("click", function (ev) {
			if (this.classList.contains("menaced"))
				attack(tile, this.classList.contains("corner"));
		});
		
		tile.dom = tileDom;
		gameBoard.appendChild(tileDom);
		refreshTileClasses(tile);
	});
}

function refreshAllTilesClasses(tiles)
{
	tiles.forEach(refreshTileClasses);
}

function refreshTileClasses(tile)
{
	tile.dom.classList.remove(...tile.dom.classList);
	tile.dom.classList.add("tile");
	tile.dom.classList.add(ClassNameBuilder.owner(tile.owner));
	if (tile.fortified)
		tile.dom.classList.add("fortified");
	if (tile.seenByPlayerRed)
		tile.dom.classList.add("seen");

	var menaces = KnotPrivate.menacedByPlayer(tile, _Red);
	if (menaces != 0)
	{
		tile.dom.classList.add("menaced");
		if (menaces != 1)
			tile.dom.classList.add("corner");
	}

	tile.dom.classList.add(ClassNameBuilder.weakTo(tile.weakTo));
	tile.resist.forEach(r => tile.dom.classList.add(ClassNameBuilder.resist(r)));
}

function refreshCardTray(troop)
{
	document.getElementById("cardTray").classList = ClassNameBuilder.active(troop);
}
function refreshScore(turnNumber)
{
	document.getElementById('turnNumber').innerHTML = turnNumber;
}

var ClassNameBuilder = {
	owner: function (player)
	{
		switch (player)
		{
			case _Red: return "owner-red";
			case _Blue: return "owner-blue";
			case _Yellow: return "owner-yellow";
			case _Green: return "owner-green";
		}
		return "owner-none";
	},
	weakTo: function (troop)
	{
		return "weak-to-" + ClassNameBuilder.__troopName(troop);
	},
	resist: function (troop)
	{
		return "resist-" + ClassNameBuilder.__troopName(troop);
	},
	active: function (troop)
	{
		return "active-" + ClassNameBuilder.__troopName(troop);
	},
	__troopName (troop)
	{
		switch (troop)
		{
			case _King: return "king";
			case _Queen: return "queen";
			case _Rook: return "rook";
			case _Bishop: return "bishop";
			case _Knight: return "knight";
			case _Pawn: return "pawn";
			default: return "";
		}
	}
};