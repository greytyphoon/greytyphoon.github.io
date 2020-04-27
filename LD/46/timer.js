var timer = {
	chrono: undefined,
	seconds: 0,
	minutes: 0,

	start: function()
	{
		if (timer.chrono)	return;
		timer.chrono = setTimeout(timer.tick, 1000);
		timer.seconds = 0;
		timer.minutes = 0;
	},

	stop: function()
	{
		clearTimeout(timer.chrono);
		timer.chrono = undefined;
	},

	zero: function()
	{
		timer.stop();
		timer.seconds = 0;
		timer.minutes = 0;
		document.getElementById("timer").innerHTML = "00:00";
	},

	tick: function()
	{
		timer.seconds++;
		if (timer.seconds === 60) {
			timer.seconds = 0;
			timer.minutes++;
		}

		timer.chrono = setTimeout(timer.tick, 1000);
		document.getElementById("timer").innerHTML = (timer.minutes > 9 ? timer.minutes : "0" + timer.minutes) + ":" + (timer.seconds > 9 ? timer.seconds : "0" + timer.seconds);;
	}
};