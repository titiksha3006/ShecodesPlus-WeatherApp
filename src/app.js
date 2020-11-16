
let dayTime = document.querySelector(".today");
console.log(dayTime);
function currentTime() {

  let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();

    if (hours < 10) 
    {
        hours = `0${hours}`;
    }
    if (minutes < 10)
    {
        minutes = `0${minutes}`
    }
  dayTime.innerHTML = `Last updated: ${month},${date}<br />${day},${hours}:${minutes} CET`;
 // return `Last updated: ${month},${date}<br />${day},${hours}:${minutes}`;
}
currentTime();




function formatHours(timestamp)
{

  let now = new Date(timestamp);
  let hours = now.getHours();
let minutes = now.getMinutes();
    if (hours < 10) 
    {
        hours = `0${hours}`;
    }
    if (minutes < 10)
    {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`;
}





//display page weather app

let apiKey = "5a1da134326be9ff9057540dba860d50";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
let icon = document.querySelector("#icon");

function displayTemp(response) {


  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  document.querySelector("#degree").innerHTML = temp ;
  let head = document.querySelector("#city");
  head.innerHTML = `${city}`;
  icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  icon.setAttribute("alt",response.data.weather[0].description);
document.querySelector(
    "#pressure"
  ).innerHTML = `Pressure : ${response.data.main.pressure}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity : ${response.data.main.humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind : ${wind} km/h`;

  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;

  let fahrenheitDegree = (temp * 9) / 5 + 32;
  fahrenheitDegree = Math.round(fahrenheitDegree);
  let cel = Math.round(((fahrenheitDegree - 32) * 5) / 9);
  console.log(fahrenheitDegree);
  console.log(cel);
  function showFahrenheit() {
    degree.innerHTML = fahrenheitDegree;
  }
  fahrenheit.addEventListener("click", showFahrenheit);
  function showCelsius() {
    degree.innerHTML = cel;
  }
  celsius.addEventListener("click", showCelsius);

//dayTime.innerHTML=currentTime(response.data.dt * 1000);

let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiForecastUrl).then(weatherForecast);
  
}

axios.get(apiUrl).then(displayTemp);

// for searching from the form 

let btn = document.querySelector("#signup-form");
let degree = document.querySelector("#degree");
console.log(degree.innerHTML);
console.log(btn);

let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#farenheit");

function showTemp(response) {
  console.log(response.data);
  document.querySelector("#search-input").innerHTML = response.data.name;
  let head = document.querySelector("#city");
  head.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  degree.innerHTML = temp;
icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
icon.setAttribute("alt",response.data.weather[0].description);
  document.querySelector(
    "#pressure"
  ).innerHTML = `Pressure : ${response.data.main.pressure}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity : ${response.data.main.humidity}%`;

   let wind = Math.round(response.data.wind.speed);
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind : ${wind} km/h`;

  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;

  let fahrenheitDegree = (temp * 9) / 5 + 32;
  fahrenheitDegree = Math.round(fahrenheitDegree);
  let cel = Math.round(((fahrenheitDegree - 32) * 5) / 9);
  console.log(fahrenheitDegree);
  console.log(cel);
  function showFahrenheit() {
    degree.innerHTML = fahrenheitDegree;
  }
  fahrenheit.addEventListener("click", showFahrenheit);
  function showCelsius() {
    degree.innerHTML = cel;
  }
  celsius.addEventListener("click", showCelsius);

  //dayTime.innerHTML=currentTime(response.data.dt * 1000);

  let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${response.data.name}&appid=${apiKey}&units=metric`;
axios.get(apiForecastUrl).then(weatherForecast);
}
function showCity(city) {
  let apiKey = "5a1da134326be9ff9057540dba860d50";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
function replace(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);
  //let city = document.querySelector("h1").innerHTML;
  let city = `${searchInput.value}`;
  console.log(city);
  showCity(city);
}
btn.addEventListener("submit", replace);


// for displaying current location 

function displayCurrentLocationTemp(response) {
  document.querySelector("#search-input").innerHTML = response.data.name;
  let head = document.querySelector("#city");
  head.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  degree.innerHTML = temp;
icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
icon.setAttribute("alt",response.data.weather[0].description);
  document.querySelector(
    "#pressure"
  ).innerHTML = `Pressure : ${response.data.main.pressure}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity : ${response.data.main.humidity}%`;

  let wind = Math.round(response.data.wind.speed);
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind : ${wind} km/h`;

  document.querySelector(".description").innerHTML =
    response.data.weather[0].description;

  let fahrenheitDegree = (temp * 9) / 5 + 32;
  fahrenheitDegree = Math.round(fahrenheitDegree);
  let cel = Math.round(((fahrenheitDegree - 32) * 5) / 9);
  console.log(fahrenheitDegree);
  console.log(cel);
  function showFahrenheit() {
    degree.innerHTML = fahrenheitDegree;
  }
  fahrenheit.addEventListener("click", showFahrenheit);
  function showCelsius() {
    degree.innerHTML = cel;
  }
  celsius.addEventListener("click", showCelsius);

  //dayTime.innerHTML=currentTime(response.data.dt * 1000);

 let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${response.data.name}&appid=${apiKey}&units=metric`;
axios.get(apiForecastUrl).then(weatherForecast);
  
}
function searchCurrentLocation(position) {
  let apiKey = "5a1da134326be9ff9057540dba860d50";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentLocationTemp);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
}
let currentLocation = document.querySelector(".currentLocation");
currentLocation.addEventListener("click", getCurrentLocation);


//for weather forecast



//let apiForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

function weatherForecast(response)
{

  
  
  console.log(response.data);
  console.log(response.data.list[0]);


  


  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;

  for ( let index = 0; index < 6 ; index++){

    let forecast = response.data.list[index];

   
  forecastElement.innerHTML += `<div class="col-2 weather-forecast">
                        ${formatHours(forecast.dt * 1000)}<br /><span id="deg1">${Math.round(forecast.main.temp)}</span>°C
                        <br />
                        <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" width="60" />
                    </div>`;

  }
  
}

//axios.get(apiForecastUrl).then(weatherForecast);