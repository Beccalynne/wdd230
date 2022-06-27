const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const base_url = "https://api.openweathermap.org/data/2.5/weather?";

const city_name = "Fairbanks";
const state_code = "AK";
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



