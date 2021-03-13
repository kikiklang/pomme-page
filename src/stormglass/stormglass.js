// //////// STORMGLASS //////// //
const stormglassLoaderContainer = document.querySelector('pp-stormglass-loader-container')

function handleStormGlassApiError(response) {
	const stormglassErrorContainer = document.querySelector('pp-stormglass-error-container')
	const stormglassErrorCode = document.querySelector('.stormglass-error-code')

	stormglassErrorCode.innerHTML = response.status
	stormglassLoaderContainer.style.display = 'none'
	stormglassErrorContainer.style.display = 'flex'
}

async function displayStormglassData(data) {
	const stormglassContainer = document.querySelector('pp-stormglass')
	const spotName = document.querySelector('.header-spot')
	const waterTemporary = document.querySelector('.watertemp-value')
	const windDirection = document.querySelector('.winddir-icon')
	const windSpeed = document.querySelector('.windspeed-value')
	const waveHeight = document.querySelector('.waveheight-value')
	const wavePeriod = document.querySelector('.waveperiod-value')
	const wavedir = document.querySelector('.wavedir-icon')

	spotName.innerHTML = process.env.STORMGLASS_SPOT_NAME
	waterTemporary.innerHTML = `${Math.round(data.waterTemperature.meto || data.waterTemperature.noaa || data.waterTemperature.sg)}°`
	windDirection.style.transform = `rotate(${data.windDirection.icon || data.windDirection.noaa || data.windDirection.sg}deg)`
	windSpeed.innerHTML = `${data.windSpeed.icon || data.windSpeed.noaa || data.windSpeed.sg} <span class="pp-stormglass-unit">m/s</span>`
	waveHeight.innerHTML = `${data.waveHeight.icon || data.waveHeight.dwd} <span class="pp-stormglass-unit">m</span>`
	wavePeriod.innerHTML = `${Math.round(data.wavePeriod.icon || data.wavePeriod.noaa)} <span class="pp-stormglass-unit">s</span>`
	wavedir.style.transform = `rotate(${data.waveDirection.icon || data.waveDirection.noaa || data.waveDirection.meteo}deg)`
	stormglassLoaderContainer.style.display = 'none'
	stormglassContainer.style.display = 'flex'
}

async function getStormglassData() {
	const currentISODate = new Date().toISOString().slice(0, 13)
	const apiKey = process.env.STORMGLASS_API_KEY
	const lat = process.env.STORMGLASS_LATITUDE
	const lng = process.env.STORMGLASS_LONGITUDE
	const url = 'https://api.stormglass.io/v2/'
	const path = 'weather/point'
	const parameters = ['waterTemperature', 'waveDirection', 'waveHeight', 'wavePeriod', 'windDirection', 'windSpeed']
	const response = await fetch(`${url}${path}?lat=${lat}&lng=${lng}&params=${parameters}`, {headers: {Authorization: apiKey}})

	if (response.ok) {
		const jsonResponse = await response.json()
		const currentSurfData = await jsonResponse.hours.find(h => h.time.includes(currentISODate))
		return displayStormglassData(currentSurfData)
	}

	return handleStormGlassApiError(response)
}

export default getStormglassData
