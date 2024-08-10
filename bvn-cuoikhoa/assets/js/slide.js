$(document).ready(function(){
    $('.banner-thuong-hieu').owlCarousel({
        loop:true,
        margin:44,
        nav:false,
        autoplay: true ,
        dots: false, 
        autoplayTimeout: 3000, 
        autoplaySpeed: 3000,
        slideTransition:'linear',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.san-pham-ban-chay').owlCarousel({
        loop:false,
        margin:70,
        nav:true,
        dots: false ,
        // autoplay: true ,
        // autoplayTimeout: 2000 ,
        // autoplaySpeed: 2000, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2 
            },
            1000:{
                items:4
            }
        }
    }) ;
});      