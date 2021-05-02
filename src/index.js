// //////// INDEX //////// //

import {truncateLinkName} from './raisin/raisin.js'
import {clockContainer, toggleClockDisplay, displayTime, displayDate} from './clock/clock.js'
import {startSearchModule} from './search/search.js'
import {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import {displayOpenWeatherModule} from './openweather/openweather.js'
import {displayUnsplashModule} from './unsplash/unsplash.js'
import {displayStormglassModule} from './stormglass/stormglass.js'

// Raisin
truncateLinkName()

// Clock
clockContainer.addEventListener('click', toggleClockDisplay)
displayTime()
displayDate()

// Search
startSearchModule()

// Binance
generateButtons()
getBinancedata()
cryptoButtonsContainer.addEventListener('click', toggleButtons)

// Openweather
displayOpenWeatherModule()

// Unsplash
displayUnsplashModule()

// Stormglass
displayStormglassModule()
