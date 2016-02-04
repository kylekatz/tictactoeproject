'use strict';
//VARIABLES
let turnCount = 0;

let sq0; // value within each cell
let sq1;
let sq2;
let sq3;
let sq4;
let sq5;
let sq6;
let sq7;
let sq8;

//GAME MESSAGE
function playMessage(content) {
  $('#play').text(content);
}

playMessage("Play?");
//PLACE LETTER AND SWITCH TURNS
$("td").on("click", function() {
  $(event.currentTarget).text("X");
  if (turnCount % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O');
  }
  turnCount++;
});

let xWin = false;
let oWin = false;
//WINNER MESSAGE
function winMessage() {
  if (xWin === true) {
    playMessage("X Win!");
  } else if (oWin === true) {
    playMessage("O Wins!");
  }
}

function whoWins() {// CHECKS X
  if (sq0 === sq1 && sq0 === sq2 && sq0 === "X" || //first row
    sq3 === sq4 && sq3 === sq5 && sq3 === "X" || //second row
    sq6 === sq7 && sq6 === sq8 && sq6 === "X" || //third row
    sq0 === sq3 && sq0 === sq6 && sq0 === "X" || //first column
    sq1 === sq4 && sq1 === sq7 && sq1 === "X" || //second column
    sq2 === sq5 && sq2 === sq8 && sq2 === "X" || //third column
    sq0 === sq4 && sq0 === sq8 && sq0 === "X" || //diagonal 1
    sq2 === sq4 && sq2 === sq6 && sq2 === "X") //diagonal 2
  {
    return xWin === true;
  } else {//CHECKS O
    if (sq0 === sq1 && sq0 === sq2 && sq0 === "O" || //second row
      sq3 === sq4 && sq3 === sq5 && sq3 === "O" ||
      sq6 === sq7 && sq6 === sq8 && sq6 === "O" || //third row
      sq0 === sq3 && sq0 === sq6 && sq0 === "O" || //first column
      sq1 === sq4 && sq1 === sq7 && sq1 === "O" || //second column
      sq2 === sq5 && sq2 === sq8 && sq2 === "O" || //third column
      sq0 === sq4 && sq0 === sq8 && sq0 === "O" || //diagonal 1
      sq2 === sq4 && sq2 === sq6 && sq2 === "O") //diagonal 2
    {
      return oWin === true;
    } else { // CHECKS TIE
      if (((sq0 === "X") || (sq0 === "O")) && ((sq3 === "X") ||
          (sq3 === "O")) && ((sq6 === "X") || (sq6 === "O")) &&
        ((sq1 === "X") || (sq1 === "O")) && ((sq4 === "X") ||
          (sq4 === "O")) && ((sq7 === "X") || (sq7 === "O")) &&
        ((sq2 === "X") || (sq2 === "O")) && ((sq5 === "X") ||
          (sq5 === "O")) && ((sq8 === "X") || (sq8 === "O"))) {
        playMessage("Stalemate!");
      }
    }
  }
}

$(document).ready(function() {
  console.log("ready!");
});
//TURNS OFF SQUARES SOMETIMES too much or not enough
$("td").on("click", function() {
  if ($("td").text() === true) {//too much w != null
    $(event.currentTarget).off("click");
  }
});
 //CALLS FUNCTIONS ON BOARD CLICK
$('#board').on("click", function() {
  whoWins();
  winMessage();
});
//CLEARS BOARD
$('#butt').on("click", function() {
  $("td").text(" ");
});

module.exports = true;

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');
