const Color = {
	Purple: 0,
	Blue: 1,
	Green: 2,
	Red: 3,
	Gold: 4,
	Teal: 5,
	Lilac: 6,
};

const colorController = {
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