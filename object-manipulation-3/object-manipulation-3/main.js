console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Osama',
    hand: []
  },
  {
    name: 'James',
    hand: []
  },
  {
    name: 'Tim',
    hand: []
  },
  {
    name: 'Jerry',
    hand: []
  },
];

var deck = {

    rank: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
    suit: ['Clubs', 'Diamonds', 'Hearts', 'Spades']
};


function cardGame() {
  //Created card deck
  var cardsDeck = [];
  for (var i = 0; i < deck.suit.length; i++) {
    for (var j = 0; j < deck.rank.length; j++) {
      var cardObj = {};
      cardObj['suit'] = deck.suit[i];
      cardObj['rank'] = deck.rank[j];
      cardsDeck.push(cardObj);
    }
  }

  //Shuffle deck & deal
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 2; j++) {
      var shuffleDeck = _.shuffle(cardsDeck);
      players[i].hand.push(shuffleDeck[j]);
    }
  }

  //Convert hands to score
  for (var i = 0;  i < 4; i++) {
    for (var j = 0;  j < 2; j++) {
      if (players[i].hand[j].rank === 'Jack' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'King') {
        players[i].hand[j].rank = 10;
      } else if (players[i].hand[j].rank === 'Ace') {
        players[i].hand[j].rank = 11;
      }
    }
  }

  //Calculate Score
  var playerScoreArr = [];
  var i = 0;
  while (i < 4) {
    var j = 0;
    var playerScore = players[i].hand[j].rank + players[i].hand[j + 1].rank;
    playerScoreArr.push(playerScore);
    i++;
  }

  //Find the winner
  var topScore = Math.max(...playerScoreArr);
  var indexOfMax = playerScoreArr.indexOf(topScore);
  console.log(players[indexOfMax].name);
}
