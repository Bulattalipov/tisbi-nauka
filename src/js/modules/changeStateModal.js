export default function (name){
    const array = document.querySelectorAll('.form-registration__wrapper');

    array.forEach(item => {
        item.style.display = 'none';
    })

    array.forEach(item => {
      if(item.closest('.modal__container').classList.contains('modal-open')) {
        if(item.className.split(' ').indexOf('form-registration--' + name) === 1) {
            item.style.display = 'block';
        }
      }
    })
}


// window.tisbiNaukaApi.changeStateModal('default');
// window.tisbiNaukaApi.changeStateModal('success');
// window.tisbiNaukaApi.changeStateModal('error');
