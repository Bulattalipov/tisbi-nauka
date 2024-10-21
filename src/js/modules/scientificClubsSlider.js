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
    const activeGrantSliders = document.querySelectorAll('.scientific-clubs__content-slider');

    if(!activeGrantSliders) return;

    activeGrantSliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 10,
            effect: 'fade',
            allowTouchMove: true,
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,
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