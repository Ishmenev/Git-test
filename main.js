window.addEventListener('load', function () {


    let popup = document.querySelector('.modal')
    let feedback = document.querySelector('.header__feedback')
    let close = document.querySelector('.modal__close')

    feedback.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('modal--show')
    })

    close.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.remove('modal--show')
    })

    const email = document.querySelector('.modal__email')
    const phone = document.querySelector('.modal__phone')
    let errorEmail = true
    let errorPhone = true


})

