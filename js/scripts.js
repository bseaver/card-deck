$(document).ready(function() {

// Suits lowest rank to highest with Unicode Symbol and color
// Symbols from: http://tutorialzine.com/2014/12/you-dont-need-icons-here-are-100-unicode-symbols-that-you-can-use/
var suits = [
  ["Clubs", "&#x2663;", "black"],
  ["Diamonds", "&#x2666;", "red"],
  ["Hearts", "&#x2665;", "red"],
  ["Spades", "&#x2660;", "black"],
];

var cardsPerSuit = 13;

var getCardSymbol = function(inputNumber) {
  // Start with 1 (not 0) since a person may count from 1 not 0
  cardNumber = inputNumber + 1;
  // Sparse array of card numbers to letters
  var cardLetter = [];
  cardLetter[1] = "A"; cardLetter[11] = "J"; cardLetter[12] = "Q"; cardLetter[13] = "K";
  // Try to assign a card letter
  var result = cardLetter[cardNumber];
  // otherwise assign a number
  if (!result) {
    result = cardNumber.toString();
  }
  return result;
}

// Generate a list of cards in list items
var allCards = "";
suits.forEach(function(suit) {
  var suitSymbol = suit[1];
  var card, cardSymbol;
  for (card = 0; card < cardsPerSuit; card++) {
    cardSymbol = getCardSymbol(card);
    allCards += "<li>" + cardSymbol + " " + suitSymbol + "</li>";
  };

  // Insert list items into deck
  $("#deck").html(allCards);
});

}); // End JavaScript On Document Ready()
