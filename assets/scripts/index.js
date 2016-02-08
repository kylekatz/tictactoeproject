'use strict';

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

function createGame() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    method: 'POST',
    contentType: false,
    processData: false,
    data: {}
  }).done(function(data) {
    console.log(data);
    console.log('Game created');
    myApp.game = data.game;
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
}

function saveGame(player, index) {
  console.log('attempting save game');
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.game.id,
    // url: 'http://httpbin.org/post',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": player,
        },
        "over": false
      }
    }
  }).done(function(data) {
    myApp.game = data.game;
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
}

function gameCount() {
  $.ajax({
    url: myApp.baseUrl + '/games',
    // url: 'http://httpbin.org/post',å
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    type: 'GET',
  }).done(function(data) {
    $('#gameCount').html(data.games.length);
    console.log(data.games.length);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
}

//VARIABLES
let turnCount = 0;
let winner;
let player = 'X';
let xWins = 0;
let oWins = 0;
let ties = 0;
let gameState = 'on';

//GAME MESSAGE
function playMessage(content) {
  $('#play').text(content);
}

$('#butt').on('click', function() {
  $('td').text(' ');
  playMessage('Play?');
});


function scoreKeeper() {
  if (winner === 'X') {
    xWins++;
    $('#pX').text(xWins);
  } else if (winner === 'O') {
    oWins++;
    $('#pO').text(oWins);
  } else if (winner === 'tie') {
    ties++;
    $('#ties').text(ties);
  }
}

function squareId(position) {
  return $('#' + position);
}

function checkRows(a, b, c) {
  if (squareId(a).text() === player && squareId(b).text() === player && squareId(c).text() === player) {
    return true;
  } else {
    return false;
  }
}

function whoWins() {
  if (checkRows(0, 1, 2) ||
    checkRows(3, 4, 5) ||
    checkRows(6, 7, 8) ||
    checkRows(0, 3, 6) ||
    checkRows(1, 4, 7) ||
    checkRows(2, 5, 8) ||
    checkRows(0, 4, 8) ||
    checkRows(2, 4, 6)) {
    winner = player;
    gameState = 'off';
    playMessage(player + ' Wins!');
    scoreKeeper();
  } else if ($('.td').text().length === 9) {
    winner = 'tie';
    playMessage('It\'s A Tie!');
    scoreKeeper();
  } else {
    return false;
  }
}

//PLACE LETTER AND SWITCH TURNS
$('td').on('click', function() {
  $(event.currentTarget).text('X');
  if (turnCount % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O');
  }
  turnCount++;
});

$(document).ready(function() {
  console.log('ready!');
  createGame();
  gameCount();
  saveGame();
  whoWins();
});

module.exports = true;

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');
