document.querySelector("#lastmod").textContent = document.lastModified;
// try{
//     let options = {
//         year: "numeric"
//     }
//     document.getElementById("#currentyear").textContent = new Date().toLocaleDateString("en-US", options);
// } catch (e) {
//     alert("Error with code in browser");
// }
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

/* 🌮 *****************************************************
Arrow Functions - es6 syntactically compact alternative to a regular function expression
see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
or
https://www.w3schools.com/js/js_arrow_function.asp
******************************************************/

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) {mainnav.classList.remove('responsive')}};



// Last Modified

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