$(document).ready(function() {
  // Sidebar toggle behavior
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });

  // Sidebar fix behavior
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 10) {
        $('.wrapper').removeClass('active');
    } else {
        $('.wrapper').addClass('active');
    }
  });

  // Collapse panel behavior
  if ($(window).width() <= 768) {
    $('.collapse').collapse();
    }

    // Randomizing photos
    if (Math.random () < 1 / 2) {
        $("#me").attr ("src", "static/img/mim.jpg");
        $("#us").attr ("src", "static/img/gente.jpg");
    } else {
        $("#me").attr ("src", "static/img/eu.jpg");
        $("#us").attr ("src", "static/img/nos.jpg");
    }
});