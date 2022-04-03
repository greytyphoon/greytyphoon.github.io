const laserController = {

	createLaser: function() {
		let randomColor = myRandom(7);

		let firstWall = myRandom(4);
		let secondWall = myRandom(3);
		if (secondWall >= firstWall) secondWall++;
		let start = laserHelpers.toPosition(firstWall, 20+myRandom(440));
		let end = laserHelpers.toPosition(secondWall, 20+myRandom(440));

		let laser = {
			color: randomColor,
			startX: start.x,
			startY: start.y,
			endX: end.x,
			endY: end.y,
			lifeCycle: 0,
			absorbed: false,
			distanceFromLaser: laserHelpers.distanceFromLine(start.x, start.y, end.x, end.y),
			dom: laserHelpers.createLaserDom(randomColor, start, end),
		};
		allLasers.push(laser);
	},

	incrementLaser: function(laser) {
		laser.lifeCycle += millisecondsPerFrame;
		if (laser.lifeCycle >= 1000)
		{
			score.lasersSurvived++;
			laser.dom.remove();
			return false; // Will be filtered out of allLasers
		}

		// Not fired? Exit early
		if (laser.lifeCycle < 750) return true;

		// Already absorbed? Exit early
		if (laser.absorbed) return true;

		// Just fired? Create the beam
		if (laser.lifeCycle < (750+millisecondsPerFrame)) laserHelpers.createBeamDom(laser);

		// Check collisions
		var robotCorners = [
			{ x: heroPositionX, y: heroPositionY },
			{ x: heroPositionX, y: heroPositionY + 24 },
			{ x: heroPositionX + 12, y: heroPositionY + 12 },
			{ x: heroPositionX + 24, y: heroPositionY + 24 },
			{ x: heroPositionX + 24, y: heroPositionY }];
		if (robotCorners.some(pt => laser.distanceFromLaser(pt.x, pt.y) < 2.5))
		{
			if (laser.color === heroColor)
				laserHelpers.absorbLaser(laser);
			else
				endGame();
		}

		return true; // stays in allLasers
	},
};

const laserHelpers = {
	svgns: "http://www.w3.org/2000/svg",
	toPosition: function(wallNumber, positionOnWall) {
		switch (wallNumber) {
			case 0:
				return { x: positionOnWall, y: 5 };
			case 1:
				return { x: 475, y: positionOnWall };
			case 2:
				return { x: positionOnWall, y: 475 };
			case 3:
				return { x: 5, y: positionOnWall };
		}
	},
	createLaserDom: function(color, start, end) {
		let laserDom = document.createElementNS(laserHelpers.svgns, "g");
		laserDom.setAttributeNS(null, 'stroke', colorController.getColorText(color));
		laserDom.setAttributeNS(null, 'stroke-width', 5);
		laserDom.setAttributeNS(null, 'stroke-linecap', "round");
		laserDom.setAttributeNS(null, 'fill', colorController.getColorText(color));

		let laserStartDom = document.createElementNS(laserHelpers.svgns, "circle");
		laserStartDom.setAttributeNS(null, 'cx', start.x);
		laserStartDom.setAttributeNS(null, 'cy', start.y);
		laserStartDom.setAttributeNS(null, 'r', 5);
		laserDom.appendChild(laserStartDom);
		
		let laserTraceDom = document.createElementNS(laserHelpers.svgns, "line");
		laserTraceDom.setAttributeNS(null, 'x1', start.x);
		laserTraceDom.setAttributeNS(null, 'x2', end.x);
		laserTraceDom.setAttributeNS(null, 'y1', start.y);
		laserTraceDom.setAttributeNS(null, 'y2', end.y);
		laserTraceDom.setAttributeNS(null, 'stroke-width', 1);
		laserTraceDom.setAttributeNS(null, 'stroke-dasharray', "8,2");
		laserDom.appendChild(laserTraceDom);

		document.getElementById("laserContainer").appendChild(laserDom);
		return laserDom;
	},
	createBeamDom: function(laser) {
		let laserBeamDom = document.createElementNS(laserHelpers.svgns, "line");
		laserBeamDom.classList.add("beam");
		laserBeamDom.setAttributeNS(null, 'x1', laser.startX);
		laserBeamDom.setAttributeNS(null, 'x2', laser.endX);
		laserBeamDom.setAttributeNS(null, 'y1', laser.startY);
		laserBeamDom.setAttributeNS(null, 'y2', laser.endY);
		laser.dom.appendChild(laserBeamDom);
	},
	absorbLaser: function(laser) {
		score.lasersAbsorbed++;
		laser.absorbed = true;
		document.getElementById("points").innerHTML = score.lasersAbsorbed;
	},
	distanceFromLine: function(x1, y1, x2, y2) { // Returns a function that take the point. From https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line
		let dx = x2 - x1;
		let dy = y2 - y1;
		let denominator = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
		return (x0, y0) => {
			let foo = dx * (y1 - y0);
			let bar = dy * (x1 - x0);
			return Math.abs(foo-bar) / denominator;
		};
	},
};