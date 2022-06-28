// Calling current weather
const currentTemp = document.querySelector('#current-temp');
const windspeed = document.querySelector('#windSpeed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const base_url = "https://api.openweathermap.org/data/2.5/weather?";

const city_name = "Pensacola";
const appid = "87a848c7fb26d123784987168d5b8f68";
const units = "imperial";

const url = `${base_url}q=${city_name}&appid=${appid}&units=${units}`;

// You can make a local json file by calling it and then saving the data
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);
  const temperature = data["main"]["temp"];
  // const windSpeed = data.wind.speed;
  // const speed = data.wind.speed;
  currentTemp.textContent = Math.round(temperature);

  const base_image_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  console.log(base_image_url);

  weatherIcon.setAttribute('src', base_image_url);
  weatherIcon.setAttribute('alt', data.weather[0].description);

})


// Windchill
let temp = parseFloat(document.querySelector("#current-temp").textContent);
let windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
let windchill = "";

if (temp <= 50 && s > 3) {
  windchill = windChill(temp, windSpeed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}
// output
document.querySelector("#w").innerHTML = windchill;

function windChill(temp, speed) {
  windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16));
  return Math.round(windChill);
  // (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
}
