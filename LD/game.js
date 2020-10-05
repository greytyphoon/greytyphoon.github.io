var modal = {
	showModal: function(modalId)
	{
		let dialog = document.getElementById(modalId);
		if (typeof dialog.showModal === "function")
		{
			dialog.showModal();
			return;
		}

		dialog.setAttribute("open", "");
		let backdropDom = document.createElement("div");
		backdropDom.id = "backdrop";
		document.body.appendChild(backdropDom);
		backdropDom.appendChild(dialog);
	},
	closeModal: function(modalId)
	{
		let dialog = document.getElementById(modalId);
		if (typeof dialog.showModal === "function")
		{
			dialog.close();
			return;
		}

		dialog.removeAttribute("open");
		document.body.appendChild(dialog);
		let backdropDom = document.getElementById("backdrop");
		document.body.removeChild(backdropDom);
	},
	showOnce(modalId, documentId)
	{
		if (window.location.protocol !== 'file:'
			&& !document.cookie.split('; ').some(row => row === 'showOnceForDocument=' + documentId))
		{
			modal.showModal(modalId);
			let expires = new Date();
			expires.setMonth(expires.getMonth()+6);
			document.cookie = "showOnceForDocument=" + documentId + "; expires=" + expires.toUTCString();
		}
	}
};

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