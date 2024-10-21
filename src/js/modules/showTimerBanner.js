import gsap from 'gsap';
import {
    ScrollTrigger
  } from 'gsap/dist/ScrollTrigger';

export default function () {
  const timerBanner = document.querySelector('.timer-banner');
  const conferencesIntro = document.querySelector('.conferences-intro');

  if(!timerBanner) return;
  if(!conferencesIntro) return;

  const btnClose = timerBanner.querySelector('.timer-banner__btn-close');
  const btnOpen = document.querySelector('.header__bnt-open-banner');

  gsap.registerPlugin(ScrollTrigger);

  let anim = null;

  anim = gsap.to('.timer-banner', {
    height: 'auto',
    duration: 1,
    scrollTrigger: {
      trigger: '.conferences-intro',
      start: 'bottom 0px',
      end: 'bottom 0px',
      scrub: 1,
    }
  })

  btnClose.addEventListener('click', () => {
    if(anim) {
      anim.kill();
    }
    gsap.to('.timer-banner', {
      height: '0px',
      duration: 1,
    });
    gsap.to('.header__bnt-open-banner',  {
      display: 'flex'
    });
  });

  btnOpen.addEventListener('click', () => {

    gsap.to(timerBanner, {
      height: 'auto',
      duration: 1,
    })

    gsap.to('.header__bnt-open-banner',  {
      display: 'none'
    });
  })

}
