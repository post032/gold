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
    $('.buyup__info').css({'height': 'auto'});
    $('#buyup__open').toggleClass('buyup__button');
    $('#buyup__close').toggleClass('buyup__button');
  });

  $('#buyup__close').click(function(e) {
    e.preventDefault();
    $('.buyup__info').css({'height': '60px'});
    $('#buyup__open').toggleClass('buyup__button');
    $('#buyup__close').toggleClass('buyup__button');
  });

  $('#profit-open').click(function(e) {
    e.preventDefault();
    $('.profit__wrapper').css({'height': 'auto'});
    $('#profit-open').toggleClass('buyup__button');
    $('#profit-close').toggleClass('buyup__button');
  });

  $('#profit-close').click(function(e) {
    e.preventDefault();
    $('.profit__wrapper').css({'height': '58px'});
    $('#profit-open').toggleClass('buyup__button');
    $('#profit-close').toggleClass('buyup__button');
  });

  $('#sell__open').click(function(e) {
    e.preventDefault();
    $('.sell__wrapper').css({'height': 'auto'});
    $('#sell__open').toggleClass('buyup__button');
    $('#sell__close').toggleClass('buyup__button');
  });

  $('#sell-close').click(function(e) {
    e.preventDefault();
    $('.sell__wrapper').css({'height': '58px'});
    $('#sell__open').toggleClass('buyup__button');
    $('#sell__close').toggleClass('buyup__button');
  });

  $('#open1').click(function(e) {
    e.preventDefault();
    $('#close1').toggleClass('map-site__lists--mobile');
    $('map-site__lists').not('#close1').toggleClass('map-site__lists--mobile');
  });

  $('#open2').click(function(e) {
    e.preventDefault();
    $('#close2').toggleClass('map-site__lists--mobile');
    $('map-site__lists').not('#close2').toggleClass('map-site__lists--mobile');
  });

  $('#open3').click(function(e) {
    e.preventDefault();
    $('#close3').toggleClass('map-site__lists--mobile');
    $('map-site__lists').not('#close3').toggleClass('map-site__lists--mobile');
  });

  $('#open4').click(function(e) {
    e.preventDefault();
    $('#close4').toggleClass('map-site__lists--mobile');
    $('map-site__lists').not('#close4').toggleClass('map-site__lists--mobile');
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('#slider:not(.slick-initialized)').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
    } else {
      $("#slider.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('.advantage__lists:not(.slick-initialized)').slick({
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
    } else {
      $(".advantage__lists.slick-initialized").slick("unslick");
    }
  });


  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('.comments__lists:not(.slick-initialized)').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
      });
    } else if ($(window).width() < 2000) {
      $('.comments__lists:not(.slick-initialized)').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3
      });

  }
  });
  $(window).on('load resize', function() {
    if ($(window).width() < 813) {
      $('.brands:not(.slick-initialized)').slick({
        dots: true,
        variableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1

      });
    } else if ($(window).width() > 814 && $(window).width() < 2000) {
      $('.brabds:not(.slick-initialized)').slick({
        dots: true,
        variableWidth: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3
      });

  }
  });
