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
  const winnersSliders = document.querySelectorAll('.winners__slider');

  if(!winnersSliders) return;

  winnersSliders.forEach(slider => {
      const swiper = new Swiper(slider, {
          speed: 500,
          slidesPerView: 1,
          spaceBetween: 24,
          loop: true,
          breakpoints:  {
            640: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 48
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 48
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
  });
}
