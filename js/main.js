$(document).ready(function () {
    $('.fullwidthbanner-container ').owlCarousel({
        autoplay:false,
        autoplaySpeed: 1000,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        loop: true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
})