import Swiper, {
    Navigation
  } from "swiper/swiper-bundle";
  
  Swiper.use([Navigation]);
  
  export default function() {

    if(window.matchMedia('(max-width: 640px)').matches) {
        const projectsSliders = document.querySelectorAll('.results__slider');
      
        projectsSliders.forEach(slider => {
          if (!slider) return;
      
          const swiper = new Swiper(slider, {
            slidesPerView: 1.13,
            spaceBetween: 24,
            autoHeight: true,
            breakpoints: {
                414: {
                    slidesPerView: 1.3,
                }
              }
          })
        })
    }
  
  }
  