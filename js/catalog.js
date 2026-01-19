let block_catalog = document.querySelectorAll('.catalog_all')
let btns = document.querySelectorAll('.catalog_btns a')


btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        btns.forEach(elem => {
            elem.classList.remove('catalog_btn_active')
            elem.classList.add('catalog_btn_n_active')
        })

        item.classList.add('catalog_btn_active')
        


        block_catalog.forEach(item => {
            item.style.display = 'none'
        })

        block_catalog[index].style.display = 'block'

    })
})