export default function () {
  const listContainer = document.querySelector('.mysticism__awards');

  if (!listContainer) return;

  let openItemsNumber = parseInt(listContainer.querySelector('.mysticism__awards-list').attributes['data-open-items'].value);
  const arroyItems = listContainer.querySelectorAll('.mysticism__awards-item');
  const btnOpen = listContainer.querySelector('.mysticism__awards-btn-open');
  const btnClose = listContainer.querySelector('.mysticism__awards-btn-close');

  let newArray = [];

  arroyItems.forEach((item, index) => {
    if (index < openItemsNumber) {
      item.style.display = 'flex'
    } else {
      newArray.push(item);
    }
  });

  if (arroyItems.length > openItemsNumber) {
    btnOpen.style.display = 'flex';
  }

  btnOpen.addEventListener('click', function () {
    newArray.forEach(item => {
      item.style.display = 'flex'
    })

    this.style.display = 'none';
    btnClose.style.display = 'flex';
  });

  btnClose.addEventListener('click', function () {
    newArray.forEach(item => {
      item.style.display = 'none';
    })

    this.style.display = 'none';
    btnOpen.style.display = 'flex';
  });
}
