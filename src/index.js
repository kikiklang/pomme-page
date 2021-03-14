// //////// INDEX //////// //

import displayClock from './clock/clock.js'
import {buttonsContainer, searchContainer, toggleEngineIcons, sendSearch} from './search/search.js'
import {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import getOpenWeatherData from './openweather/openweather.js'
import getUnsplashData from './unsplash/unsplash.js'
import getStormglassData from './stormglass/stormglass.js'

// Clock
displayClock()

// Search
buttonsContainer.addEventListener('click', toggleEngineIcons)
searchContainer.addEventListener('keypress', sendSearch)

// Binance
generateButtons()
getBinancedata()
cryptoButtonsContainer.addEventListener('click', toggleButtons)

// Openweather
getOpenWeatherData()

// Unsplash
getUnsplashData()

// Stormglass
getStormglassData()
