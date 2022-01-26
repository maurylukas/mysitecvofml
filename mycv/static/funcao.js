$(document).ready(function() {
  // Sidebar toggle behavior
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  $('#sidebarCollapse').on('click', function() {
      if ($('.wrapper').hasClass('active')) {
        primeiroid ();
      }
      else //testar a ideia de criar um novo div abaixo do wrapper com um id pra ficar ativo no lugar
      {
        primeiroid ();
      }
  });
  function primeiroid ()
  {
    $('#sidebar, #content').toggleClass('active');
    depoisclasse ();
  }
  function depoisclasse ()
  {
    $('.wrapper').toggleClass('active');
  }
  function primeiroclasse ()
  {
      $('.wrapper').toggleClass('active');
      depoisid ();
  }
  function depoisid ()
  {
    $('#sidebar, #content').toggleClass('active');
  }
});