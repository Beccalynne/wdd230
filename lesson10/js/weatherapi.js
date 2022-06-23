// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

api.openweathermap.org/data/2.5/forecast?id=524901&appid={87a848c7fb26d12378498716d5b8f68};

const url = "...";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
  });

