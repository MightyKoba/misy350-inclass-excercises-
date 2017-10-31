

function main () {
// all code should be in here

$('#google').html('Goooogle');
let links = $('.my-link');
//document.getElementById('google').innerHTML = "Google";
// let links =  document.getElementByClasssName('my-link');
links[0].innerHTML = "Twitter";
links[0].href = "http://www.twitter.com";
links[1].innerHTML = "LinkedIn";
links[1].href = "http://www.linkedin.com";
links[1].style.color = "red";

// button click event
$('#heading-button').click(function() {
  $('h1').css('color', 'red');
  $('.my-link').hide();
  $('#toogle-button').click(function () {
    $('.my-link').hide();
  })
});

// hide and show main text

$('#main-text').hide();
$('#main-text').fadeIn(5000);

// hide projects
$('.projects').hide();

// show projects
$('.project-buttons').click(function () {
  $('.projects').slideToggle(5000);
});
}

$(document).ready(main);
