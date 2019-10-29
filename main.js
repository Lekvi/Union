$(document).ready(function(){
    $('.slider_main').slick({
        autoplay: false,
        autoplaySpeed: 20000,
        arrow: false,
        dots: true,
        appendDots:$('.slider_navigation_dots'),
        prevArrow:$('.arrow_left'),
        nextArrow:$('.arrow_right')

    });
    
});