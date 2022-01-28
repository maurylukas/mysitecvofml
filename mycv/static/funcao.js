$(document).ready(function() {
  // Sidebar toggle behavior
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
  $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 10) {
            $('.wrapper').removeClass('active');
        } else {
            $('.wrapper').addClass('active');
        }
  });
  if ($(window).width() <= 768) {
    $('.collapse').collapse();
    }
});