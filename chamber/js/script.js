// Last Modified
document.querySelector("#lastmod").textContent = document.lastModified;
document.querySelector("#year").textContent = new Date().getFullYear();

let lastVisitDate;
const now = Date.now();

if (window.localStorage.getItem('last-visit-date'))
{
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else{
    lastVisitDate = now;
}

window.localStorage.setItem('last-visit-date', now);

const secondsSinceLastVisit = Math.floor((now - lastVisitDate) / 1000);
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400);
console.log(daysSinceLastVisit);

// document.querySelector('#seconds-ago').textContent = secondsSinceLastVisit;
document.querySelector('#days-ago').textContent = daysSinceLastVisit


// hamburger
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('responsive')}, false);


