'use strict';

let turnCount = 0;
let player = " ";

$(document).ready(function() {
  console.log("ready!");
});

function whoWins(player) {
  //top across
  if ($('board').find('0').text() !== '') {
    if ($('0').find('0').text() === $('board').find('1').text()) {
      if ($('board').find('0').text() === $('2').text()) {
        console.log('Game over! ' + player + ' is the winner!');

      }
    }
  }
  //left down
  if ($('board').find('0').text() === $('board').find('3').text()) {
    if ($('board').find('0').text() === $('6').text()) {
      console.log('Game over! ' + player + ' is the winner!');

    }
  }

  //left diagonal
  if ($('board').find('0').text() === $('board').find('4').text()) {
    if ($('board').find('0').text() === $('8').text()) {
      console.log('Game over! ' + player + ' is the winner!');

    }
  }

  //middle down
  if ($('board').find('1').text() !== '') {
    if ($('board').find('1').text() === $('board').find('4').text()) {
      if ($('board').find('1').text() === $('7').text()) {
        console.log('Game over! ' + player + ' is the winner!');

      }
    }
  }

  //right down
  if ($('board').find('2').text() !== '') {
    if ($('#oard').find('2').text() === $('board').find('5').text()) {
      if ($('board').find('2').text() === $('8').text()) {
        console.log('Game over! ' + player + ' is the winner!');

      }
    }
  }

  //right diagonal
  if ($('board').find('2').text() === $('board').find('4').text()) {
    if ($('board').find('2').text() === $('6').text()) {
      console.log('Game over! ' + player + ' is the winner!');

    }
  }
}

//middle across

if ($('board').find('3').text() !== '') {
  if ($('board').find('3').text() === $('board').find('4').text()) {
    if ($('board').find('3').text() === $('5').text()) {
      console.log('Game over! ' + player + ' is the winner!');

    }
  }
}

//bottom across
if ($('board').find('6').text() !== '') {
  if ($('board').find('6').text() === $('board').find('7').text()) {
    if ($('board').find('6').text() === $('8').text()) {
      console.log('Game over! ' + player + ' is the winner!');

    }
  }
}

$("td").on("click", function() {
  $(event.currentTarget).text("X");
  if (turnCount % 2 === 0) {
    $(this).text('X');
    whoWins("X");
  } else {
    $(this).text('O');
    whoWins("O");
  }
  turnCount++;
  let inputArray = [];
  inputArray.push(event.currentTarget);
  console.log(inputArray);
});

$("td").on("click", function() {
  if ($("td").text() !== null) {
    $(event.currentTarget).off("click");
  } else if ($("td").text() === null) {
      $(event.currentTarget).on("click");
    }
  });

$('.play').on("click", function() {
  $("td").text(" ");
});

module.exports = true;
