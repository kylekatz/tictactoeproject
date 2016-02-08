'use strict';

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

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

// SIGN IN
$('#sign-in').on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
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

$('#sign-out').submit(function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  if (!myApp.user) {
    console.error('Wrong!');
    return;
  }
  $.ajax({
      url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    })
    .done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
});

$('#change-password').submit(function(e) {
    e.preventDefault();
    if (!myApp.user) {
      alert('Wrong password!');
      return;
    }
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseURL + '/change-password/' + myApp.user.id,
      // url: 'http://httpbin.org/post',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
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

$(document).ready(() => {});

module.exports = true;
