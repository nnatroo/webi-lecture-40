const button = document.querySelector('button');
const input = document.querySelector('input');
const weatherDataDiv = document.querySelector('.weather-info');

let enteredCity = ''

button.addEventListener('click', (e) => {
  console.log('clicked');
  console.log(input.value);
  enteredCity = input.value;
  getWeatherData();
})

async function getWeatherData() {
  const url = "http://api.weatherapi.com/v1/current.json?key=1b40634a79db4734baf203617210410&q=Tbilisi";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
