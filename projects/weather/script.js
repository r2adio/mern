document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeather = document.getElementById("getWeather");
  const weatherInfo = document.getElementById("weather-info");
  const nameDisplay = document.getElementById("city-name");
  const tempDsiplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "5edd98311ea918f1e21e7cb69690bd27"; //store in env variables

  //to use await, a fxn must be async
  getWeather.addEventListener("click", async () => {
    cityInput.value.trim();
    if (!city) return; //in js, empty strings considered as false value

    //server may throw an error, so try to wrap in trycatch
    try {
      //database is always in another continent
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
  }

  function displayWeatherData(weatherData) {}

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.reomve("hidden");
  }
});
