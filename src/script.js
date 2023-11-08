const bars = document.querySelector('#bars');
const menu = document.querySelector('.menu');
const body = document.querySelector('.body');

document.querySelector("#bars").onclick = () => {
    menu.classList.toggle('max-md:block');
    menu.classList.toggle('max-md:hidden');
    body.classList.toggle('max-md:fixed');
}