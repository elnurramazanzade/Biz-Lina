$(document).ready(function() {
  // SCROLL BODY SLOWLY
  $("#btn-scrollup").on("click", function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  // HIDE SCROLLUP BUTTON ON TOP
  $(window).scroll(function() {
    if ($(this).scrollTop() < 100) {
      $("#btn-scrollup").css("display", "none");
    } else {
      $("#btn-scrollup").css("display", "block");
    }
  });

  // SEARCH FORM SHOW & HIDE
  $(".search-icon").on("click", function(e) {
    e.preventDefault();
    $(".search-form").slideToggle();
  });

  // OWL CAROUSEL
  $("#carousel-1").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  $("#carousel-2").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
});
