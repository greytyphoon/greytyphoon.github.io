var platforms = [];
var jokers = [];
var allCards = [];

// Stats
var gameOver = false;
var turnCounter = 0;
const WIN = true;

function startGame()
{
	// Reset
	let gameBoard = document.getElementById("gameBoard");
	let handDom = document.getElementById("hand");
	while (gameBoard.firstChild)	gameBoard.firstChild.remove();
	while (handDom.firstChild)	handDom.firstChild.remove();
	platforms = [];
	jokers = [];
	allCards = [];
	gameOver = false;
	turnCounter = 0;
	timer.zero();

	// Setup board
	let platformSize = Math.floor(document.getElementById("score").offsetWidth / 7 * 0.6);
	gameBoard.style.gridTemplateColumns = "repeat(7, " + platformSize + "px)";
	gameBoard.style.gridTemplateRows = "repeat(7, " + platformSize + "px)";
	gameBoard.style.width = "calc(" + (7*platformSize) + "px)";
	handDom.style.gridTemplateColumns = "repeat(5, " + platformSize + "px)";
	handDom.style.width = "calc(.6rem + " + (5*platformSize) + "px)";

	allCards = cards.createAndShuffle(platformSize);
	let nextCardIndex = 0;

	// Platforms
	for (let x = 0; x < 7; x++)
	{
		for (let y = 0; y < 7; y++)
		{
			let platformDom = document.createElement("div");
			platformDom.classList.add("platform");
			gameBoard.appendChild(platformDom);

			let platform = { positionX: x, positionY: y, dom: platformDom, card: null, joker: null, isCurrent: false, isGoal: false, adjacent: [] };
			platforms.push(platform);

			jokerController.createIfNecessary(platform, platformSize);
			if (!platform.joker)
			{
				let myCard = allCards[nextCardIndex++];
				platform.card = myCard;
				myCard.platform = platform;
				platform.dom.appendChild(myCard.dom);
			}

			if (y != 0)
			{
				let platformAbove = platforms.find(p => p.positionY === y-1 && p.positionX === x);
				platform.adjacent.push(platformAbove);
				platformAbove.adjacent.push(platform);
			}

			if (x != 0)
			{
				let platformBeside = platforms.find(p => p.positionX === x-1 && p.positionY === y);
				platform.adjacent.push(platformBeside);
				platformBeside.adjacent.push(platform);
			}
		}
	}

	platforms[0].isCurrent = true;
	let peonDom = document.createElement("img");
	peonDom.classList.add("peon");
	peonDom.id = "peon";
	peonDom.src = "img/peon.png";
	peonDom.alt = "Player Token";
	peonDom.width = platformSize;
	peonDom.height = platformSize;
	platforms[0].dom.appendChild(peonDom);

	platforms[48].isGoal = true;
	let goalDom = document.createElement("img");
	goalDom.classList.add("goal");
	goalDom.id = "goal";
	goalDom.src = "img/goal.png";
	goalDom.alt = "Goal";
	goalDom.width = platformSize/2;
	goalDom.height = platformSize/2;
	platforms[48].dom.appendChild(goalDom);

	// Bug fix: make sure we're not dead at the start
	var firstTargetSuit = platforms[0].card.suit + 1;
	if (firstTargetSuit === 4) firstTargetSuit = 0;
	if (platforms[1].card.suit != firstTargetSuit
		&& platforms[7].card.suit != firstTargetSuit
		&& allCards.every(card => card.platform || card.suit != firstTargetSuit))
	{
		startGame();
		return;
	}

	refreshView();
}

function refreshView()
{
	// increments counter AFTER displaying it
	document.getElementById("turnNumber").innerHTML = turnCounter++;

	// unselect all cards, and move them as needed
	let hand = [];
	allCards.forEach(card => {
		card.isSelected = false;
		if (card.platform)
			card.platform.dom.appendChild(card.dom);
		else
			hand.push(card);
	});
	let handDom = document.getElementById("hand");
	hand.sort((cardA, cardB) => (cardA.suit*16) + cardA.rank - (cardB.suit*16) - cardB.rank); // Sorted by suit, then rank
	hand.forEach(card => handDom.appendChild(card.dom));

	// Move jokers as needed
	jokers.forEach(joker => { joker.platform.dom.appendChild(joker.dom); });

	// put the player token on the current platform
	platforms.find(platform => platform.isCurrent).dom.appendChild(document.getElementById("peon"));
}

var jokerController = {
	createIfNecessary: function (platform, domSize)
	{
		if (platform.positionX === 0 && platform.positionY === 6)
		{
			let jokerDom = document.createElement("img");
			jokerDom.classList.add("joker");
			jokerDom.src = "cards/jokers/blue_joker.svg";
			jokerDom.alt = "Blue Joker";
			jokerDom.width = domSize;
			jokerDom.height = domSize;

			let myJoker = { platform: platform, dom: jokerDom, move: jokerController.blueJokerMove };
			platform.joker = myJoker;
			platform.dom.appendChild(jokerDom);
			jokers.push(myJoker);
		}
		else if (platform.positionX === 6 && platform.positionY === 0)
		{
			let jokerDom = document.createElement("img");
			jokerDom.classList.add("joker");
			jokerDom.src = "cards/jokers/yellow_joker.svg";
			jokerDom.alt = "Yellow Joker";
			jokerDom.width = domSize;
			jokerDom.height = domSize;

			let myJoker = { platform: platform, dom: jokerDom, move: jokerController.yellowJokerMove };
			platform.joker = myJoker;
			platform.dom.appendChild(jokerDom);
			jokers.push(myJoker);
		}
	},

	blueJokerMove: function (joker)
	{
		// the blue joker moves by trading places with an adjacent card. Higher-ranked cards have a higher chance of being targeted.
		let proratedAdjacentPlaforms = [];
		joker.platform.adjacent.forEach(adjacentPlatform => 
		{
			if (!adjacentPlatform.card) return;
			for(let i = 0; i < adjacentPlatform.card.rank; i++)
			{
				proratedAdjacentPlaforms.push(adjacentPlatform);
			}
		});
		if (proratedAdjacentPlaforms.length === 0) return;
		let randomPlatformIndex = myRandom(proratedAdjacentPlaforms.length);
		let targetPlatform = proratedAdjacentPlaforms[randomPlatformIndex];
		let originPlatform = joker.platform;
		
		originPlatform.joker = null;
		originPlatform.card = targetPlatform.card;
		originPlatform.card.platform = originPlatform;
		targetPlatform.joker = joker;
		targetPlatform.card = null;
		joker.platform = targetPlatform;
	},

	yellowJokerMove: function (joker)
	{
		// the yellow joker moves by trading places with an adjacent card. Lower-ranked cards have a higher chance of being targeted.
		let proratedAdjacentPlaforms = [];
		joker.platform.adjacent.forEach(adjacentPlatform => 
		{
			if (!adjacentPlatform.card) return;
			for(let i = 14; i > adjacentPlatform.card.rank; i--)
			{
				proratedAdjacentPlaforms.push(adjacentPlatform);
			}
		});
		if (proratedAdjacentPlaforms.length === 0) return;
		let randomPlatformIndex = myRandom(proratedAdjacentPlaforms.length);
		let targetPlatform = proratedAdjacentPlaforms[randomPlatformIndex];
		let originPlatform = joker.platform;
		
		originPlatform.joker = null;
		originPlatform.card = targetPlatform.card;
		originPlatform.card.platform = originPlatform;
		targetPlatform.joker = joker;
		targetPlatform.card = null;
		joker.platform = targetPlatform;
	}
};

var eventHandlers = {
	clickCard: function (card)
	{
		if (gameOver) return;
		if (card.platform && card.platform.isCurrent) return;
		timer.start();

		let otherCard = allCards.find(card => card.isSelected);
		if (!otherCard)
		{
			card.isSelected = true;
			return;
		}

		let thisCardInHand = !card.platform;
		let otherCardInHand = !otherCard.platform;
		if (thisCardInHand === otherCardInHand)
		{
			otherCard.isSelected = false;
			card.isSelected = true;
			return; // Both in hand / both in play, Can't drop here.
		}
		else
		{
			if (card.platform)
				play(otherCard, card);
			else
				play(card, otherCard);
		}
	},

	dragCard: function (card, ev)
	{
		if (gameOver || (card.platform && card.platform.isCurrent))
		{
			ev.preventDefault(); // Do not start a drag!
			return;
		}

		allCards.forEach(card => { card.isSelected = false; }); // unselect all cards
		card.isSelected = true;

		ev.dataTransfer.dropEffect = "move";
		ev.dataTransfer.setData("text/plain", card.dom.id);
	},

	compareCard: function (card, ev)
	{
		if (gameOver || (card.platform && card.platform.isCurrent))
		{
			return; // Can't drop here.
		}

		let draggedCard = allCards.find(card => card.isSelected);
		if (card === draggedCard)
		{
			return; // Same card, Can't drop here.
		}

		let thisCardInHand = !card.platform;
		let draggedCardInHand = !draggedCard.platform;
		if (thisCardInHand === draggedCardInHand)
		{
			return; // Both in hand / both in play, Can't drop here.
		}

		ev.preventDefault(); // Can drop here!
		ev.dataTransfer.dropEffect = "move";
	},

	dropCard: function (card, ev)
	{
		if (gameOver || (card.platform && card.platform.isCurrent))
		{
			return; // Can't drop here.
		}

		let draggedCard = allCards.find(card => card.isSelected);
		if (card === draggedCard)
		{
			return; // Same card, Can't drop here.
		}

		let thisCardInHand = !card.platform;
		let draggedCardInHand = !draggedCard.platform;
		if (thisCardInHand === draggedCardInHand)
		{
			return; // Both in hand / both in play, Can't drop here.
		}

		ev.preventDefault(); // Can drop here!
		if (card.platform)
			play(draggedCard, card);
		else
			play(card, draggedCard);
	},

	resetCard: function (card, ev)
	{
		allCards.forEach(card => { card.isSelected = false; }); // unselect all cards
	}
};

function play(cardInHand, cardInPlatform)
{
	timer.start();

	// Switch the cards
	cardInHand.platform = cardInPlatform.platform;
	cardInPlatform.platform = null;
	cardInHand.platform.card = cardInHand;

	// Move the token
	let currentPlatform = platforms.find(p => p.isCurrent);
	let nextSuit = currentPlatform.card.suit + 1;
	if (nextSuit > 3) nextSuit = 0;
	let validMoves = currentPlatform.adjacent.filter(otherPlatform => otherPlatform.card && otherPlatform.card.suit === nextSuit);
	if (validMoves.length === 0)
	{
		gameEnded(); // No valid move, you lose
		return;
	}
	else if (validMoves.length === 1)
	{
		validMoves[0].isCurrent = true;
		currentPlatform.isCurrent = false;
	}
	else
	{
		let randomTarget = myRandom(validMoves.length);
		validMoves[randomTarget].isCurrent = true;
		currentPlatform.isCurrent = false;
	}

	// Check wins
	if (platforms.some(p => p.isCurrent && p.isGoal))
	{
		gameEnded(WIN);
		return;
	}

	// Move jokers
	jokers.forEach(joker => { joker.move(joker); });
	if (platforms.some(p => p.isCurrent && p.joker))
	{
		gameEnded(); // You're on a joker, you lose
		return;
	}

	refreshView();
}

function gameEnded(win)
{
	if (win)
		alert("YOU WIN");
	else
		alert("YOU LOSE");
	gameOver = true;
	allCards.forEach(card => { card.dom.draggable = false; });
	timer.stop();
	refreshView();
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}