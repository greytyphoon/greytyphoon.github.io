var suit = {
	SPADES: 0,
	HEARTS: 1,
	CLUBS: 2,
	DIAMONDS: 3
};

var cards = {
	createAndShuffle: function(domSize)
	{
		let allCards = cards_private.createCards(domSize);

		allCards.forEach(card =>
		{
			card.dom.addEventListener("click", function() { eventHandlers.clickCard(card); });
			card.dom.addEventListener("dragstart", function(ev) { eventHandlers.dragCard(card, ev); });
			card.dom.addEventListener("dragover", function(ev) { eventHandlers.compareCard(card, ev); });
			card.dom.addEventListener("drop", function(ev) { eventHandlers.dropCard(card, ev); });
			card.dom.addEventListener("dragend", function(ev) { eventHandlers.resetCard(card, ev); });
		});

		for (let i = allCards.length - 1; i > 0; i--)
		{
			let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
			let temp = allCards[i];
			allCards[i] = allCards[j];
			allCards[j] = temp;
		}

		return allCards;
	}
};

var cards_private = {
	createCards: (domSize) => [
		{ suit: suit.SPADES, 	rank: 1, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("ace_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 1, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("ace_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 1, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("ace_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 1, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("ace_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 2, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("2_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 2, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("2_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 2, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("2_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 2, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("2_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 3, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("3_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 3, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("3_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 3, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("3_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 3, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("3_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 4, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("4_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 4, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("4_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 4, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("4_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 4, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("4_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 5, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("5_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 5, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("5_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 5, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("5_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 5, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("5_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 6, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("6_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 6, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("6_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 6, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("6_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 6, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("6_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 7, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("7_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 7, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("7_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 7, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("7_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 7, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("7_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 8, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("8_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 8, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("8_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 8, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("8_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 8, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("8_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 9, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("9_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 9, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("9_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 9, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("9_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 9, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("9_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 10, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("10_of_spades", domSize) },
		{ suit: suit.HEARTS, 	rank: 10, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("10_of_hearts", domSize) },
		{ suit: suit.CLUBS, 	rank: 10, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("10_of_clubs", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 10, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("10_of_diamonds", domSize) },
		{ suit: suit.SPADES, 	rank: 11, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("jack_of_spades2", domSize) },
		{ suit: suit.HEARTS, 	rank: 11, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("jack_of_hearts2", domSize) },
		{ suit: suit.CLUBS, 	rank: 11, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("jack_of_clubs2", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 11, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("jack_of_diamonds2", domSize) },
		{ suit: suit.SPADES, 	rank: 12, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("queen_of_spades2", domSize) },
		{ suit: suit.HEARTS, 	rank: 12, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("queen_of_hearts2", domSize) },
		{ suit: suit.CLUBS, 	rank: 12, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("queen_of_clubs2", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 12, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("queen_of_diamonds2", domSize) },
		{ suit: suit.SPADES, 	rank: 13, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("king_of_spades2", domSize) },
		{ suit: suit.HEARTS, 	rank: 13, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("king_of_hearts2", domSize) },
		{ suit: suit.CLUBS, 	rank: 13, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("king_of_clubs2", domSize) },
		{ suit: suit.DIAMONDS, 	rank: 13, 	isSelected: false, 	platform: null, 	dom: cards_private.createCardDom("king_of_diamonds2", domSize) },
	],
	createCardDom: function(src, domSize)
	{
		let cardDom = document.createElement("img");
		cardDom.classList.add("card");
		cardDom.id = src;
		cardDom.src = "cards/" + src + ".svg";
		cardDom.alt = src;
		cardDom.width = domSize;
		cardDom.height = domSize;
		cardDom.draggable = true;
		return cardDom;
	}
};