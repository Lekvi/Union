$(document).ready(function(){
    $('.slider_main').slick({
        autoplay: true,
        autoplaySpeed: 20000,
        arrow: false,
        dots: true,
        appendDots:$('.slider_navigation_dots'),
        prevArrow:$('.arrow_left'),
        nextArrow:$('.arrow_right')

    });
    $('.news_slider').slick({
        prevArrow:$('.news_arrow_left'),
        nextArrow:$('.news_arrow_right'),
        infinite: false,
        speed: 300,
        
    })
    $('.partners_slider').slick({
        prevArrow:$('.partners_arrow_left'),
        nextArrow:$('.partners_arrow_right'),
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        
    })
    
});