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
    const activeGrantSliders = document.querySelectorAll('.active-grants__slider');

    if(!activeGrantSliders) return;

    activeGrantSliders.forEach(slider => {
        const swiper = new Swiper(slider, {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 10,
            // loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoHeight: true,
            // autoplay: {
            //     disableOnInteraction: false,
            //     delay: 6000
            // },
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