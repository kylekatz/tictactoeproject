'use strict';

$("td").on("click", function() {
  console.log("event object:");
  console.dir(event);
  $(event.currentTarget).off('click');
  let inputArray = (event.currentTarget.id);
  console.log(inputArray);
  let i = 0;
  for(inputArray[i] = 0; i < inputArray.length; i++) {
    if(i % 2 === 0) {
      let x = $("<img src='http://i.imgur.com/W9J3BBb.png'>");
      $(event.currentTarget).append(x);
    } else if (i % 2 !== 0) {
      var o = $("<img src='http://i.imgur.com/u3tDsz5.png'>");
      $(event.currentTarget).append(o);
    }
  } 
});

module.exports = true;
