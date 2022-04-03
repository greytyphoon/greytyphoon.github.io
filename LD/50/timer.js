const betterTimer = {
	ticks: 0,
	seconds: 0,
	minutes: 0,

	zero: function() {
		this.ticks = 0;
		this.seconds = 0;
		this.minutes = 0;
		document.getElementById("timer").innerHTML = "00:00";
	},

	tick: function(increment) {
		this.ticks += increment;
		if (this.ticks >= 1000) {
			this.ticks -= 1000;
			this.seconds++;

			if (this.seconds === 60) {
				this.seconds = 0;
				this.minutes++;
			}
		}
		document.getElementById("timer").innerHTML = this.getTimeString();
	},

	getTimeString: function() {
		return this.minutes.toString().padStart(2,'0')
			+ ":" + this.seconds.toString().padStart(2,'0')
			+ "." + this.ticks.toString().padStart(3,'0');
	}
};