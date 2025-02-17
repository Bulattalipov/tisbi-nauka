export default () => {
    let body = document.querySelector('body');
    let menuBtn = document.querySelector('.header__burger');
    let mainMenu = document.querySelector('.menu');
    // let mainMenuBtns = mainMenu.querySelectorAll(".nav__list-link");
    let scrollPosition = 0;

    menuBtn.addEventListener('click', function () {

      if(window.matchMedia('(max-width: 640px)').matches) {
        if(!menuBtn.classList.contains('active')) {
          scrollPosition = window.scrollY;
          body.classList.add('body--blur');
        } else {
          body.classList.remove('body--blur');
          window.scrollTo(0, scrollPosition);
        }
      }
      menuBtn.classList.toggle('active');
      mainMenu.classList.toggle('active');
    })

    // mainMenuBtns.forEach(item => {
    //   item.addEventListener('click', () => {
    //     menuBtn.classList.toggle('active');
    //     mainMenu.classList.toggle('active');
    //   })
    // })

    window.addEventListener('click', function(e) {
      if(!e.target.closest('.header__burger') && !e.target.closest('.menu')) {
        menuBtn.classList.remove('active');
        mainMenu.classList.remove('active');

        if(window.matchMedia('(max-width: 640px)').matches) {
          body.classList.remove('body--blur');
        }
      }
    });
  }
