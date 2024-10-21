export default function () {
    const tabSection = document.querySelector('.js-tabs-funcs');

    if(!tabSection) return;

    const tabBtns = tabSection.querySelectorAll('.js-tabs-funcs-tag');
    const tabContents = tabSection.querySelectorAll('.js-tabs-funcs-content');

    tabBtns.forEach(item => {
        item.addEventListener('click', () => {
            tabBtns.forEach(item2 => {
                item2.classList.remove('active');
            })
            tabContents.forEach(item3 => {
                item3.classList.remove('active');
            })

            item.classList.add('active');
            const tabBtnAtt = item.getAttribute('data-tab');
            tabContents.forEach(elem => {
                if(elem.getAttribute('data-content-tab') === tabBtnAtt) {
                    elem.classList.add('active');
                }
            });
        })
    });




    if(window.matchMedia('(max-width: 1024px)').matches) {
        const contain = tabSection.querySelector('.js-tabs-funcs-contain');
        const btn = tabSection.querySelector('.js-tabs-funcs-btn');
        const btnText = tabSection.querySelector('.js-tabs-funcs-btn-text');

        if(!btn) return;

        btn.addEventListener('click', function() {
            contain.classList.toggle('active');
        });

        tabBtns.forEach(item => {
            item.addEventListener('click', function() {
                btnText.innerHTML = item.innerHTML;
                contain.classList.remove('active');
            });
        });

        window.addEventListener('click', function(e) {
            if(!e.target.closest('.js-tabs-funcs-contain')) {
                contain.classList.remove('active');
            }
        })
    }
}
