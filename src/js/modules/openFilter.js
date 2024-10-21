export default function () {
  const searchFilter = document.querySelector('.search-filter');
  if(!searchFilter) return;

  const btn = searchFilter.querySelector('.search-filter__btn-filter');
  const box = searchFilter.querySelector('.search-filter__extended');

  btn.addEventListener('click', function(e) {
    e.preventDefault();

    this.classList.toggle('is-open');
    box.classList.toggle('is-open');
  });
}
