// //////// INDEX //////// //

import truncateLinkName from './raisin/raisin.js'
import {clockContainer, toggleClockDisplay, displayTime, displayDate} from './clock/clock.js'
import {buttonsContainer, searchContainer, toggleEngineIcons, sendSearch} from './search/search.js'
import {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import {openweatherInner, toggleWeatherDisplay, getOpenWeatherData} from './openweather/openweather.js'
import getUnsplashData from './unsplash/unsplash.js'
import getStormglassData from './stormglass/stormglass.js'

// Raisin
truncateLinkName()

// Clock
clockContainer.addEventListener('click', toggleClockDisplay)
displayTime()
displayDate()

// Search
buttonsContainer.addEventListener('click', toggleEngineIcons)
searchContainer.addEventListener('keypress', sendSearch)

// Binance
generateButtons()
getBinancedata()
cryptoButtonsContainer.addEventListener('click', toggleButtons)

// Openweather
getOpenWeatherData()
openweatherInner.addEventListener('click', toggleWeatherDisplay)

// Unsplash
getUnsplashData()

// Stormglass
getStormglassData()

// Weather
