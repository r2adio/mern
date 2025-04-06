document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeather = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const nameDisplay = document.getElementById("city-name");
  const tempDsiplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "5edd98311ea918f1e21e7cb69690bd27"; //store in env variables

  //to use await, a fxn must be async
  getWeather.addEventListener("click", async () => {
    const city = cityInput.value.trim();
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

  //this fxn only returns data, doesnt automatically calls displayWeatherData()
  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE: ", response);

    if (!response.ok) throw new Error("City not found.");
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    console.log(data);

    const { name, main, weather } = data;
    nameDisplay.textContent = name;
    //unlocks the display
    weatherInfo.classList.remove("hidden");
    tempDsiplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Description : ${weather[0].description}`;
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
  }
});
