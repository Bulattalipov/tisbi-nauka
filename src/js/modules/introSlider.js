import Swiper, {
    Navigation,
    EffectFade,
    Autoplay,
    Pagination,
    Thumbs,
    FreeMode
  } from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Thumbs, Pagination, FreeMode]);

export default function() {
    const textSliders = document.querySelectorAll('.intro');

    if(!textSliders) return;

    textSliders.forEach(slider => {
        const textSliderOne = slider.querySelector('.intro__text-slider');
        const textSliderOneItems = slider.querySelectorAll('.intro__img-slider-item');

        if(textSliderOneItems.length > 1) {
          textSliderOne.classList.add('intro__text-slider--navigation');
          textSliderOne.querySelector('.swiper-nav').style.display = 'block';

          const textSwiper = new Swiper(textSliderOne, {
          speed: 1000,
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          effect: 'fade',
          fadeEffect: {
              crossFade: true
          },
          // thumbs: {
          //     swiper: imgSlider,
          // },
          touchMove: false,
          simulateTouch: false,
          noSwiping: false,
          autoHeight: true,
          autoplay: {
              disableOnInteraction: false,
              delay: 3000
          },
          breakpoints: {
              768: {
              slidesPerView: 1,
              }
          },
          navigation: {
              nextEl: slider.querySelector('.swiper-nav__nav-next'),
              prevEl: slider.querySelector('.swiper-nav__nav-prev'),
          },
          pagination: {
              el: slider.querySelector('.swiper-nav__pagination'),
              clickable: true,
          },
          });

          const imgSlider = new Swiper(slider.querySelector('.intro__img-slider'), {
          speed: 1000,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          noSwiping: true,
          });

          textSwiper.controller.control = imgSlider;
          imgSlider.controller.control = textSwiper;
        }


    });
}
