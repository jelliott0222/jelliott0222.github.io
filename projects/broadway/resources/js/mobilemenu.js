$(function() {
  $(".toggle-menu").click(function() {
    $(this).parent().children('ul').toggleClass('active');
    return false;
  });
});

$(document).ready(function () {
  $('.logo-nav-bar li a').click(function(event) {
    $('.logo-nav-bar ul').toggleClass('active');
  });
});
