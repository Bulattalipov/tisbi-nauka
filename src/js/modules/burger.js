export default () => {
    let body = document.querySelector('body');
    let menuBtn = document.querySelector('.header__burger');
    let mainMenu = document.querySelector('.menu');
    let mainMenuBtns = mainMenu.querySelectorAll(".nav__list-link");
  
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      mainMenu.classList.toggle('active');
      
      if(window.matchMedia('(max-width: 640px)').matches) {
        body.classList.toggle('body--blur');
      }
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