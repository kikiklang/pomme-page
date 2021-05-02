// //////// STORMGLASS //////// //
const stormglassLoaderContainer = document.querySelector('pp-stormglass-loader-container')

/**
 * Main module function that triggers data request, DOM elements collection and DOM elements filling
 * @async
 * @returns {void} Nothing
 */
export async function displayStormglassModule() {
  const [dom, data] = await Promise.all([catchStormglassDomElements(), getStormglassData()])
  fillStormglassDomElements(dom, data)
}

/**
 * GET data fron the stormglass API
 * @async
 * @returns {Promise} Promise object if resolved
 */
async function getStormglassData() {
  const currentISODate = new Date().toISOString().slice(0, 13)
  const apiKey = process.env.STORMGLASS_API_KEY
  const lat = process.env.STORMGLASS_LATITUDE
  const lng = process.env.STORMGLASS_LONGITUDE
  const url = 'https://api.stormglass.io/v2/'
  const path = 'weather/point'
  const parameters = ['waterTemperature', 'waveDirection', 'waveHeight', 'wavePeriod', 'windDirection', 'windSpeed']
  const response = await fetch(`${url}${path}?lat=${lat}&lng=${lng}&params=${parameters}`, {headers: {Authorization: apiKey}})

  if (!response.ok) {
    displayStormglassErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  const jsonResponse = await response.json()
  return jsonResponse.hours.find(h => h.time.includes(currentISODate))
}

/**
 * Get DOM elements that will later be filled with data
 * @async
 * @returns {Promise} Promise object that resolved with DOM elements contained in an object
 */
async function catchStormglassDomElements() {
  return {
    stormglassContainer: document.querySelector('pp-stormglass'),
    spotName: document.querySelector('.header-spot'),
    waterTemporary: document.querySelector('.watertemp-value'),
    windDirection: document.querySelector('.winddir-icon'),
    windSpeed: document.querySelector('.windspeed-value'),
    waveHeight: document.querySelector('.waveheight-value'),
    wavePeriod: document.querySelector('.waveperiod-value'),
    wavedir: document.querySelector('.wavedir-icon')
  }
}

/**
 * Fill targeted DOM elements with stormglass API data
 * @param {Object} data data from the stormglass API
 * @param {Object} dom DOM elements collection
 * @returns {void} Nothing
 */
async function fillStormglassDomElements(dom, data) {
  dom.spotName.innerHTML = process.env.STORMGLASS_SPOT_NAME
  dom.waterTemporary.innerHTML = `${Math.round(data.waterTemperature.meto || data.waterTemperature.noaa || data.waterTemperature.sg)}°`
  dom.windDirection.style.transform = `rotate(${data.windDirection.icon || data.windDirection.noaa || data.windDirection.sg}deg)`
  dom.windSpeed.innerHTML = `${data.windSpeed.icon || data.windSpeed.noaa || data.windSpeed.sg}<span class="pp-stormglass-unit">m/s</span>`
  dom.waveHeight.innerHTML = `${data.waveHeight.icon || data.waveHeight.dwd}<span class="pp-stormglass-unit">m</span>`
  dom.wavePeriod.innerHTML = `${Math.round(data.wavePeriod.icon || data.wavePeriod.noaa)}<span class="pp-stormglass-unit">s</span>`
  dom.wavedir.style.transform = `rotate(${data.waveDirection.icon || data.waveDirection.noaa || data.waveDirection.meteo}deg)`
  stormglassLoaderContainer.style.display = 'none'
  dom.stormglassContainer.style.display = 'flex'
}

/**
 * If stormglass HTTP request fails, get error response and display info on the page
 * @param {Object} response the error response from the API
 * @returns {void} Nothing
 */
function displayStormglassErrorOnPage(response) {
  const stormglassErrorContainer = document.querySelector('pp-stormglass-error-container')
  const stormglassErrorCode = document.querySelector('.stormglass-error-code')
  const stormglassErrorMesage = document.querySelector('.stormglass-error-message')

  stormglassErrorCode.innerHTML = response.status
  stormglassErrorMesage.innerHTML = response.statusText
  stormglassLoaderContainer.style.display = 'none'
  stormglassErrorContainer.style.display = 'flex'
}
