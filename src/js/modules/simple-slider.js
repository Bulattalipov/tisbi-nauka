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
  const simpleSlider = document.querySelectorAll('.simple-slider');

  if (!simpleSlider) return;

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


    // относится к own-scientific-publications__item-release-slider

    const currentSlider = slider.classList.contains('own-scientific-publications__item-release-slider');

    if (!currentSlider) return;

    const parent = slider.closest('.own-scientific-publications__item-release');
    const titleNumber = parent.querySelector('.own-scientific-publications__item-release span');

    const arrayYears = slider.querySelectorAll('.swiper-slide');

    titleNumber.innerHTML = arrayYears[swiper.activeIndex].attributes['data-year'].textContent;

    swiper.on('slideChange', () => {
      titleNumber.innerHTML = arrayYears[swiper.activeIndex].attributes['data-year'].textContent;
    })

  });
}
