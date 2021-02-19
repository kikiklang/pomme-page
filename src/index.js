// //////// INDEX //////// //

import displayClock from './clock/clock.js'
import {buttonsContainer, searchContainer, toggleEngineButtons, sendSearch} from './search/search.js'
import {cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import getOpenWeatherData from './openweather/openweather.js'
import getUnsplashData from './unsplash/unsplash.js'
import getStormglassData from './stormglass/stormglass.js'

// Clock
displayClock()

// Search
buttonsContainer.addEventListener('click', toggleEngineButtons)
searchContainer.addEventListener('keypress', sendSearch)

// Binance
getBinancedata()
cryptoButtonsContainer.addEventListener('click', toggleButtons)

// Openweather
getOpenWeatherData()

// Unsplash
getUnsplashData()

// Stormglass
getStormglassData()
