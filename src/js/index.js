// ///// //
// INDEX //
// ///// //
import clock from './clock';
import { engineButtons, toggleEngineButtons, input, sendSearch } from './search';
import { cryptoButtonsContainer, displayChartAndFooter, toggleButtons } from './chart';
import displayWeatherData from './weather';

// set time
clock();

// allow search
engineButtons.addEventListener('click', toggleEngineButtons);
input.addEventListener('keypress', sendSearch);

// dispplay crypto chart
displayChartAndFooter();
cryptoButtonsContainer.addEventListener('click', toggleButtons);

// display weather
displayWeatherData();
