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

let date = new Date('Apr 29 2022 00:00:00');

function counts() {
    let now = new Date();
    gap =  date - now

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60 ) % 24;
    let minutes = Math.floor(gap / 1000 / 60 ) % 60;
    let seconds = Math.floor(gap / 1000 ) % 60;

    if(gap < 0) {
        days = days + 7;
        hours = hours + 24;
        minutes = minutes + 60;
        seconds = seconds + 60;
    }

    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}
counts();

setInterval(counts, 1000);

var menuButton = $('.menu__button');
  menuButton.on('click', function () {
    $('.header__nav').toggleClass('header__nav--visible');
    $('.header').toggleClass('header--menu');
    $('.header__wrap').toggleClass('header__wrap--menu');
    $('.header__nav').toggleClass('header__nav--menu');
  });
