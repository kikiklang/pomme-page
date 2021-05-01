// //////// INDEX //////// //

import {truncateLinkName} from './raisin/raisin.js'
import {clockContainer, toggleClockDisplay, displayTime, displayDate} from './clock/clock.js'
import {buttonsContainer, searchContainer, toggleEngineIcons, sendSearch} from './search/search.js'
import {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import {displayOpenWeatherModule} from './openweather/openweather.js'
import {displayUnsplashModule} from './unsplash/unsplash.js'
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
displayOpenWeatherModule()

// Unsplash
displayUnsplashModule()

// Stormglass
getStormglassData()

// Weather
