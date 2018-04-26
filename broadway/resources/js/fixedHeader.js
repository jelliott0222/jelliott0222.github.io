$(document).ready(function() {
  var heightFixed = $('header').height() / 2;

  $(window).scroll(function() {
    if($(window).scrollTop() >= heightFixed) {
      $('.logo-nav-bar').addClass('fixed');
    } else {
      $('.logo-nav-bar').removeClass('fixed');
    }
  });
});
