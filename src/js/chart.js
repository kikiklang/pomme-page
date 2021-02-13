// ///// //
// CHART //
// ///// //

import ApexCharts from 'apexcharts';

let cryptoPicked = 'BTC';
let chart = null;
const cryptoButtonsContainer = document.querySelector('selector');

async function getHistoricalCryptodata() {
  const url = 'https://api.binance.com';
  const path = '/api/v3/klines';
  const params = `?symbol=${cryptoPicked}EUR&interval=1d&limit=7`;

  try {
    const response = await fetch(`${url}${path}${params}`);
    const cryptoData = await response.json();

    return cryptoData;
  } catch (error) {
    return error;
  }
}

async function getCurrentCryptoData() {
  const url = 'https://api.binance.com';
  const path = '/api/v3/ticker/24hr';
  const params = `?symbol=${cryptoPicked}EUR`;

  try {
    const response = await fetch(`${url}${path}${params}`);
    const cryptoData = await response.json();

    return cryptoData;
  } catch (error) {
    return error;
  }
}

async function generateChart() {
  const response = await getHistoricalCryptodata();
  const data = await response.map((e) => +e[1]);
  const chartOptions = {
    chart: {
      id: 'cryptoChart',
      type: 'line',
      toolbar: { show: false },
      width: '89%',
      height: '59%',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        dynamicAnimation: { enabled: true, speed: 350 },
      },
    },
    series: [{ data }],
    stroke: { width: 7, curve: 'smooth' },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#e89c4a'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 30, 100, 100],
      },
    },
    yaxis: { show: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    theme: { monochrome: { enabled: true, color: '#222834' } },
    grid: { show: false },
    tooltip: { enabled: false },
  };

  chart = new ApexCharts(document.querySelector('chart'), chartOptions);

  return chart.render();
}

async function generateFooter() {
  const response = await getCurrentCryptoData();
  const data = await response;

  document.querySelector('difference-amount').innerHTML =
    data.priceChange > 0 ? `+${Math.round(data.priceChange)} €` : `${Math.round(data.priceChange)} €`;
  document.querySelector('current-price').innerHTML = `${Math.round(data.lastPrice)} €`;
}

function displayChartAndFooter() {
  generateChart();
  generateFooter();
}

function toggleButtons(event) {
  const buttonsList = document.querySelectorAll('.crypto-button');
  buttonsList.forEach((button) => {
    button.type = 'inactive';
  });
  event.target.type = 'active';
  cryptoPicked = event.target.innerHTML.toUpperCase();

  chart.destroy();
  generateChart();
  generateFooter();
}

export { cryptoButtonsContainer, displayChartAndFooter, toggleButtons };
