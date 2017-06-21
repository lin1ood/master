console.log("Up and Running!!");

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function (cardIndex) {
	console.log("User flipped " + cards[cardIndex]);
	cardsInPlay.push(cards[cardIndex]);
	checkForMatch();

};

flipCard(0);
flipCard(2);

/*
if (cardsInPlay.length === 2) {
} 
*/


