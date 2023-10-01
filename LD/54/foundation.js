function startGame() {
	timer.zero();
	timer.start();

	score = 0;
	document.getElementById("score").innerHTML = score;

	options.readOptions();

	placedWords = [];
	boxFactory.createAllBoxes();
	wordFactory.createAllWords();

	actions.setupOnce();
}

var placedWords = [];
var score = 0;
const options = {
	gridsize: 7,
	floats: 10,
	length: 1,
	clears: 3,
	blocks: 0,
	prizes: 0,
	lang: englishVocabulary,
	readOptions: function() {
		this.gridsize = document.getElementById("opt-gridsize").valueAsNumber || 7;
		const few = Math.floor(this.gridsize/4);
		const many = Math.floor(this.gridsize/2);
		this.floats = document.getElementById("opt-floats-8").checked ? 8 : document.getElementById("opt-floats-12").checked ? 12 : 10;
		this.length = document.getElementById("opt-length-0").checked ? 0 : document.getElementById("opt-length-2").checked ? 2 : 1;
		this.clears = many;
		this.clears += document.getElementById("opt-clears-0").checked ? -few : document.getElementById("opt-clears-2").checked ? few : 0;
		this.blocks = document.getElementById("opt-blocks-1").checked ? few : document.getElementById("opt-blocks-2").checked ? many : 0;
		this.prizes = document.getElementById("opt-prizes-1").checked ? few : document.getElementById("opt-prizes-2").checked ? many : 0;
		this.lang = document.getElementById("opt-lang-fr").checked ? frenchVocabulary : englishVocabulary;
	},
};

const wordFactory = {
	createWord: function(wordbox) {
		const rect = wordbox.getBoundingClientRect();
		const wordDom = document.createElement("div");
		const word = {
			x: Math.ceil(rect.x) + myRandom(rect.width - 100),
			y: Math.ceil(rect.y) + myRandom(rect.height),
			xSpeed: 1+myRandom(3),
			ySpeed: 1+myRandom(3),
			value: wordFactory.pickRandomWord(),
			is_held: false,
			dom: wordDom,
		};
		if (myRandom(2) === 0) word.xSpeed = -word.xSpeed;
		if (myRandom(2) === 0) word.ySpeed = -word.ySpeed;
		wordDom.classList.add("word");
		wordDom.style.left = word.x + "px";
		wordDom.style.top = word.y + "px";
		wordDom.innerHTML = word.value;
		wordDom.addEventListener("mousedown", (e) => { word.is_held = true; });
		wordDom.addEventListener("touchstart", (e) => { word.is_held = true; });
		wordbox.appendChild(wordDom);
		wordFactory.allWords.push(word);
		return word;
	},
	createAllWords: function() {
		const wordbox = document.getElementById("wordbox");

		// Clear any pre-existing words
		wordFactory.allWords = []
		wordbox.innerHTML = "";

		// Create new words
		for (let i = 0; i < options.floats; i++) {
			wordFactory.createWord(wordbox);
		}
	},
	replaceWord: function(oldWord) {
		const wordbox = document.getElementById("wordbox");

		// Remove old word
		wordbox.removeChild(oldWord.dom);
		wordFactory.allWords = wordFactory.allWords.filter(w => w != oldWord);

		// Create new word
		wordFactory.createWord(wordbox);
	},
	pickRandomWord: function() {
		// Length options: "Shorter" is disadvantage, "Longer" is advantage.
		const length1 = 2 + myRandom(Math.ceil(options.gridsize-2));
		const length2 = 2 + myRandom(Math.ceil(options.gridsize-2));
		const i = options.length == 0 ? Math.min(length1, length2)
				: options.length == 2 ? Math.max(length1, length2)
				: length1;
		const j = myRandom(options.lang[i].length);
		return options.lang[i][j];
	},
};

const boxFactory = {
	createBox: function(gameBoard, x, y) {
		const boxDom = document.createElement("div");
		const box = {
			x: x,
			y: y,
			text: '',
			from: [],
			dom: boxDom,
			is_block: false,
			is_prize: false,
			seen: false,
		};
		boxDom.classList.add("box");
		gameBoard.appendChild(boxDom);
		return box;
	},
	createAllBoxes: function() {
		const gameBoard = document.getElementById("gameBoard");
		gameBoard.style.gridTemplateColumns = "repeat(" + options.gridsize + ", 1.2em)";
		gameBoard.style.width = (options.gridsize*1.4-.2) + "em";

		// Clear any pre-existing boxes
		boxFactory.allBoxes = [];
		boxFactory.boxMatrix = [];
		gameBoard.innerHTML = "";

		// create NxN grid
		for (let i = 0; i < options.gridsize; i++) {
			boxFactory.boxMatrix[i] = [];
			for (let j = 0; j < options.gridsize; j++) {
				let newBox = boxFactory.createBox(gameBoard, i, j);
				boxFactory.boxMatrix[i][j] = newBox;
				boxFactory.allBoxes.push(newBox);
			}
		}

		// place first word
		const firstWord = wordFactory.pickRandomWord();
		const firstWordPosX = Math.floor(options.gridsize/2);
		const firstWordPosY = Math.floor((options.gridsize - firstWord.length)/2);
		actions.pushWord(firstWordPosX, firstWordPosY, true, firstWord);

		let emptyBoxes = boxFactory.allBoxes.filter(box => box.from.length == 0);

		// place some blockers
		for (let k = 0; k < options.blocks; k++) {
			let newBlock = myRandomFromList(emptyBoxes);
			newBlock.is_block = true;
			newBlock.dom.classList.add("block");
			emptyBoxes = emptyBoxes.filter(box => box != newBlock);
		}

		// place some prizes
		for (let l = 0; l < options.prizes; l++) {
			let newPrize = myRandomFromList(emptyBoxes);
			newPrize.is_prize = true;
			newPrize.dom.classList.add("prize");
			emptyBoxes = emptyBoxes.filter(box => box != newPrize);
		}
	},
};

const previewHelper = {
	prevPreviewTarget: null,
	prevPreviewHorizontal: null,
	showPreview: function(e) {
		if (previewHelper.prevPreviewTarget != e.target || previewHelper.prevPreviewHorizontal != orientationHelper.horizontal)
		{
			previewHelper.hidePreview();
			previewHelper.prevPreviewTarget = e.target;
			previewHelper.prevPreviewHorizontal = orientationHelper.horizontal;
			return;
		}

		const heldWord = wordFactory.allWords.find(w => w.is_held);
		if (!heldWord) return;

		if (!e.target.classList.contains("box")) return;

		const targetBox = boxFactory.allBoxes.find(b => b.dom === e.target);
		if (!targetBox) return;

		let x = targetBox.x;
		let y = targetBox.y;
		const valid = actions.canPlaceWord(x, y, orientationHelper.horizontal, heldWord.value);
		for (let i = 0; i < heldWord.value.length && x < boxFactory.boxMatrix.length && y < boxFactory.boxMatrix[x].length; i++) {
			let boxAt = boxFactory.boxMatrix[x][y];
			boxAt.dom.setAttribute("data-preview", heldWord.value[i]);
			if (!valid) boxAt.dom.classList.add("invalid");

			if (orientationHelper.horizontal) y++; else x++;
		}
	},
	hidePreview: function() {
		document.querySelectorAll("[data-preview]").forEach(b => {
			b.removeAttribute("data-preview");
			b.classList.remove("invalid");
		});
	},
};

const actions = {
	bounceWords: function() {
		const rect = document.getElementById("wordbox").getBoundingClientRect();
		const maxX = Math.floor(rect.x + rect.width);
		const maxY = Math.floor(rect.y + rect.height);

		wordFactory.allWords.forEach(word => {
			if (word.is_held) return;

			word.x += word.xSpeed;
			word.y += word.ySpeed;

			if (word.x < rect.x) {
				word.x = Math.ceil(rect.x);
				word.xSpeed = -word.xSpeed;
			}
			if (word.x + word.dom.clientWidth >= maxX) {
				word.x = maxX - word.dom.clientWidth;
				word.xSpeed = -word.xSpeed;
			}
			if (word.y < rect.y) {
				word.y = Math.ceil(rect.y);
				word.ySpeed = -word.ySpeed;
			}
			if (word.y + word.dom.clientHeight >= maxY) {
				word.y = maxY - word.dom.clientHeight;
				word.ySpeed = -word.ySpeed;
			}

			word.dom.style.left = word.x + "px";
			word.dom.style.top = word.y + "px";
		});
	},
	moveHeldWord: function(e) {
		orientationHelper.update(e.clientX, e.clientY);
		previewHelper.showPreview(e);

		const heldWord = wordFactory.allWords.find(w => w.is_held);
		if (!heldWord) return;

		heldWord.dom.style.left = e.clientX + "px";
		heldWord.dom.style.top = (e.clientY+1) + "px";
	},
	dropHeldWord: function(e) {
		const heldWord = wordFactory.allWords.find(w => w.is_held);
		if (!heldWord) return;

		heldWord.is_held = false;
		previewHelper.hidePreview();
		if (!e.target.classList.contains("box")) return;

		const targetBox = boxFactory.allBoxes.find(b => b.dom === e.target);
		if (!targetBox) return;

		// if it fits
		if (!actions.canPlaceWord(targetBox.x, targetBox.y, orientationHelper.horizontal, heldWord.value)) return;

		actions.pushWord(targetBox.x, targetBox.y, orientationHelper.horizontal, heldWord.value);
		actions.popWord();
		wordFactory.replaceWord(heldWord);
		score++;
		document.getElementById("score").innerHTML = score;
		//TODO prizes???
		if (boxFactory.allBoxes.every(b => b.seen || b.is_block)) actions.victory();
	},
	canPlaceWord: function(x,y,horizontal,value) {
		if (horizontal && y + value.length > options.gridsize) return false;
		if (!horizontal && x + value.length > options.gridsize) return false;

		let sharesALetter = false;
		for (let i = 0; i < value.length; i++) {
			let boxAt = boxFactory.boxMatrix[x][y];

			if (boxAt.is_block) return false;
			if (boxAt.text != '' && boxAt.text != value[i]) return false;
			if (boxAt.text != '') sharesALetter = true;

			if (horizontal) y++; else x++;
		}
		return sharesALetter;
	},
	pushWord: function(x,y,horizontal,value) {
		const obj = { value: value }; // strings might not be unique; object references are
		placedWords.push(obj);

		for (let i = 0; i < value.length; i++) {
			let box = boxFactory.boxMatrix[x][y];
			box.from.push(obj);
			box.seen = true;
			box.text = value[i];
			box.dom.innerHTML = value[i];
			box.dom.classList.add("seen");
			if (horizontal) y++; else x++;
		}
	},
	popWord: function() {
		if (placedWords.length <= options.clears) return;

		const oldWord = placedWords.shift();
		boxFactory.allBoxes.forEach(box => {
			if (!box.from.includes(oldWord)) return;

			if (box.from.length == 1) {
				box.from = [];
				box.dom.innerHTML = "";
				box.text = '';
			}
			else {
				box.from = box.from.filter(w => w != oldWord);
			}
		});
	},
	setupOnce: function() {
		window.addEventListener('mouseup', actions.dropHeldWord);
		window.addEventListener('touchend', actions.dropHeldWord);
		window.addEventListener('mousemove', actions.moveHeldWord);
		window.addEventListener('touchmove', actions.moveHeldWord);
		setInterval(actions.bounceWords, 50);

		// Do only once
		actions.setupOnce = (()=>{});
	},
	victory: function() {
		timer.stop();
		modal.showModal("victory");
	},
};

// Returns an int between 0 and [max], excluding [max].
function myRandom(max) {
	return Math.floor((Math.random() * max));
}
function myRandomFromList(list) {
	return list[myRandom(list.length)];
}

const orientationHelper = {
	horizontal: true,
	xStack: [],
	yStack: [],
	xLast: undefined,
	yLast: undefined,
	update: function(x,y) {
		if (orientationHelper.xLast === undefined) {
			orientationHelper.xLast = x;
			orientationHelper.yLast = y;
			return;
		}

		orientationHelper.xStack.push(Math.abs(orientationHelper.xLast - x));
		orientationHelper.xLast = x;
		orientationHelper.yStack.push(Math.abs(orientationHelper.yLast - y));
		orientationHelper.yLast = y;

		if (orientationHelper.xStack.length < 7) return;

		orientationHelper.xStack.shift();
		orientationHelper.yStack.shift();

		const travelX = orientationHelper.xStack.reduce((acc,val) => acc += val, 0);
		const travelY = orientationHelper.yStack.reduce((acc,val) => acc += val, 0);
		orientationHelper.horizontal = travelX >= travelY;
	},
};