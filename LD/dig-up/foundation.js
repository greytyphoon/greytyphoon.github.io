function startGame() {
	timer.zero();

	score = 0;
	document.getElementById("score").innerHTML = score;

	paused = false;
	options.readOptions();
	actions.resetGame();

	const matrix = shapeFactory.createAllShapes();
	boxFactory.createAllBoxes(matrix);
}

var paused = true;
var score = 0;
const options = {
	gridsizeX: 6,
	gridsizeY: 11,
	nbShapes: 4,
	hats: 0,
	readOptions: function() {
		this.gridsizeX = document.getElementById("opt-gridsize-x").valueAsNumber || 6;
		if (this.gridsizeX < 5) this.gridsizeX = 5;
		if (this.gridsizeX > 15) this.gridsizeX = 15;
		this.gridsizeY = document.getElementById("opt-gridsize-y").valueAsNumber || 11;
		if (this.gridsizeY < 8) this.gridsizeY = 8;
		if (this.gridsizeY > 18) this.gridsizeY = 18;
		const divider = document.getElementById("opt-nbShapes-few").checked ? 20
					: document.getElementById("opt-nbShapes-plenty").checked ? 12
					: 15;
		this.nbShapes = Math.floor(this.gridsizeX * this.gridsizeY / divider);
		if (this.nbShapes > shapeList.length) this.nbShapes = shapeList.length;

		this.hats = document.getElementById("opt-hats-none").checked ? -1
					: document.getElementById("opt-hats-always").checked ? 1
					: 0;
	},
};

const shapeFactory = {
	createAllShapes: function() {
		const areaHintShapes = document.getElementById("area-hint-shapes");
		const gameBoard = document.getElementById("gameBoard");

		// create XxY matrix
		const matrix = [];
		for (let y = 0; y < options.gridsizeY; y++) {
			matrix[y] = [];
			for (let x = 0; x < options.gridsizeY; x++) {
				matrix[y][x] = null;
			}
		}

		// Place n shapes in the matrix
		const usedShapes = [];
		let retries = 0;
		while (usedShapes.length < options.nbShapes && retries < 50) {
			const randomShape = options.hats == 1 && usedShapes.length == 0
				? shapeList[hatIndex]
				: myRandomFromList(shapeList);
			if (randomShape.name == 'hat' && options.hats == -1) continue;
			if (usedShapes.includes(randomShape.name)) continue;

			const randomShapeOriented = myRandomFromList(randomShape.directions);

			// Generate random coordinates
			const newShapeX = myRandom(1 + options.gridsizeX - randomShapeOriented.shapeMatrix[0].length);
			const newShapeY = myRandom(1 + options.gridsizeY - randomShapeOriented.shapeMatrix.length);

			// check fit in matrix
			retries++;
			if (!shapeFactory.fitsInMatrix(randomShapeOriented.shapeMatrix, matrix, newShapeX, newShapeY)) continue;

			// add to usedShapes, add to matrix
			usedShapes.push(randomShape.name);
			for (let sy = 0; sy < randomShapeOriented.shapeMatrix.length; sy++)
				for (let sx = 0; sx < randomShapeOriented.shapeMatrix[0].length; sx++)
					if (randomShapeOriented.shapeMatrix[sy][sx])
						matrix[newShapeY + sy][newShapeX + sx] = randomShape.name;

			// Display share behind gameBoard
			const template = document.getElementById(randomShapeOriented.id);
			const clone = document.importNode(template.content, true);
			gameBoard.appendChild(clone);
			gameBoard.lastElementChild.style.position = "absolute";
			gameBoard.lastElementChild.style.top = newShapeY * 40 + "px";
			gameBoard.lastElementChild.style.left = newShapeX * 40 + "px";

			// Display shape in area-hint-shapes
			const templateForHint = document.getElementById(randomShape.directions[0].id);
			const cloneForHint = document.importNode(templateForHint.content, true);
			areaHintShapes.appendChild(cloneForHint);

			// Failsafe: if it's too hard to place the next shape, stop.
			retries = 0;
		}

		return matrix;
	},
	fitsInMatrix: function(shapeMatrix, fullMatrix, fullMatrixOffsetX, fullMatrixOffsetY) {
		for (let sy = 0; sy < shapeMatrix.length; sy++)
			for (let sx = 0; sx < shapeMatrix[0].length; sx++)
				if (shapeMatrix[sy][sx])
					if (fullMatrix[fullMatrixOffsetY + sy][fullMatrixOffsetX + sx])
						return false;
		return true;
	},
};

const boxFactory = {
	allBoxes: [],
	createBox: function(gameBoard, x, y, shape) {
		const boxDom = document.createElement("div");
		const box = {
			x: x,
			y: y,
			seen: false,
			shape: shape,
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
				let newBox = boxFactory.createBox(gameBoard, x, y, matrix[y][x]);
			}
		}
	},
	boxClick: function(box) {
		if (paused || box.seen) return;
		timer.start();

		// Increase score
		score++;
		document.getElementById("score").innerHTML = score;

		// Make box seen
		box.seen = true;
		box.dom.classList.add('seen', box.shape ? 'right' : 'wrong');

		// When shape is complete, make box disappear
		var siblingBoxes = boxFactory.allBoxes.filter(b => b.shape === box.shape);
		if (siblingBoxes.every(b => b.seen))
			siblingBoxes.forEach(b => b.dom.classList.add('all'));

		// Check victory
		if (boxFactory.allBoxes.filter(b => b.shape).every(b => b.seen))
			actions.victory();
	},
};

const actions = {
	resetGame: function() {
		const areaHintShapes = document.getElementById("area-hint-shapes");
		const gameBoard = document.getElementById("gameBoard");
		areaHintShapes.innerHTML = '';
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

const shapeList = [
	{ name: 'wreath',	directions: [{ id: 'shape-wreath',	shapeMatrix: [[1,1,1],[1,0,1],[1,1,1]]	}]},

	{ name: 'star',		directions: [{ id: 'shape-star',	shapeMatrix: [[0,1,0],[1,1,1],[0,1,0]]	}]},

	{ name: 'gift-1',	directions: [{ id: 'shape-gift-1',	shapeMatrix: [[1,1],[1,1]]	}]},

	{ name: 'gift-2',	directions: [{ id: 'shape-gift-2-v',	shapeMatrix: [[1,1],[1,1],[1,1]]	},
									 { id: 'shape-gift-2-h',	shapeMatrix: [[1,1,1],[1,1,1]]	}]},

	{ name: 'log',		directions: [{ id: 'shape-log-h',	shapeMatrix: [[1,1,1,1,1]]	},
									 { id: 'shape-log-v',	shapeMatrix: [[1],[1],[1],[1],[1]]	}]},

	{ name: 'tree',		directions: [{ id: 'shape-tree-n',	shapeMatrix: [[0,1,0],[1,1,1],[1,1,1]]	},
									 { id: 'shape-tree-w',	shapeMatrix: [[1,1,0],[1,1,1],[1,1,0]]	},
									 { id: 'shape-tree-s',	shapeMatrix: [[1,1,1],[1,1,1],[0,1,0]]	},
									 { id: 'shape-tree-e',	shapeMatrix: [[0,1,1],[1,1,1],[0,1,1]]	},]},

	{ name: 'candle',	directions: [{ id: 'shape-candle-n',	shapeMatrix: [[0,1,0],[0,1,0],[1,1,1]]	},
									 { id: 'shape-candle-w',	shapeMatrix: [[1,0,0],[1,1,1],[1,0,0]]	},
									 { id: 'shape-candle-s',	shapeMatrix: [[1,1,1],[0,1,0],[0,1,0]]	},
									 { id: 'shape-candle-e',	shapeMatrix: [[0,0,1],[1,1,1],[0,0,1]]	},]},

	{ name: 'moon',		directions: [{ id: 'shape-moon-n',	shapeMatrix: [[1,0,1],[1,1,1]]	},
									 { id: 'shape-moon-w',	shapeMatrix: [[1,1],[1,0],[1,1]]	},
									 { id: 'shape-moon-s',	shapeMatrix: [[1,1,1],[1,0,1]]	},
									 { id: 'shape-moon-e',	shapeMatrix: [[1,1],[0,1],[1,1]]	},]},

	{ name: 'hat',		directions: [{ id: 'shape-hat-n',	shapeMatrix: [[0,1,1,0],[0,1,1,0],[1,1,1,1]]	},
									 { id: 'shape-hat-w',	shapeMatrix: [[1,0,0],[1,1,1],[1,1,1],[1,0,0]]	},
									 { id: 'shape-hat-s',	shapeMatrix: [[1,1,1,1],[0,1,1,0],[0,1,1,0]]	},
									 { id: 'shape-hat-e',	shapeMatrix: [[0,0,1],[1,1,1],[1,1,1],[0,0,1]]	},]},

	{ name: 'cane',		directions: [{ id: 'shape-cane-w1',	shapeMatrix: [[1,1,1,1],[0,0,1,1]]	},
									 { id: 'shape-cane-w2',	shapeMatrix: [[0,0,1,1],[1,1,1,1]]	},
									 { id: 'shape-cane-n1',	shapeMatrix: [[1,1],[1,1],[1,0],[1,0]]	},
									 { id: 'shape-cane-n2',	shapeMatrix: [[1,1],[1,1],[0,1],[0,1]]	},
									 { id: 'shape-cane-s1',	shapeMatrix: [[1,0],[1,0],[1,1],[1,1]]	},
									 { id: 'shape-cane-s2',	shapeMatrix: [[0,1],[0,1],[1,1],[1,1]]	},
									 { id: 'shape-cane-e1',	shapeMatrix: [[1,1,1,1],[1,1,0,0]]	},
									 { id: 'shape-cane-e2',	shapeMatrix: [[1,1,0,0],[1,1,1,1]]	},]},

	{ name: 'scarf',	directions: [{ id: 'shape-scarf-h1',	shapeMatrix: [[1,1,0],[0,1,1]]	},
									 { id: 'shape-scarf-h2',	shapeMatrix: [[0,1,1],[1,1,0]]	},
									 { id: 'shape-scarf-v1',	shapeMatrix: [[1,0],[1,1],[0,1]]	},
									 { id: 'shape-scarf-v2',	shapeMatrix: [[0,1],[1,1],[1,0]]	},]},
];
const hatIndex = 8;
