import gsap from 'gsap';

export default function () {
  const btn = document.querySelector('.fixed-btn');

  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
      gsap.to(btn, {
        bottom: '3rem',
        duration: 1.1
      })
    } else {
      gsap.to(btn, {
        bottom: '-6rem',
        duration: 1.1
      })
    }
  })

  btn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  })
}
