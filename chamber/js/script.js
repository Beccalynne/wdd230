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


// Lasy Loading

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 3,
    rootMargin: "0px 0px 50px 50px"
}

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
  