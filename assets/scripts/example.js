'use strict';

let turnCount = 0;

$(document).ready(function() {
  console.log("ready!");
});

$("td").on("click", function() {
  $(event.currentTarget).text("X");
  console.log($(event.currentTarget).text());
  if (turnCount % 2 === 0) {
    $(this).text('X');
  } else {
    $(this).text('O');
  }
  turnCount++;
  let inputArray = [];
  inputArray.push($(event.currentTarget).text());
  console.log(inputArray);
});

$("td").on("click", function() {
  if ($("td").text() === true) {
    $(event.currentTarget).off("click");
  }
});

$('.play').on("click", function() {
  $("td").text(" ");
});

module.exports = true;
