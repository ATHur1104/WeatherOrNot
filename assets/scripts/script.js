const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const weatherDiv = document.getElementById('weather-1');
const locationDiv = weatherDiv.querySelector('.location');
const tempFeelDiv = weatherDiv.querySelector('.tempFeel');
const tempDiv = weatherDiv.querySelector('.temp');
const tempLimDiv = weatherDiv.querySelector('.tempLim');
const iconImg = weatherDiv.querySelector('.icon');
const weatherDescDiv = weatherDiv.querySelector('.weatherDesc');
const humidityDiv = weatherDiv.querySelector('.humidity');
const windDiv = weatherDiv.querySelector('.wind');
var clockEl = document.getElementById('clock');
const weather2Div = document.getElementById('weather-2');
const weather3Div = document.getElementById('weather-3');
const weather4Div = document.getElementById('weather-4');
const weather5Div = document.getElementById('weather-5');
const tempLim2Div = weather2Div.querySelector('.tempLim');
const tempLim3Div = weather3Div.querySelector('.tempLim');
const tempLim4Div = weather4Div.querySelector('.tempLim');
const tempLim5Div = weather5Div.querySelector('.tempLim');
const weatherDesc2Div = weather2Div.querySelector('.weatherDesc');
const weatherDesc3Div = weather3Div.querySelector('.weatherDesc');
const weatherDesc4Div = weather4Div.querySelector('.weatherDesc');
const weatherDesc5Div = weather5Div.querySelector('.weatherDesc');
const icon2Img = weather2Div.querySelector('.icon');
const icon3Img = weather3Div.querySelector('.icon');
const icon4Img = weather4Div.querySelector('.icon');
const icon5Img = weather5Div.querySelector('.icon');
const wind2Div = weather2Div.querySelector('.wind');
const wind3Div = weather3Div.querySelector('.wind');
const wind4Div = weather4Div.querySelector('.wind');
const wind5Div = weather5Div.querySelector('.wind');
const humidity2Div = weather2Div.querySelector('.humidity');
const humidity3Div = weather3Div.querySelector('.humidity');
const humidity4Div = weather4Div.querySelector('.humidity');
const humidity5Div = weather5Div.querySelector('.humidity');
const date2 = weather2Div.querySelector('.date');
const date3 = weather3Div.querySelector('.date');
const date4 = weather4Div.querySelector('.date');
const date5 = weather5Div.querySelector('.date');

function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    var dateString = now.toLocaleDateString();
    clockEl.innerHTML = `${dateString} - ${timeString}`;
}

setInterval(updateTime, 1000);

updateTime();

function getWeather(location) {
  var apiKey = '2770f9be9aa3a62e555a7a290d297459';
  var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + location + `&units=imperial&appid=` + apiKey;
  
  fetch(weatherUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
        console.log(data);
      var todayWeather = data.list[0];
      var todayDate = new Date(todayWeather.dt_txt);
      locationDiv.textContent = `Weather in ${data.city.name}`;
      tempFeelDiv.textContent = `Feels Like: ${todayWeather.main.feels_like}°F`;
      tempDiv.textContent = `Temp: ${todayWeather.main.temp}°F`;
      tempLimDiv.textContent = `High/Low: ${todayWeather.main.temp_max}°F/${todayWeather.main.temp_min}°F`;
      humidityDiv.textContent = `Humidty: ${todayWeather.main.humidity}`;
      windDiv.innerHTML = `Wind Degrees: ${todayWeather.wind.deg}° <br>Wind Gust: ${todayWeather.wind.gust} <br>Wind Speed: ${todayWeather.wind.speed}`
      iconImg.src = `https://openweathermap.org/img/w/${todayWeather.weather[0].icon}.png`;
      weatherDescDiv.textContent = todayWeather.weather[0].description;

      var weather2 = data.list[8];
      var weather2Date = new Date(weather2.dt_text);
      date2.textContent = `${weather2.dt_txt.substring(0, 10)}`;
      tempLim2Div.textContent = `High/Low: ${weather2.main.temp_max}°F/${weather2.main.temp_min}°F`;
      icon2Img.src = `https://openweathermap.org/img/w/${weather2.weather[0].icon}.png`;
      weatherDesc2Div.textContent = weather2.weather[0].description;
      humidity2Div.textContent = `Humidity: ${weather2.main.humidity}`;
      wind2Div.innerHTML = `Wind Degrees: ${weather2.wind.deg}° <br>Wind Gust: ${weather2.wind.gust} <br>Wind Speed: ${weather2.wind.speed}`;

      var weather3 = data.list[16];
      var weather3Date = new Date(weather3.dt_text);
      date3.textContent = `${weather3.dt_txt.substring(0, 10)}`;
      tempLim3Div.textContent = `High/Low: ${weather3.main.temp_max}°F/${weather3.main.temp_min}°F`;
      icon3Img.src = `https://openweathermap.org/img/w/${weather3.weather[0].icon}.png`;
      weatherDesc3Div.textContent = weather3.weather[0].description;
      humidity3Div.textContent = `Humidity: ${weather3.main.humidity}`;
      wind3Div.innerHTML = `Wind Degrees: ${weather3.wind.deg}° <br>Wind Gust: ${weather3.wind.gust} <br>Wind Speed: ${weather3.wind.speed}`

      var weather4 = data.list[24];
      var weather4Date = new Date(weather4.dt_text);
      date4.textContent = `${weather4.dt_txt.substring(0, 10)}`;
      tempLim4Div.textContent = `High/Low: ${weather4.main.temp_max}°F/${weather4.main.temp_min}°F`;
      icon4Img.src = `https://openweathermap.org/img/w/${weather4.weather[0].icon}.png`;
      weatherDesc4Div.textContent = weather4.weather[0].description;
      humidity4Div.textContent = `Humidity: ${weather4.main.humidity}`;
      wind4Div.innerHTML = `Wind Degrees: ${weather4.wind.deg}° <br>Wind Gust: ${weather4.wind.gust} <br>Wind Speed: ${weather4.wind.speed}`

      var weather5 = data.list[32];
      var weather5Date = new Date(weather5.dt_text);
      date5.textContent = `${weather5.dt_txt.substring(0, 10)}`;
      tempLim5Div.textContent = `High/Low: ${weather5.main.temp_max}°F/${weather5.main.temp_min}°F`;
      icon5Img.src = `https://openweathermap.org/img/w/${weather5.weather[0].icon}.png`;
      weatherDesc5Div.textContent = weather5.weather[0].description;
      humidity5Div.textContent = `Humidity: ${weather5.main.humidity}`;
      wind5Div.innerHTML = `Wind Degrees: ${weather5.wind.deg}° <br>Wind Gust: ${weather5.wind.gust} <br>Wind Speed: ${weather5.wind.speed}`
    })
}

searchButton.addEventListener('click', () => {
  const location = searchInput.value;
  localStorage.setItem('weatherLocation', location);
  getWeather(location);
});

const savedLocation = localStorage.getItem('weatherLocation');
if (savedLocation) {
  getWeather(savedLocation);
}

