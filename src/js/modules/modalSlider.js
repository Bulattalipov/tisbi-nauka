import Swiper, {
  Navigation,
  EffectFade,
  Autoplay,
  Pagination,
  Thumbs,
  FreeMode
} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Thumbs, Pagination, FreeMode]);

export default function () {
  const simpleSlider = document.querySelectorAll('.modal__grant-slider');
  if (!simpleSlider) return;

  const btnsOpenModel = document.querySelectorAll('.winners__slider-item-btn');
  btnsOpenModel.forEach(item => {
    item.addEventListener('click', function() {
      initialization();
    })
  })

  function initialization() {
    simpleSlider.forEach(slider => {
      const swiper = new Swiper(slider, {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        allowTouchMove: true,
        fadeEffect: {
          crossFade: true
        },
        autoHeight: false,
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
}
