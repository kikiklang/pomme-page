// //////// INDEX //////// //

import {truncateLinkName} from './raisin/raisin.js'
import {startClockModule} from './clock/clock.js'
import {startSearchModule} from './search/search.js'
import {startBinanceModule} from './binance/binance.js'
import {startOpenWeatherModule} from './openweather/openweather.js'
import {startUnsplashModule} from './unsplash/unsplash.js'
import {startStormglassModule} from './stormglass/stormglass.js'

// Raisin
truncateLinkName()

// Clock
startClockModule()

// Search
startSearchModule()

// Binance
startBinanceModule()

// Openweather
startOpenWeatherModule()

// Unsplash
startUnsplashModule()

// Stormglass
startStormglassModule()

