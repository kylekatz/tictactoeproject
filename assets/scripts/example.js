'use strict';

$("td").on("click", function() {
  $(event.currentTarget).off('click');
  $(event.currentTarget).text("X");
  let inputArray = [];
  inputArray.push(event.currentTarget);
  console.log(inputArray);
});

function setMessage(msg) {
let wordsHere = document.getElementsByClassName("message");
console.log(msg);
}

function startGame() {
    document.turn = "X";
    }

$( document ).ready(function() {
    console.log( "ready!" );
    startGame();
    setMessage(document.turn + " starts.");
  });

module.exports = true;
