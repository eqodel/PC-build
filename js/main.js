const modalWindow = document.querySelector('.modal');
const buttonModals = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');
const html = document.querySelector('html');
const header = document.querySelector('.header');

buttonModals.forEach((item) =>{
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
        html.classList.add('nopadding');
        header.classList.add('nopadding-header');
    });
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
        html.classList.remove('nopadding');
        header.classList.remove('nopadding-header');
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
    html.classList.remove('nopadding');
    header.classList.remove('nopadding-header');
});