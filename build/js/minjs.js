!function(){"use strict";for(var s=document.querySelectorAll(".nav-open"),e=document.querySelector("#nav"),i=s.length-1;0<=i;i--){var l=s[i];l.addEventListener("click",function(s){s.preventDefault(),e.classList.toggle("nav-hide"),!0===this.classList.contains("is-active")?this.classList.remove("is-active"):this.classList.add("is-active")})}}(),$(".nav-head").click(function(s){s.preventDefault(),$(".head__lists").toggleClass("head__hide"),$(".head__lists").css({transition:"2s"})}),$("#buyup__open").click(function(s){s.preventDefault(),$(".buyup__min").css({display:"none"}),$(".buyup__all").css({display:"inline-block"}),$("#buyup__open").toggleClass("buyup__button"),$("#buyup__close").toggleClass("buyup__button")}),$("#buyup__close").click(function(s){s.preventDefault(),$(".buyup__min").css({display:"inline-block"}),$(".buyup__all").css({display:"none"}),$("#buyup__open").toggleClass("buyup__button"),$("#buyup__close").toggleClass("buyup__button")}),$("#profit-open").click(function(s){s.preventDefault(),$(".profit__min").css({display:"none"}),$(".profit__all").css({display:"inline-block"}),$("#profit-open").toggleClass("buyup__button"),$("#profit-close").toggleClass("buyup__button")}),$("#profit-close").click(function(s){s.preventDefault(),$(".profit__min").css({display:"inline-block"}),$(".profit__all").css({display:"none"}),$("#profit-open").toggleClass("buyup__button"),$("#profit-close").toggleClass("buyup__button")}),$("#sell__open").click(function(s){s.preventDefault(),$(".sell__min").css({display:"none"}),$(".sell__all").css({display:"block"}),$("#sell__open").toggleClass("buyup__button"),$("#sell__close").toggleClass("buyup__button")}),$("#sell__close").click(function(s){s.preventDefault(),$(".sell__min").css({display:"block"}),$(".sell__all").css({display:"none"}),$("#sell__open").toggleClass("buyup__button"),$("#sell__close").toggleClass("buyup__button")}),$("#open1").click(function(s){s.preventDefault(),$(this).toggleClass("map-site__item--active"),$("#close1").toggleClass("map-site__lists--mobile"),$("map-site__lists").not("#close1").toggleClass("map-site__lists--mobile")}),$("#open2").click(function(s){s.preventDefault(),$(this).toggleClass("map-site__item--active"),$("#close2").toggleClass("map-site__lists--mobile"),$("map-site__lists").not("#close2").toggleClass("map-site__lists--mobile")}),$("#open3").click(function(s){s.preventDefault(),$(this).toggleClass("map-site__item--active"),$("#close3").toggleClass("map-site__lists--mobile"),$("map-site__lists").not("#close3").toggleClass("map-site__lists--mobile")}),$("#open4").click(function(s){s.preventDefault(),$(this).toggleClass("map-site__item--active"),$("#close4").toggleClass("map-site__lists--mobile"),$("map-site__lists").not("#close4").toggleClass("map-site__lists--mobile")}),$(window).on("load resize",function(){$(window).width()<813?$("#slider:not(.slick-initialized)").slick({infinite:!0,speed:300,slidesToShow:1}):$("#slider.slick-initialized").slick("unslick")}),$(window).on("load resize",function(){$(window).width()<813?$(".advantage__lists:not(.slick-initialized)").slick({infinite:!0,speed:300,slidesToShow:1}):$(".advantage__lists.slick-initialized").slick("unslick")}),$(".comments__lists").slick({dots:!0,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}}]}),$(".brands").slick({infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,centerMode:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]});