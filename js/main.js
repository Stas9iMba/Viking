$(function () {
  // $('[data-fancybox]').fancybox({
  //   youtube: {
  //     controls: 0,
  //     showinfo: 0,
  //   },
  // });

  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow:
      '<button class="slick-btn slick-prev"><img src="images/icon/arrow-left.png" alt="pre"> </button>',
    nextArrow:
      '<button class="slick-btn slick-next"><img src="images/icon/arrow-right.png" alt="next"> </button>',
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false,
  });

  // $('.carousel__inner').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   dots: true,
  //   responsive: [
  //     {
  //       breakpoint: 841,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 601,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });

  //   $('.menu__burger').on('click', function () {
  //     $('.menu__list').toggleClass('menu__list--active');
  //   });
});
