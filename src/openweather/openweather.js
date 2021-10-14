// //////// WEATHER //////// //
const openweatherInner = document.querySelector('pp-openweather-inner')
const loaderContainer = document.querySelector('pp-openweather-loader-container')

/**
 * Main exported module function that trigger data request, DOM elements collection, DOM elements filling
 * add an event listener on module and display it
 * @async
 * @returns {void} Nothing
 */
export async function startOpenWeatherModule() {
  const [dom, data] = await Promise.all([catchOpenWeatherDomElements(), getOpenWeatherData()])
  fillOpenWeatherDomElements(data, dom)
  openweatherInner.addEventListener('click', toggleOpenWeatherDisplay)
  loaderContainer.style.display = 'none'
  dom.container.style.display = 'flex'
}

/**
 * GET data fron the openWeather API
 * @async
 * @returns {Promise} Promise object
 */
async function getOpenWeatherData() {
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const city = process.env.OPEN_WEATHER_CITY_QUERY_NAME
  const units = process.env.OPEN_WEATHER_UNITS
  const apiKey = process.env.OPEN_WEATHER_API_KEY
  const response = await fetch(`${url}?q=${city}&units=${units}&APPID=${apiKey}`)

  if (!response.ok) {
    displayOpenWeatherErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  return response.json()
}

/**
 * GET DOM elements that will later be filled with data
 * @async
 * @returns {Promise} Promise object that resolved with DOM elements contained in an object
 */
async function catchOpenWeatherDomElements() {
  return {
    container: document.querySelector('pp-openweather'),
    temperature: document.querySelector('.temp-value'),
    humid: document.querySelector('.humid-value'),
    icons: [...document.querySelectorAll('.pp-openweather-icon')],
    cityName: document.querySelector('.city-value'),
    sunrise: document.querySelector('.openweather-back-sunrise'),
    sunset: document.querySelector('.openweather-back-sunset'),
  }
}

/**
 * Fill targeted DOM elements with openweather API data
 * @param {Object} data data from the openwaether API
 * @param {Object} dom DOM elements
 * @returns {void} Nothing
 */
function fillOpenWeatherDomElements(data, dom) {
  for (const icon of dom.icons) {
    icon.dataset.state = icon.getAttribute('data-type').includes(data.weather[0].main.toLowerCase()) ? 'show' : 'hide'
  }

  dom.cityName.innerHTML = process.env.OPEN_WEATHER_CITY_DISPLAY_NAME || process.env.OPEN_WEATHER_CITY_QUERY_NAME
  dom.temperature.innerHTML = data.main.temp > 0 && data.main.temp < 10 ? `0${Math.round(data.main.temp)}°` : `${Math.round(data.main.temp)}°`
  dom.humid.innerHTML = `${data.main.humidity}%`
  dom.sunrise.innerHTML = formatTimestamp(data.sys.sunrise)
  dom.sunset.innerHTML = formatTimestamp(data.sys.sunset)
}

/**
 * If openweather HTTP request fails, get error response and display info on the page
 * @param {Object} response the error response from the API
 * @returns {void} Nothing
 */
function displayOpenWeatherErrorOnPage(response) {
  const errorContainer = document.querySelector('pp-openweather-error-container')
  const errorCode = document.querySelector('.openweather-error-code')

  errorCode.innerHTML = response.status
  loaderContainer.style.display = 'none'
  errorContainer.style.display = 'flex'
}

/**
 * Format timestamp to human readable hours and minutes
 * @param {Number} stamp timestamp found in API response for sunrise and sunset
 * @returns {string} time in hours and minutes
 */
function formatTimestamp(stamp) {
  const date = new Date(stamp * 1000)
  let h = date.getHours()
  let m = date.getMinutes()

  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m

  return `${h}:${m}`
}

/**
 * Add/remove class on dom element for flipping whole module
 * @returns {void} Nothing
 */
function toggleOpenWeatherDisplay() {
  openweatherInner.classList.toggle('is-flipped')
}
