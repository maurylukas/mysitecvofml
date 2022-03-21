$(document).ready(function() {
    // Randomizing photos
    if (Math.random () < 1 / 2) {
        $("#me").attr ("src", "static/img/mim.jpg");
        $("#us").attr ("src", "static/img/gente.jpg");
    } else {
        $("#me").attr ("src", "static/img/eu.jpg");
        $("#us").attr ("src", "static/img/nos.jpg");
    }

    // Sidebar fix behavior
    function scrolling () {
        if ($(window).scrollTop() >= 5) {
            $('.wrapper').removeClass('active');
        } else {
            $('.wrapper').addClass('active');
        }
    }
    scrolling ();
  $(window).on('scroll', scrolling);
  $(document.body).on('touchmove', scrolling);

  // Sidebar toggle behavior
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
  });
  $(".verify").on("click", function () {
    if ($(window).width() <= 768) {
        $('#sidebar, #content').toggleClass('active');
    }
  });

    // Collapse panel behavior
    if ($(window).width() <= 768) {
        $('.collapse').collapse();
    }

    // Animating to top
  $('.back2top').on('click', function() {
    $('html, body').animate({scrollTop : 0},800);
  });
});