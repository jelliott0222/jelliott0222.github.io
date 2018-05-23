$(function() {
  $(".toggle-menu").click(function() {
    $(this).parent().children('nav').toggleClass('active');
    return false;
  });
});
