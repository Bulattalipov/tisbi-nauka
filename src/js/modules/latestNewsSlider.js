import Swiper, {
    Navigation
  } from "swiper/swiper-bundle";
  
  Swiper.use([Navigation]);
  
  export default function() {

    if(window.matchMedia('(max-width: 1100px)').matches) {
        const projectsSliders = document.querySelectorAll('.latest-news__slider');
      
        projectsSliders.forEach(slider => {
          if (!slider) return;
      
          const swiper = new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 16,
            autoHeight: false,
            breakpoints: {
                640: {
                    slidesPerView: 2.6,
                    spaceBetween: 24,
                },
                414: {
                    slidesPerView: 1.3,
                    spaceBetween: 24,
                }
              }
          })
        })
    }
  
  }
  