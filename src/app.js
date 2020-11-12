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
let dayTime = document.querySelector(".today");
console.log(dayTime);
function currentTime() {
    if (hours < 10) 
    {
        hours = `0${hours}`;
    }
    if (minutes < 10)
    {
        minutes = `0${minutes}`
    }
  dayTime.innerHTML = `Last updated on : ${month},${date}<br />${day},${hours}:${minutes}:${seconds}`;
}
currentTime();





//display page weather app

function displayTemp(response) {
    
let apiKey = "5a1da134326be9ff9057540dba860d50";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  document.querySelector("#degree").innerHTML = temp ;
  let head = document.querySelector("h1");
  head.innerHTML = `${city}`;

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
  let head = document.querySelector("h1");
  head.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  degree.innerHTML = temp;

  document.querySelector(
    "#pressure"
  ).innerHTML = `Pressure : ${response.data.main.pressure}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity : ${response.data.main.humidity}%`;
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind : ${response.data.wind.speed}km/h`;
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
  let head = document.querySelector("h1");
  head.innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  degree.innerHTML = temp;

  document.querySelector(
    "#pressure"
  ).innerHTML = `Pressure : ${response.data.main.pressure}`;
  document.querySelector(
    "#humidity"
  ).innerHTML = `Humidity : ${response.data.main.humidity}%`;
  document.querySelector(
    "#wind"
  ).innerHTML = `Wind : ${response.data.wind.speed}km/h`;
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
