export default function () {
    const dropBox = document.querySelector('.js-drop-down-list');

    if(!dropBox) return;

    const btn = dropBox.querySelector('.header__loss-base');
    const list = dropBox.querySelector('.header__loss-list');


    btn.addEventListener('click', function() {
        dropBox.classList.toggle('active');
    });

    window.addEventListener('click', function(e) {
        if(!e.target.closest('.header__loss-base')) {
            dropBox.classList.remove('active');
        }
    });
}
