const APIKEY = '0e143cca4c7a4b0c5ff4da277878d6dc';
let city = "Paris"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;



function fetchWeather() {
  fetch('conf.json')
    .then((response) => response.json())
    .then((data) => {
      const city = data.city;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`;



      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          document.querySelector('#city').innerHTML = data.name;
          document.querySelector('#temp').innerHTML = data.main.temp + '°C';
          document.querySelector('#humidity').innerHTML = data.main.humidity + '%';

          const weatherIcon = document.querySelector('#weather-icon');
          const iconCode = data.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
          weatherIcon.src = iconUrl;
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
}

// Appel initial de la fonction fetchWeather
fetchWeather();

// Rafraîchissement toutes les heures (3600000 millisecondes)
setInterval(fetchWeather, 3600000);