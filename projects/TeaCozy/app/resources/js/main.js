$(function() {
  console.log($('.location-tabs li a'));
  $('.location-tabs li a').click(function() {
    $('.location-tabs li a').removeClass('active');
    $(this).addClass('active');
    var str = $(this).text();
    str = str.replace(/\s/g,'');
    var activeTab = '#' + str;
    $('.location-container').removeClass('active');
    $(activeTab).addClass('active');
    return false;
  });
});
