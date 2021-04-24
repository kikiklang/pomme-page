// //////// WEATHER //////// //
const openweatherInner = document.querySelector('pp-openweather-inner')

function displayOpenWeatherData(data) {
  const openWeatherLoader = document.querySelector('pp-openweather-loader-container')
  const openWeatherContainer = document.querySelector('pp-openweather')
  const temperature = document.querySelector('.temp-value')
  const humid = document.querySelector('.humid-value')
  const icons = [...document.querySelectorAll('.pp-openweather-icon')]
  const cityName = document.querySelector('.city-value')
  const sunrise = document.querySelector('.openweather-back-sunrise')
  const sunset = document.querySelector('.openweather-back-sunset')

  icons.forEach(icon => {
    if (icon.getAttribute('data-type').includes(data.weather[0].main.toLowerCase())) {
      icon.dataset.state = 'show'
    } else {
      icon.dataset.state = 'hide'
    }
  })

  cityName.innerHTML = 'Leeds'
  temperature.innerHTML = data.main.temp > 0 && data.main.temp < 10 ? `0${Math.round(data.main.temp)}°` : `${Math.round(data.main.temp)}°`
  humid.innerHTML = `${data.main.humidity}%`
  sunrise.innerHTML = formatTimestamp(data.sys.sunrise)
  sunset.innerHTML = formatTimestamp(data.sys.sunset)
  openWeatherLoader.style.display = 'none'
  openWeatherContainer.style.display = 'flex'
}

async function getOpenWeatherData() {
  const response = {
    coord: {
      lon: -1.5477,
      lat: 53.7964
    },
    weather: [{
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d'
    }],
    base: 'stations',
    main: {
      temp: 16.02,
      pressure: 1029,
      humidity: 54
    },
    visibility: 10000,
    wind: {
      speed: 3.6,
      deg: 40
    },
    clouds: {
      all: 20
    },
    dt: 1619270180,
    sys: {
      type: 1,
      id: 1423,
      country: 'GB',
      sunrise: 1619239494,
      sunset: 1619292202
    },
    timezone: 3600,
    id: 3333164,
    name: 'Leeds',
    cod: 200
  }

  return displayOpenWeatherData(response)
}

function toggleWeatherDisplay() {
  openweatherInner.classList.toggle('is-flipped')
}

function formatTimestamp(stamp) {
  const date = new Date(stamp * 1000)
  let h = date.getHours()
  let m = date.getMinutes()

  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m

  return `${h}:${m}`
}

export {openweatherInner, toggleWeatherDisplay, getOpenWeatherData}
