// hamburger
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('responsive')}, false);

