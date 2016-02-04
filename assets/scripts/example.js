'use strict';

let turnCount = 0;

$("td").on("click", function() {
  $(event.currentTarget).text("X");
  if (turnCount % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O');
  }
  turnCount++;
});

let sq0; // value within each cell
let sq1;
let sq2;
let sq3;
let sq4;
let sq5;
let sq6;
let sq7;
let sq8;

// CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX AFTER EACH MOVE
function getBox() {
    sq0 = $('#sq0').html();
    sq1 = $('#sq1').html();
    sq2 = $('#sq2').html();
    sq3 = $('#sq3').html();
    sq4 = $('#sq4').html();
    sq5 = $('#sq5').html();
    sq6 = $('#sq6').html();
    sq7 = $('#sq7').html();
    sq8 = $('#sq8').html();
}

let xWin = false;
let oWin = false;

function whoWins() { // CHECKS X
  if (sq0 === sq1 && sq0 === sq2 && sq0 === "X" || //first row
    sq3 === sq4 && sq3 === sq5 && sq3 === "X" || //second row
    sq6 === sq7 && sq6 === sq8 && sq6 === "X" || //third row
    sq0 === sq3 && sq0 === sq6 && sq0 === "X" || //first column
    sq1 === sq4 && sq1 === sq7 && sq1 === "X" || //second column
    sq2 === sq5 && sq2 === sq8 && sq2 === "X" || //third column
    sq0 === sq4 && sq0 === sq8 && sq0 === "X" || //diagonal 1
    sq2 === sq4 && sq2 === sq6 && sq2 === "X") //diagonal 2
  {
    xWin = true;
  } else {
    if (sq0 === sq1 && sq0 === sq2 && sq0 === "O" || //second row
      sq6 === sq7 && sq6 === sq8 && sq6 === "O" || //third row
      sq0 === sq3 && sq0 === sq6 && sq0 === "O" || //first column
      sq1 === sq4 && sq1 === sq7 && sq1 === "O" || //second column
      sq2 === sq5 && sq2 === sq8 && sq2 === "O" || //third column
      sq0 === sq4 && sq0 === sq8 && sq0 === "O" || //diagonal 1
      sq2 === sq4 && sq2 === sq6 && sq2 === "O") //diagonal 2
    {
      oWin = true;
    } else { // CHECKS FOR TIE GAME IF ALL CELLS ARE FILLED
      if (((sq0 === "X") || (sq0 === "O")) && ((sq3 === "X") ||
          (sq3 === "O")) && ((sq6 === "X") || (sq6 === "O")) &&
        ((sq1 === "X") || (sq1 === "O")) && ((sq4 === "X") ||
          (sq4 === "O")) && ((sq7 === "X") || (sq7 === "O")) &&
        ((sq2 === "X") || (sq2 === "O")) && ((sq5 === "X") ||
          (sq5 === "O")) && ((sq8 === "X") || (sq8 === "O"))) {
      }
    }
  }
}

function winAlert() {
    if (xWin === true) {
        alert("X Wins!");
    } else {
        if (oWin === true) {
            alert("O Wins!");
        } else {
          alert("Stalemate!");
        }
    }
}

$(document).ready(function() {
  console.log("ready!");
});

$("td").on("click", function() {
  if ($("td").text() === true) {
    $(event.currentTarget).off("click");
  }
});

$('#board').on("click", function() {
  getBox();
  whoWins();
  winAlert();
});

$('.play').on("click", function() {
  $("td").text(" ");
});

module.exports = true;
