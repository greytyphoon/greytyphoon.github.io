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