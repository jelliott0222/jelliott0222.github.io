$(function() {
  $(".toggle-menu").click(function() {
    $(this).parent().children('ul').toggleClass('active');
    return false;
  });
});
