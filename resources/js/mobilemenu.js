$(function() {
  $(".toggle-menu").click(function() {
    $(this).parent().children('nav').toggleClass('active');
    $(this).toggleClass('active');
    return false;
  });

  $("nav a").click(function() {
    $(this).parent().toggleClass('active');
    $(".toggle-menu").toggleClass('active');
  });
});
