const laserController = {

	createLaser: function() {
		let randomColor = myRandom(7);

		let firstWall = myRandom(4);
		let secondWall = myRandom(3);
		if (secondWall >= firstWall) secondWall++;
		let start = laserHelper.toPosition(firstWall, 20+myRandom(440));
		let end = laserHelper.toPosition(secondWall, 20+myRandom(440));

		let laser = {
			color: randomColor,
			startX: start.x,
			startY: start.y,
			endX: end.x,
			endY: end.y,
			lifeCycle: 0,
			absorbed: false,
			distanceFromLaser: laserHelper.distanceFromLine(start.x, start.y, end.x, end.y),
			dom: laserHelper.createLaserDom(randomColor, start, end),
		};
		allLasers.push(laser);
	},

	incrementLaser: function(laser) {
		laser.lifeCycle += millisecondsPerFrame;
		if (laser.lifeCycle >= 750)
		{
			score.lasersSurvived++;
			laser.dom.remove();
			return false; // Will be filtered out of allLasers
		}

		// Not fired? Exit early
		if (laser.lifeCycle < 500) return true;

		// Already absorbed? Exit early
		if (laser.absorbed) return true;

		// Just fired? Create the beam
		if (laser.lifeCycle < (500+millisecondsPerFrame)) laserHelper.createBeamDom(laser);

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
				laserHelper.absorbLaser(laser);
			else
				endGame();
		}

		return true; // stays in allLasers
	},
};

const colorHelper = {
	changeHeroColor: function(newColor) {
		heroColor = newColor;
		document.getElementById("hero").firstElementChild.style.stroke = this.getColorText(newColor);
	},
	getColorText: function(color) {
		switch(color) {
			case 1: return "var(--divination-blue)";
			case 2: return "var(--conjuration-green)";
			case 3: return "var(--evocation-red)";
			case 4: return "var(--abjuration-gold)";
			case 5: return "var(--transmutation-teal)";
			case 6: return "var(--enchantment-lilac)";
			default: return "var(--murder-black)";
		}
	},
};

const sound = {
	_shoot: new SoundEffect("1K4Nomc9UcbwGhMKt57KeEeCEiRYjnNudVDTiGyeU6pdnmA3Dxjvqsyugmh1hDof6uksQ1wQqridqVMeKv4NvKahUtPZXSvSxQT6hD2nHtsTkZBcwT4FAcLgr").generate().getAudio(),
	_absorb: new SoundEffect("111119EcQmFbYVzCosqhLFEjYBJcpR4R9rVx1rhXdjmnRPkX4q4hykdBhG8t6yX3gzoKzeDf56gicuXKr3zFT3euZoVtcmLTJHDnBPWTUcPw4B8byWY3JzMD").generate().getAudio(),
	_death: new SoundEffect("8ah6kFJ9roqpiNN94SfivZjvMq3rCd6HM6oLBgA5RNuVSFtQ5btTJtUkuqvfnMZKVSNYkvCPbW9TwM4Gp41bRQRtoQZLYwbWkCtNoM9GWLzoxiLTxGw3tgEV9").generate().getAudio(),
	_start: new SoundEffect("3xpe5dDk9W1bsgYjNY9Tna9A6ZxDT4ZDmAyWmTjXMqsSnDz5D4r8maWQg131LG32fqKpY78g4FDoC8aL5FMhouvQut3jGEGzw3XDLvVamGRCko9ZyoG895W8P").generate().getAudio(),
	_harder: new SoundEffect("111117pjZdUznYjNF5s9MjJLAedzVtyFrexBjWZK2GMFbhRzWzTYsStV4GQzSBixoYyMYD63EgPQu1ZpyzSxu4YHd7AUh5c14wDY87Dj6QGdP1P1qHjHsoBu").generate().getAudio(),

	shoot: function() { if (options.sound === "On") this._shoot.play(); },
	absorb: function() { if (options.sound === "On") this._absorb.play(); },
	death: function() { if (options.sound === "On") this._death.play(); },
	start: function() { if (options.sound === "On") this._start.play(); },
	harder: function() { if (options.sound === "On") this._harder.play(); },
};

const laserHelper = {
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
		let laserDom = document.createElementNS(this.svgns, "g");
		laserDom.setAttributeNS(null, 'stroke', colorHelper.getColorText(color));
		laserDom.setAttributeNS(null, 'stroke-width', 5);
		laserDom.setAttributeNS(null, 'stroke-linecap', "round");
		laserDom.setAttributeNS(null, 'fill', colorHelper.getColorText(color));

		let laserStartDom = document.createElementNS(this.svgns, "circle");
		laserStartDom.setAttributeNS(null, 'cx', start.x);
		laserStartDom.setAttributeNS(null, 'cy', start.y);
		laserStartDom.setAttributeNS(null, 'r', 5);
		laserDom.appendChild(laserStartDom);
		
		let laserTraceDom = document.createElementNS(this.svgns, "line");
		laserTraceDom.setAttributeNS(null, 'x1', start.x);
		laserTraceDom.setAttributeNS(null, 'x2', end.x);
		laserTraceDom.setAttributeNS(null, 'y1', start.y);
		laserTraceDom.setAttributeNS(null, 'y2', end.y);
		laserTraceDom.setAttributeNS(null, 'stroke-width', 1);
		laserTraceDom.setAttributeNS(null, 'stroke-dasharray', "2,6");
		laserDom.appendChild(laserTraceDom);

		document.getElementById("laserContainer").appendChild(laserDom);
		return laserDom;
	},
	createBeamDom: function(laser) {
		let laserBeamDom = document.createElementNS(this.svgns, "line");
		laserBeamDom.classList.add("beam");
		laserBeamDom.setAttributeNS(null, 'x1', laser.startX);
		laserBeamDom.setAttributeNS(null, 'x2', laser.endX);
		laserBeamDom.setAttributeNS(null, 'y1', laser.startY);
		laserBeamDom.setAttributeNS(null, 'y2', laser.endY);
		laser.dom.appendChild(laserBeamDom);
		sound.shoot();
	},
	absorbLaser: function(laser) {
		score.lasersAbsorbed++;
		sound.absorb();
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