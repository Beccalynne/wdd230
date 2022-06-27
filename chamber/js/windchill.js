let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {
  return "SUCCESS";
}

const currentTemp = document.querySelector('#t');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const base_url = "https://api.openweathermap.org/data/2.5/weather?";

const city_name = "Pensacola";
const state_code = "FL";
const country_code = "US";
const appid = "87a848c7fb26d123784987168d5b8f68";
const units = "imperial";

const url = `${base_url}?q=${city_name},${state_code},${country_code}&appid=${appid}&units=${units}`;

// let icons = {
//   "light rain" : "images/light-rain.png",
//   "snow" : "images/snow.png"
// }

// You can make a local json file by calling it and then saving the data
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);
  const temperature = data["main"]["temp"];
  currentTemp.textContent = Math.round(temperature);

  const base_image_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  console.log(base_image_url);

  weatherIcon.setAttribute('src', base_image_url);
  weatherIcon.setAttribute('alt'. data.weather[0].description);

})

// Lasy Loading

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
// Options passed to the Intersection Observer
const imgOptions = {
  threshold: 1,
  /* Using -10px for demo purposes, normally use something like 300px so 
     the images load well before the user scrolls to them */
  rootMargin: "0px 0px 500px 0px"
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
