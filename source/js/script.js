(function() {
    "use strict";
    var toggles = document.querySelectorAll('.nav-open');
    var open = document.querySelector('#nav');
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener("click", function(e) {
        e.preventDefault();
        open.classList.toggle('nav-hide');
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
      });
    }
  })();

  $('.nav-head').click(function(e) {
    e.preventDefault();
    $('.head__lists').toggleClass('head__hide');
    $('.head__lists').css({'transition': '2s'});
  });

  $('#buyup__open').click(function(e) {
    e.preventDefault();
    $('.buyup__min').css({'display': 'none'});
    $('.buyup__all').css({'display': 'inline-block'});
    $('#buyup__open').toggleClass('buyup__button');
    $('#buyup__close').toggleClass('buyup__button');
  });

  $('#buyup__close').click(function(e) {
    e.preventDefault();
    $('.buyup__min').css({'display': 'inline-block'});
    $('.buyup__all').css({'display': 'none'});
    $('#buyup__open').toggleClass('buyup__button');
    $('#buyup__close').toggleClass('buyup__button');
  });

  $('#profit-open').click(function(e) {
    e.preventDefault();
    $('.profit__min').css({'display': 'none'});
    $('.profit__all').css({'display': 'inline-block'});
    $('#profit-open').toggleClass('buyup__button');
    $('#profit-close').toggleClass('buyup__button');
  });

  $('#profit-close').click(function(e) {
    e.preventDefault();
    $('.profit__min').css({'display': 'inline-block'});
    $('.profit__all').css({'display': 'none'});
    $('#profit-open').toggleClass('buyup__button');
    $('#profit-close').toggleClass('buyup__button');
  });

  $('#sell__open').click(function(e) {
    e.preventDefault();
    $('.sell__min').css({'display': 'none'});
    $('.sell__all').css({'display': 'block'});
    $('#sell__open').toggleClass('buyup__button');
    $('#sell__close').toggleClass('buyup__button');
  });

  $('#sell__close').click(function(e) {
    e.preventDefault();
    $('.sell__min').css({'display': 'block'});
    $('.sell__all').css({'display': 'none'});
    $('#sell__open').toggleClass('buyup__button');
    $('#sell__close').toggleClass('buyup__button');
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 813) {

      $('#open1').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('map-site__item--active');
        $('#close1').toggleClass('map-site__lists--mobile');
        $('map-site__lists').not('#close1').toggleClass('map-site__lists--mobile', 'map-site__lists--active');
      });

      $('#open2').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('map-site__item--active');
        $('#close2').toggleClass('map-site__lists--mobile');
        $('map-site__lists').not('#close2').toggleClass('map-site__lists--mobile', 'map-site__lists--active');
      });

      $('#open3').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('map-site__item--active');
        $('#close3').toggleClass('map-site__lists--mobile');
        $('map-site__lists').not('#close3').toggleClass('map-site__lists--mobile', 'map-site__lists--active');
      });

      $('#open4').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('map-site__item--active');
        $('#close4').toggleClass('map-site__lists--mobile');
        $('map-site__lists').not('#close4').toggleClass('map-site__lists--mobile', 'map-site__lists--active');
      });


    }
  });




  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('#slider:not(.slick-initialized)').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });
    } else {
      $("#slider.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('.advantage__lists:not(.slick-initialized)').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
      });
    } else {
      $(".advantage__lists.slick-initialized").slick("unslick");
    }
  });

  $('.comments__lists').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.brands').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
