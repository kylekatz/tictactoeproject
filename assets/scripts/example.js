'use strict';

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

$(document).ready(() => {
  // SIGN UP
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/sign-up',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

// SIGN IN
$('#sign-in').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target); // grab FormData
    $.ajax({
      //url: 'http://httpbin.org/post',
      url: myApp.baseUrl + '/sign-in',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

// SIGN OUT
$('#sign-out').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target); // grab FormData
    $.ajax({
      //url: 'http://httpbin.org/post',
      url: myApp.baseUrl + '/sign-out',
      method: 'DELETE',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

$('#change-password').on('submit', function(e) {
   e.preventDefault();
   if (!myApp.user) {
     console.error('Wrong!');
     return;
   }

   var formData = new FormData(e.target);
   $.ajax({
     // url: 'http://httpbin.org/post',
     url: myApp.baseUrl + '/change-password/' + myApp.user.id,
     method: 'PATCH',
     headers: {
       Authorization: 'Token token="bd9ed1e6d6dbaf984252c6eb026b20d1";' + myApp.user.token,
     },
     contentType: false,
     processData: false,
     data: formData,
   }).done(function(data) {
     console.log(data);
   }).fail(function(jqxhr) {
     console.error(jqxhr);
   });
 });

module.exports = true;
