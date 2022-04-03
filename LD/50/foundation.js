const millisecondsPerFrame = 25;
var allLasers = [];
var gameOver = false;
const score = {
	lasersAbsorbed: 0,
	lasersSurvived: 0,
};
var targetX = 228;
var targetY = 228;
var heroPositionX = 228; // arena/2 - robot/2
var heroPositionY = 228;
var heroColor = 0;
var options;
var chrono;

function startGame()
{
	// Reset
	let gameBoard = document.getElementById("gameBoard");
	let laserContainer = document.getElementById("laserContainer");
	while (laserContainer.firstChild) laserContainer.firstChild.remove();
	allLasers = [];
	gameOver = false;
	score.lasersAbsorbed = 0;
	document.getElementById("points").innerHTML = "0";
	score.lasersSurvived = 0;
	targetX = 228;
	targetY = 228;
	heroPositionX = 228;
	heroPositionY = 228;
	heroColor = 0;

	let heroDom = document.getElementById("hero");
	heroDom.classList.remove("dead");
	heroDom.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, heroPositionX);
	heroDom.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, heroPositionY);

	if (chrono) clearTimeout(chrono);
	chrono = undefined;
	betterTimer.zero();

	options = readOptions();
	colorHelper.changeHeroColor(myRandom(7));
}

function oneFrame()
{
	chrono = setTimeout(oneFrame, millisecondsPerFrame);

	// Time doesn't pass if you're not moving
	if (heroPositionX === targetX && heroPositionY === targetY) return;

	moveHero();
	betterTimer.tick(millisecondsPerFrame);

	// Spawn some lasers
	let diff = options.difficulty
	for (; diff > 4; diff -=4)
		laserController.createLaser();
	if (diff === 4 || 0 === myRandom(5-diff))
		laserController.createLaser();

	allLasers = allLasers.filter(laserController.incrementLaser);
}

function moveHero()
{
	const speed = 10;
	let totalDistance = Math.sqrt(Math.pow(targetY-heroPositionY, 2) + Math.pow(targetX-heroPositionX, 2));
	let moveX = Math.floor((targetX-heroPositionX) * speed / totalDistance);
	let moveY = Math.floor((targetY-heroPositionY) * speed / totalDistance);

	if (Math.abs(targetX - heroPositionX) <= moveX)
		heroPositionX = targetX;
	else
		heroPositionX += moveX;

	if (Math.abs(targetY - heroPositionY) <= moveY)
		heroPositionY = targetY;
	else
		heroPositionY += moveY;

	let heroDom = document.getElementById("hero");
	heroDom.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, heroPositionX);
	heroDom.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, heroPositionY);
}
function endGame()
{
	document.getElementById("hero").classList.add("dead");
	sound.death();
	document.getElementById("finalScoreSurvived").innerHTML = score.lasersSurvived;
	document.getElementById("finalScoreAbsorbed").innerHTML = score.lasersAbsorbed;
	document.getElementById("finalScoreTime").innerHTML = betterTimer.getTimeString();
	modal.showModal("death");
	gameOver = true;
	clearTimeout(chrono);
	chrono = undefined;
}

const eventHandlers = {
	gameBoard_onClick: function(evt) {
		if (gameOver) return;

		let gameBoardBounds = document.getElementById("gameBoard").getBoundingClientRect();
		let newTargetX = Math.round(evt.clientX - gameBoardBounds.left) - 12;
		let newTargetY = Math.round(evt.clientY - gameBoardBounds.top) - 12;

		if (newTargetX < 10) newTargetX = 10;
		else if (newTargetX > 446) newTargetX = 446;
		if (newTargetY < 10) newTargetY = 10;
		else if (newTargetY > 446) newTargetY = 446;

		targetX = newTargetX;
		targetY = newTargetY;

		// Setup ticker
		if (!chrono)
		{
			chrono = setTimeout(oneFrame, millisecondsPerFrame);
			sound.start();
		}
	},
};

function readOptions()
{
	return {
		difficulty: document.querySelector('input[name="difficultyOption"]:checked').value*1,
		sound: document.querySelector('input[name="soundOption"]:checked').value,
	};
}

// Returns an int between 0 and [max], excluding [max].
function myRandom(max)
{
	return Math.floor((Math.random() * max));
}