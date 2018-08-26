$(function() {
  $(".toggle-menu").click(function() {
    $(this).parent().find('.nav-menu').toggleClass('active');
    return false;
  });
});

$(function() {
  $('.view-more-details').click(function() {
    $(this).parent().find('.class-more-details').toggleClass('active');
    return false;
  });
});

$(function() {
  $('.supplies-close-button').click(function() {
    $(this).parent().toggleClass('active');
    return false;
  });
});
