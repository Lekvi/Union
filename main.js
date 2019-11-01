$(document).ready(function () {

  $('.slider_main').slick({
    autoplay: true,
    autoplaySpeed: 20000,
    arrow: false,
    dots: true,

    appendDots: $('.slider_navigation_dots'),
    prevArrow: $('.arrow_left'),
    nextArrow: $('.arrow_right')
  })
  $('.news_slider').slick({
    prevArrow: $('.news_arrow_left'),
    nextArrow: $('.news_arrow_right'),
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  })

  $('.contest_slider').slick({
    prevArrow: $('.contest_arrow_left'),
    nextArrow: $('.contest_arrow_right'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
  })

  // Функция responsive для проверки размера экрана и включения/отключения слайдера

  function responsive() {
    if ($(window).innerWidth() <= 770) {
      $('.contest_slider').slick({
        prevArrow: $('.contest_arrow_left'),
        nextArrow: $('.contest_arrow_right'),
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      })

    } else {
      $('.contest_slider').slick("unslick");

    }
  }
  $('.partners_slider').slick({
    prevArrow: $('.partners_arrow_left'),
    nextArrow: $('.partners_arrow_right'),
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,

        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })


  $(window).resize(function () {
    responsive()
  });
});