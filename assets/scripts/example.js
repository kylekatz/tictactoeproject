'use strict';

$("td").on("click", function() {
  console.log("The square was clicked.");
  console.dir(event);
  $(event.currentTarget).off("click");
  $(event.currentTarget).text("X");
  });

  function startGame() {
    document.turn = "X";
    }

$( document ).ready(function() {
    console.log( "ready!" );
    startGame();
  });

module.exports = true;
