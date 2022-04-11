$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  
  $(document).scroll(function () {
    const y = $("html").scrollTop();
  
    y > 300 ? $("nav").addClass("nav-bg-red") : $("nav").removeClass("nav-bg-red");
  });