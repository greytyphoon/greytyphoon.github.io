function startGame() {
	timer.zero();

	score = 0;
	document.getElementById("score").innerHTML = score;
	document.getElementById("flags").checked = false;
	document.getElementById("countFoundEggs").innerHTML = 0;

	paused = false;
	options.readOptions();
	actions.resetGame();

	const matrix = eggFactory.createEggMatrix();
	console.log(matrix);
	boxFactory.createAllBoxes(matrix);
}

var paused = true;
var score = 0;
const options = {
	gridsizeX: 6,
	gridsizeY: 11,
	nbEggs: 4,
	readOptions: function() {
		this.gridsizeX = document.getElementById("opt-gridsize-x").valueAsNumber || 6;
		if (this.gridsizeX < 5) this.gridsizeX = 5;
		if (this.gridsizeX > 15) this.gridsizeX = 15;
		this.gridsizeY = document.getElementById("opt-gridsize-y").valueAsNumber || 9;
		if (this.gridsizeY < 7) this.gridsizeY = 7;
		if (this.gridsizeY > 15) this.gridsizeY = 15;

		const divider = document.getElementById("opt-nbEggs-few").checked ? 7
					: document.getElementById("opt-nbEggs-plenty").checked ? 4
					: 5;
		this.nbEggs = Math.floor(this.gridsizeX * this.gridsizeY / divider);
	},
};

const eggFactory = {
	createEggMatrix: function() {
		// create X×Y matrix
		const matrix = [];
		for (let y = 0; y < options.gridsizeY; y++) {
			matrix[y] = [];
			for (let x = 0; x < options.gridsizeX; x++) {
				matrix[y][x] = 0;
			}
		}

		// Place n eggs in the matrix
		let nbEggsHidden = 0;
		while (nbEggsHidden < options.nbEggs) {
			const newEggX = myRandom(options.gridsizeX);
			const newEggY = myRandom(options.gridsizeY);

			if (matrix[newEggY][newEggX] === "EGG") continue;

			nbEggsHidden++;
			matrix[newEggY][newEggX] = "EGG";
		}

		eggFactory.calculateHints(matrix);

		const hintNbEggs = document.getElementById("hintNbEggs");
		hintNbEggs.innerHTML = options.nbEggs;
		return matrix;
	},
	calculateHints: function(matrix) {
		// For each other space in the matrix, calculate how many eggs are adjacent
		for (let y = 0; y < options.gridsizeY; y++) {
			for (let x = 0; x < options.gridsizeX; x++) {
				if (matrix[y][x] === "EGG") continue;


				matrix[y][x] = eggFactory.countAdjacentEggs(x,y,matrix);
			}
		}
	},
	countAdjacentEggs: function(x, y, matrix) {
		const minX = 0;
		const maxX = options.gridsizeX-1;
		let count = 0;

		if (y != 0) {
			if (x != minX && matrix[y-1][x-1] === "EGG") count++;
			if (/* same x */ matrix[y-1][x] === "EGG") count++;
			if (x != maxX && matrix[y-1][x+1] === "EGG") count++;
		}
		/* same y */ {
			if (x != minX && matrix[y][x-1] === "EGG") count++;
			if (x != maxX && matrix[y][x+1] === "EGG") count++;
		}
		if (y != options.gridsizeY-1) {
			if (x != minX && matrix[y+1][x-1] === "EGG") count++;
			if (/* same x */ matrix[y+1][x] === "EGG") count++;
			if (x != maxX && matrix[y+1][x+1] === "EGG") count++;
		}
		return count;
	}
};

const boxFactory = {
	allBoxes: [],
	createBox: function(gameBoard, x, y, content) {
		const boxDom = document.createElement("div");
		const box = {
			x: x,
			y: y,
			seen: false,
			flagged: false,
			permaflag: false,
			content: content,
			dom: boxDom,
		};
		boxDom.classList.add("box");
		boxDom.addEventListener("pointerup", (e) => boxFactory.boxClick(box));
		gameBoard.appendChild(boxDom);
		boxFactory.allBoxes.push(box);
		return box;
	},
	createAllBoxes: function(matrix) {
		const gameBoard = document.getElementById("gameBoard");
		gameBoard.style.gridTemplateColumns = "repeat(" + options.gridsizeX + ", 1.25em)";
		gameBoard.style.width = (options.gridsizeX*1.25) + "em";

		// create XxY grid
		for (let y = 0; y < options.gridsizeY; y++) {
			for (let x = 0; x < options.gridsizeX; x++) {
				boxFactory.createBox(gameBoard, x, y, matrix[y][x]);
			}
		}
	},
	boxClick: function(box) {
		if (paused || box.seen || box.permaflag) return;
		timer.start();

		// handle flagging
		if (document.getElementById("flags").checked) {
			box.flagged = !box.flagged;
			box.dom.classList.toggle("flagged");
			return;
		}
		if (box.flagged) return;

		// Increase score
		score++;
		document.getElementById("score").innerHTML = score;

		// Make box seen
		box.seen = true;
		box.dom.classList.add('seen', 'colour-'+box.content);
		box.dom.innerHTML = (box.content === "EGG") ? "$" : box.content;

		// If the box is 0, auto-flag adjacent boxes
		if (box.content === 0)
			boxFactory.allBoxes.filter(b => !b.seen && !b.permaflag && Math.abs(b.x - box.x) <= 1 && Math.abs(b.y - box.y) <= 1).forEach(b => { b.permaflag = true; b.dom.classList.add("flagged"); b.dom.innerHTML = "0"; });

		// Updated found egg counter
		if (box.content === "EGG")
			document.getElementById("countFoundEggs").innerHTML = boxFactory.allBoxes.filter(b => b.content === "EGG" && b.seen).length;

		// Check victory
		if (boxFactory.allBoxes.filter(b => b.content === "EGG").every(b => b.seen))
			actions.victory();
	},
};

const actions = {
	resetGame: function() {
		const gameBoard = document.getElementById("gameBoard");
		gameBoard.innerHTML = '';
		boxFactory.allBoxes = [];
		paused = false;
		score = 0;
	},
	victory: function() {
		timer.stop();
		modal.showModal("victory");
		paused = true;
	},
};

// Returns an int between 0 and [max], excluding [max].
function myRandom(max) {
	if (max == 1) return 0;
	return Math.floor((Math.random() * max));
}
function myRandomFromList(list) {
	return list[myRandom(list.length)];
}
