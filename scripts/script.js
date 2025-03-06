const API_KEY = "1b40634a79db4734baf203617210410";

const button = document.querySelector('button');
const input = document.querySelector('input');
const weatherDataDiv = document.querySelector('.weather-info');

let enteredCity = 'Tbilisi'
getWeatherData()

button.addEventListener('click', (e) => {
  enteredCity = input.value;
  input.value = '';
  getWeatherData();
})

async function getWeatherData() {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${enteredCity}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    let country = json.location.country;
    let city = json.location.name;
    let temp = json.current.temp_c;
    let humidity = json.current.humidity;
    let condition = json.current.condition.text;
    let windSpeed = json.current.wind_kph;
    let imageUrl = json.current.condition.icon;
    weatherDataDiv.innerHTML = `
    <h3>Country: ${country}, ${city}</h3>
    <img src=${imageUrl} alt="">
    <h2>${temp} °C</h2>
    <p>Humidity: ${humidity}%</p>
    <p>Condition: ${condition}</p>
    <p>Wind: ${windSpeed} km/h</p>
    `
  } catch (error) {
    console.error(error.message);
  }
}
