import Swiper, {
    Navigation,
    EffectFade,
    Autoplay,
    Pagination,
    HashNavigation,
    Grid,
    FreeMode
  } from "swiper/swiper-bundle";
  
  Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);
  
  export default function infinitySlider() {
  
    const infinitySlider = Array.from(document.querySelectorAll('.js-infinity-slider'));
  
    infinitySlider.forEach(slider => {
  
      if (!slider) return;

      let loop = true;

      const arroySlide = slider.querySelectorAll('.swiper-slide');
      loop = arroySlide.length <= 4 ? false : true;

      if(window.matchMedia('(max-width: 1560px)').matches) {
        const arroySlide = slider.querySelectorAll('.swiper-slide');
        loop = arroySlide.length <= 3 ? false : true;
      }

      if(window.matchMedia('(max-width: 1050px)').matches) {
        const arroySlide = slider.querySelectorAll('.swiper-slide');
        loop = arroySlide.length <= 2 ? false : true;
      }

      if(window.matchMedia('(max-width: 700px)').matches) {
        const arroySlide = slider.querySelectorAll('.swiper-slide');
        loop = arroySlide.length <= 1 ? false : true;
      }

  
      const swiper = new Swiper(slider, {
        slidesPerView: "auto",
        speed: 6000,
        loop: loop,
        loopAdditionalSlides: 10,
        loopSlides: 20,
        loopedSlidesLimit: false,
        allowTouchMove: true,
        spaceBetween: 24,
        autoplay: true,
        breakpoints: {
          768: {
            spaceBetween: 24,
          },
        }
      });
    });
  }