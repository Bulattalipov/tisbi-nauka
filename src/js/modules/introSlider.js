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
        const textSwiper = new Swiper(slider.querySelector('.intro__text-slider'), {
        speed: 500,
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
        on: {
            // init: function (swiper) {
            //     swiper.el.classList.remove("loading")
            // },
        }
        });
    
        const imgSlider = new Swiper(slider.querySelector('.intro__img-slider'), {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        on: {
            // init: function (swiper) {
            //     swiper.el.classList.remove("loading")
            // },
        }
        });
    
        textSwiper.controller.control = imgSlider;
        imgSlider.controller.control = textSwiper;
    
    });
}