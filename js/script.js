$(document).ready(function() {
  // SCROLL FOR BODY
  // $("#btn-scrollup").click(function(e) {
  //   var linkHref = $(this).attr("href");
  //   $("body,html").animate(
  //     {
  //       scrollTop: $(linkHref).offset().top
  //     },
  //     1000
  //   );
  // });
  // SCROLL FOR NAVBAR
  $(window).scroll(function() {
    if ($(this).scrollTop() < 100) {
      $("#btn-scrollup").css("display", "none");
    } else {
      $("#btn-scrollup").css("display", "block");
    }
  });
  $(".search-icon").click(function(e) {
    e.preventDefault();
    $(".search-form").slideToggle();
  });
});
