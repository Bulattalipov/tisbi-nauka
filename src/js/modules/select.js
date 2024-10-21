export default () => {
    let selects = document.querySelectorAll('.select')

    if(selects.length === 0) return;
    
    selects.forEach((select,i) =>{
        let head = select.querySelector('.select-header')
        let items = select.querySelectorAll('.select-body__option')

        let fakeTitle = select.querySelector('.select-fake__text')
        let title = select.querySelector('.select-header__title')

        head.addEventListener('click', function(){
            select.classList.toggle('select_closed')
        })

        items.forEach((el) => {
            el.addEventListener('click', function(){
                select.classList.add('select_closed')
                fakeTitle.innerHTML = el.textContent
                title.innerHTML = el.textContent
            })           
        })
    })
}