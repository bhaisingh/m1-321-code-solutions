console.log('Lodash is loaded:', typeof _ !== 'undefined');

var cardDeck = [];

function buildDeck() {
  var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  var suits = ['Hearts', 'Diamond', 'Spades', 'Clubs'];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < ranks.length; j++) {
      var suit = suits[i];
      var rank = ranks[j];
      cardDeck.push({ suit, rank });
    }
  }
  console.log(cardDeck);
  return cardDeck;
}

function shuffleDeck(cardDeck) {
  for (var i = cardDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cardDeck[i];
    cardDeck[i] = cardDeck[j];
    cardDeck[j] = temp;
  }
  console.log(cardDeck);
  return cardDeck;
}

function addPlayer(player) {
  var outPlayer = [];
  for (var i = 0; i < player.length; i++) {
    var name = player[i];
    outPlayer.push({ name });
  }
  console.log(outPlayer);
  return outPlayer;
}

function dealCards(player, noOfCards) {
  var cardDelt = [];
  var k = 0;
  for (var i = 0; i < noOfCards; i++) {
    for (var j = 0; j < player.length; j++) {
      cardDelt.push([cardDeck[k]]);
      k += 1;
    }
  }

}

function play(player, noOfCards) {
  shuffleDeck(buildDeck());
  if (player.length <= 1) {
    return 'Not enough Player to Play';
  } else {
    dealCards(addPlayer(player), noOfCards);
  }
}

play();
