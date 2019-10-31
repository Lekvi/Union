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
        slidesToShow: 4,
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
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
    if ($(window).width() < 770 ) {
        $('.contest_slider-mobile').slick({
            prevArrow:$('.contest_arrow_left'),
            nextArrow:$('.contest_arrow_right'),
            infinite: false,
            speed: 300,
            
        })
        console.log('work')
    }
        $('.partners_slider').slick({
            prevArrow:$('.partners_arrow_left'),
            nextArrow:$('.partners_arrow_right'),
            infinite: false,
            speed: 300,
            slidesToShow: 5,
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
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        })
    



    
    
});