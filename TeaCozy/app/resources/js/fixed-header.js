$(document).ready(function() {
  var heightFixed = $('header').height() / 2;

  var addFixed = function() {
    if($(window).scrollTop() > 0) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  };

  addFixed();

  $(window).scroll(function() {
    addFixed();
  });
});
