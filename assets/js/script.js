/*
    Author: Code Jungle
    Youtube: https://www.youtube.com/@CodeJungle
    Instagram: https://www.instagram.com/code.jungle/
*/

// window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

// Document Ready
$(document).ready(function() {

    // Typing animation
    new Typed('#type-it', {
        strings: ['Manager', 'Desarrollador', 'Freelancer'],
        typeSpeed: 100,
        loop: true
      });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 2,
        margin:30,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            900:{
                items:2
            },
        }
    });

    // One Page Scroll
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        topOffset: -70           // offste (in px) for fixed top navigation
      });
});