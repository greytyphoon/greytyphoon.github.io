var platforms = [];
var jokers = [];
var allCards = [];
var options;

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

	readOptions();

	// Setup board
	let platformSize = Math.floor(document.getElementById("score").offsetWidth / 7 * 0.6);
	gameBoard.style.gridTemplateColumns = "repeat(7, " + platformSize + "px)";
	gameBoard.style.gridTemplateRows = "repeat(7, " + platformSize + "px)";
	gameBoard.style.width = "calc(" + (7*platformSize) + "px)";
	
	// Setup hand
	var handSize = 3 + options.jokerCount;
	handDom.style.gridTemplateColumns = "repeat(" + handSize + ", " + platformSize + "px)";
	handDom.style.width = "calc(" + ((handSize-1)*.15) + "rem + " + (handSize*platformSize) + "px)";

	allCards = cards.createAndShuffle(platformSize);
	let nextCardIndex = 0;

	// Bug fix: make sure we're not dead at the start
	var firstTargetSuit = allCards[0].suit + 1;
	if (firstTargetSuit === 4) firstTargetSuit = 0;
	if ([allCards[1].suit, allCards[7].suit, allCards[51].suit, allCards[50].suit, allCards[49].suit, allCards[48].suit].every(suit => suit != firstTargetSuit))
	{
		startGame();
		return;
	}

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

	// Create player Token
	domCreator.createPeon(platforms[0], platformSize);

	// Create goals
	switch (options.goalCount)
	{
		case "3":
			domCreator.createGoal(platforms[6], platformSize);
			domCreator.createGoal(platforms[42], platformSize);
			domCreator.createGoal(platforms[48], platformSize);
			break;
		case "49":
			platforms.forEach(p => domCreator.createGoal(p, platformSize));
			break;
		default:
			domCreator.createGoal(platforms[48], platformSize);
			break;
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

function readOptions()
{
	options = {};
	options.goalCount = document.querySelector('input[name="objectiveOption"]:checked').value;
	options.jokerCount = document.querySelector('input[name="jokerCountOption"]:checked').value*1;
	options.jokerDifficulty = document.querySelector('input[name="jokerDifficultyOption"]:checked').value;
	jokerController.jokerPrototypes = jokerController.initJokers();
}

var domCreator = {
	createGoal: function (platform, domSize)
	{
		platform.isGoal = true;
		let goalDom = document.createElement("img");
		goalDom.classList.add("goal");
		goalDom.src = "img/goal.png";
		goalDom.alt = "Goal";
		goalDom.width = domSize/2;
		goalDom.height = domSize/2;
		platform.dom.appendChild(goalDom);
	},
	createPeon: function (platform, domSize)
	{
		platform.isCurrent = true;
		let peonDom = document.createElement("img");
		peonDom.classList.add("peon");
		peonDom.id = "peon";
		peonDom.src = "img/peon.png";
		peonDom.alt = "Player Token";
		peonDom.width = domSize;
		peonDom.height = domSize;
		platform.dom.appendChild(peonDom);
	}
};

var jokerController = {
	jokerPrototypes: [],
	initJokers: function()
	{
		switch (options.jokerDifficulty)
		{
			case "Hard":
				switch (options.jokerCount)
				{
					case 3:
						return [3,2,myRandom(2)+2];
					case 2:
						return [3,2];
					default:
						return [myRandom(2)+2];
				}
			case "Mixed":
				switch (options.jokerCount)
				{
					case 3:
						return [myRandom(2),myRandom(2)+2,myRandom(4)];
					case 2:
						return [myRandom(2),myRandom(2)+2];
					default:
						return [myRandom(4)];
				}
			default:
				switch (options.jokerCount)
				{
					case 3:
						return [1,0,myRandom(2)];
					case 2:
						return [1,0];
					default:
						return [myRandom(2)];
				}
		}
	},

	createIfNecessary: function (platform, domSize)
	{
		if (platform.positionX === 1 && platform.positionY === 5 && options.jokerCount !== 1)
		{
			jokerController.createJokerFromPrototype(platform, domSize, jokerController.jokerPrototypes.shift());
		}
		else if (platform.positionX === 5 && platform.positionY === 1 && options.jokerCount !== 1)
		{
			jokerController.createJokerFromPrototype(platform, domSize, jokerController.jokerPrototypes.shift());
		}
		else if (platform.positionX === 5 && platform.positionY === 5 && options.jokerCount !== 2)
		{
			jokerController.createJokerFromPrototype(platform, domSize, jokerController.jokerPrototypes.shift());
		}
	},

	createJokerFromPrototype: function(platform, domSize, prototypeNumber)
	{
		switch (prototypeNumber)
		{
			case 3:
				jokerController.purpleJokerCreate(platform, domSize);
				break;
			case 2:
				jokerController.greenJokerCreate(platform, domSize);
				break;
			case 1:
				jokerController.orangeJokerCreate(platform, domSize);
				break;
			default:
				jokerController.blueJokerCreate(platform, domSize);
				break;
		}
	},
	createJoker: function(platform, domSize, fileName, altName, moveFunction)
	{
		let jokerDom = document.createElement("img");
		jokerDom.classList.add("joker");
		jokerDom.src = "cards/jokers/" + fileName + ".svg";
		jokerDom.alt = altName;
		jokerDom.width = domSize;
		jokerDom.height = domSize;

		let myJoker = { platform: platform, dom: jokerDom, move: moveFunction };
		platform.joker = myJoker;
		platform.dom.appendChild(jokerDom);
		jokers.push(myJoker);
	},

	blueJokerCreate: function (platform, domSize)
	{
		jokerController.createJoker(platform, domSize, "blue_joker", "Blue Joker", jokerController.blueJokerMove);
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

	orangeJokerCreate: function (platform, domSize)
	{
		jokerController.createJoker(platform, domSize, "orange_joker", "Orange Joker", jokerController.orangeJokerMove);
	},
	orangeJokerMove: function (joker)
	{
		// the orange joker moves by trading places with an adjacent card. Lower-ranked cards have a higher chance of being targeted.
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
	},

	purpleJokerCreate: function (platform, domSize)
	{
		jokerController.createJoker(platform, domSize, "purple_joker", "Purple Joker", jokerController.purpleJokerMove);
	},
	purpleJokerMove: function (joker)
	{
		// the purple joker moves like the blue joker, then moves cards around it clockwise.
		jokerController.blueJokerMove(joker);

		let x = joker.platform.positionX;
		let y = joker.platform.positionY;
		var adjacentPlatforms = [
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y+1),
			platforms.find(p => p.card && p.positionX === x && p.positionY === y+1),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y+1),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y)
		].filter(p => p);

		let firstCard = adjacentPlatforms[0].card;
		for (let i = 1; i < adjacentPlatforms.length; i++)
		{
			let previousPlatform = adjacentPlatforms[i-1];
			previousPlatform.card = adjacentPlatforms[i].card;
			previousPlatform.card.platform = previousPlatform;
		}
		let lastPlatform = adjacentPlatforms[adjacentPlatforms.length -1];
		lastPlatform.card = firstCard;
		lastPlatform.card.platform = lastPlatform;
	},

	greenJokerCreate: function (platform, domSize)
	{
		jokerController.createJoker(platform, domSize, "green_joker", "Green Joker", jokerController.greenJokerMove);
	},
	greenJokerMove: function (joker)
	{
		// the green joker moves like the orange joker, then moves cards around it counterclockwise.
		jokerController.orangeJokerMove(joker);

		let x = joker.platform.positionX;
		let y = joker.platform.positionY;
		var adjacentPlatforms = [
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y),
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y-1),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y),
			platforms.find(p => p.card && p.positionX === x-1 && p.positionY === y+1),
			platforms.find(p => p.card && p.positionX === x && p.positionY === y+1),
			platforms.find(p => p.card && p.positionX === x+1 && p.positionY === y+1)
		].filter(p => p);

		let firstCard = adjacentPlatforms[0].card;
		for (let i = 1; i < adjacentPlatforms.length; i++)
		{
			let previousPlatform = adjacentPlatforms[i-1];
			previousPlatform.card = adjacentPlatforms[i].card;
			previousPlatform.card.platform = previousPlatform;
		}
		let lastPlatform = adjacentPlatforms[adjacentPlatforms.length -1];
		lastPlatform.card = firstCard;
		lastPlatform.card.platform = lastPlatform;
	},
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
	let currentGoal = platforms.find(p => p.isCurrent && p.isGoal);
	if (currentGoal)
	{
		currentGoal.isGoal = false;
		Array.prototype.forEach.call(
			currentGoal.dom.getElementsByClassName("goal"),
			goalDom => currentGoal.dom.removeChild(goalDom));
		
		if (platforms.every(p => !p.isGoal))
		{
			gameEnded(WIN);
			return;
		}
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
		modal.showModal("win");
	else
		modal.showModal("lose");
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