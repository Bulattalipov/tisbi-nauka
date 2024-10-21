import tippy, {followCursor} from 'tippy.js';

export default function () {
  const block = document.querySelector('.winners');
  if(!block) return;

  const texts = block.querySelectorAll('.winners__slider-item-desc');

  texts.forEach(item => {
    tippy(item, {
      plugins: [followCursor],
      content: item.nextElementSibling,
      followCursor: true,
      placement: 'bottom-start',
      theme: 'material',
    });
  })
}
