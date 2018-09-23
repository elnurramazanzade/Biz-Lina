$(document).ready(function() {
  // SCROLL TO TOP
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
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      }
    }
  });
  // FORM
  $("#send").on("click", function(e) {
    e.preventDefault();
    var mesDiv = $("#message");
    $(mesDiv).slideUp("slow");
    setTimeout(function() {
      mesDiv.children().remove();

      var message = $(`<div></div>`);
      if ($("#name").val() == "") {
        var span = $(`<span></span>`).text(`Please enter your name.`);
        message.append(span);
        mesDiv.append(message);
        $(mesDiv).slideToggle("slow");
      } else if ($("#email").val() == "") {
        var span = $(`<span></span>`).text(`Please enter valid email address.`);
        message.append(span);
        mesDiv.append(message);
        $(mesDiv).slideToggle("slow");
      } else if ($("#text").val() == "") {
        var span = $(`<span></span>`).text(`Please enter your message.`);
        message.append(span);
        mesDiv.append(message);
        $(mesDiv).slideToggle("slow");
      } else {
        var name = $("#name").val();
        var h2 = $(`<h2></h2>`).text(`Email Sent Successfully.`);
        var p = $(`<p></p>`).text(
          `Thank you ${name}, your message has been submitted to us.`
        );
        message.addClass("success");
        message.append(h2);
        message.append(p);
        mesDiv.append(message);
        $(mesDiv).slideToggle("slow");
        $("#contact")
          .find("form")
          .slideToggle(1000);
      }
    }, 1000);
  });
  // WORKS
  $("#works").isotope({
    itemSelector: ".work-item",
    layoutMode: "fitRows"
  });
  $("#filter li").on("click", function() {
    $(this)
      .siblings()
      .removeClass("active");
    $(this).addClass("active");
    var data = $(this).attr("data-filter");
    $("#works").isotope({ filter: data });
  });
  // POPUP
  $("#works").magnificPopup({
    delegate: ".open",
    type: "image",
    autoFocusLast: false,
    gallery: {
      enabled: true
    },
    mainClass: "mfp-with-zoom",
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function(openerElement) {
        return openerElement.is("i") ? openerElement : openerElement.find("i");
      }
    }
  });
});
