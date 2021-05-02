// //////// INDEX //////// //

import {truncateLinkName} from './raisin/raisin.js'
import {startClockModule} from './clock/clock.js'
import {startSearchModule} from './search/search.js'
import {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons} from './binance/binance.js'
import {displayOpenWeatherModule} from './openweather/openweather.js'
import {displayUnsplashModule} from './unsplash/unsplash.js'
import {displayStormglassModule} from './stormglass/stormglass.js'

// Raisin
truncateLinkName()

// Clock
startClockModule()

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
