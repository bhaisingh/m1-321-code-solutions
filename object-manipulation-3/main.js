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
  return cardDeck;
}

function shuffleDeck(cardDeck) {
  for (var i = cardDeck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = cardDeck[i];
    cardDeck[i] = cardDeck[j];
    cardDeck[j] = temp;
  }
  return cardDeck;
}

function addPlayer(player) {
  var outPlayer = [];
  for (var i = 0; i < player.length; i++) {
    var name = player[i];
    outPlayer.push({ name });
  }
  return outPlayer;
}

function dealCards(player, noOfCards) {
  var value = 0;
  var k = 0;
  for (var i = 0; i < noOfCards; i++) {
    for (var j = 0; j < player.length; j++) {
      if (cardDeck[k].rank === 'A') {
        value = 11;
      } else if (cardDeck[k].rank === 'J' ||
            cardDeck[k].rank === 'Q' ||
            cardDeck[k].rank === 'K') {
        value = 10;
      } else {
        value = parseInt(cardDeck[k].rank, 10);
      }

      if (i === 0) {
        player[j].score = value;
      } else {
        player[j].score += value;
      }
      k += 1;
    }
  }
  var winnerName = '';
  var winnerScore = 0;
  for (i = 0; i < player.length; i++) {
    if (i === 0) {
      winnerName = player[i].name;
      winnerScore = player[i].score;
    } else if (winnerScore < player[i].score) {
      winnerName = player[i].name;
      winnerScore = player[i].score;
    }
  }

  console.log('And the winner is: ' + winnerName + ' with a score of: ' + winnerScore);
}

function play(player, noOfCards) {
  shuffleDeck(buildDeck());
  if (player.length <= 1) {
    return 'Not enough Player to Play';
  } else {
    dealCards(addPlayer(player), noOfCards);
  }
}

play(['Rakesh', 'spongebob', 'patrick'], 2);

play(['Rakesh', 'spongebob', 'patrick'], 4);

play(['Rakesh', 'spongebob', 'patrick', 'Sandy', 'Mr. Crabs'], 2);
