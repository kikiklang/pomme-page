// //////// INDEX //////// //

import displayClock from './clock/clock';
import { buttonsContainer, searchContainer, toggleEngineButtons, sendSearch } from './search/search';
import { cryptoButtonsContainer, getBinancedata, toggleButtons } from './binance/binance';
import getOpenWeatherData from './openweather/openweather';
import getUnsplashData from './unsplash/unsplash';
import getStormglassData from './stormglass/stormglass';

// clock
displayClock();

// search
buttonsContainer.addEventListener('click', toggleEngineButtons);
searchContainer.addEventListener('keypress', sendSearch);

// binance
getBinancedata();
cryptoButtonsContainer.addEventListener('click', toggleButtons);

// openweather
getOpenWeatherData();

// unsplash
getUnsplashData();

// stormglass
getStormglassData();
