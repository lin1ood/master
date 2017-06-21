console.log("Up and Running!!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function (cardIndex) {
	console.log("User flipped " + cards[cardIndex].rank);
	console.log("card image = " + cards[cardIndex].cardImage);
	console.log("card suit = " + cards[cardIndex].suit);
	cardsInPlay.push(cards[cardIndex].rank);
	checkForMatch();

};

flipCard(0);
flipCard(2);

/*
if (cardsInPlay.length === 2) {
} 
*/


