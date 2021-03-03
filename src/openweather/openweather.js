// //////// WEATHER //////// //
const openWeatherLoaderContainer = document.querySelector('pp-openweather-loader-container')

function handleopenWeatherApiError(response) {
	const openWeatherErrorContainer = document.querySelector('pp-openweather-error-container')
	const openWeatherErrorCode = document.querySelector('.openweather-error-code')

	openWeatherErrorCode.innerHTML = response.status
	openWeatherLoaderContainer.style.display = 'none'
	openWeatherErrorContainer.style.display = 'flex'
}

function displayOpenWeatherData(data) {
	const openWeatherLoader = document.querySelector('pp-openweather-loader-container')
	const openWeatherContainer = document.querySelector('pp-openweather')
	const temporary = document.querySelector('.temp-value')
	const humid = document.querySelector('.humid-value')
	const icons = [...document.querySelector('pp-openweather-icon').childNodes]

	icons.map(icon => {
		return icon.getAttribute('type').includes(data.weather[0].main.toLowerCase()) ?
			icon.setAttribute('state', 'show') :
			icon.setAttribute('state', 'hide')
	})

	temporary.innerHTML = data.main.temp > 0 && data.main.temp < 10 ? `0${data.main.temp}°` : `${data.main.temp}°`
	humid.innerHTML = `${data.main.humidity}%`
	openWeatherLoader.style.display = 'none'
	openWeatherContainer.style.display = 'flex'
}

async function getOpenWeatherData() {
	const apiKey = 'cbc6b50c0f3e3669e09bf0450b3b8c1e'
	const url = 'https://api.openweathermap.org/data/2.5/weather'
	const city = 'La Roche-sur-Yon'
	const units = 'metric'
	const response = await fetch(`${url}?q=${city}&units=${units}&APPID=${apiKey}`)

	if (response.ok) {
		const jsonResponse = await response.json()
		return displayOpenWeatherData(jsonResponse)
	}

	return handleopenWeatherApiError(response)
}

export default getOpenWeatherData
