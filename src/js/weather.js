// /////// //
// WEATHER //
// /////// //

async function getWeatherData() {
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const city = 'La Roche-sur-Yon';
  const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

  try {
    const response = await fetch(`${url}?q=${city}&units=metric&APPID=${apiKey}`);
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    return error;
  }
}

async function displayWeatherData() {
  const temp = document.querySelector('temp-value');
  const icons = [...document.querySelector('weather-icon').childNodes];
  const data = await getWeatherData();

  icons.map((i) => {
    return i.getAttribute('src').includes(data.weather[0].main.toLowerCase())
      ? i.setAttribute('state', 'show')
      : i.setAttribute('state', 'hide');
  });

  temp.innerHTML = data.main.temp < 10 ? `0${data.main.temp}°` : `${data.main.temp}°`;
}

export default displayWeatherData;
