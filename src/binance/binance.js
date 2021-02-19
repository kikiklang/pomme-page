// //////// CRYPTO //////// //

let cryptoPicked = 'BTC';
const cryptoButtonsContainer = document.querySelector('pp-binance-selector');
const binanceLoaderContainer = document.querySelector('pp-binance-loader-container');

function handleBinanceApiError(historicalDataResponse, currentDataResponse) {
  const binanceErrorContainer = document.querySelector('pp-binance-error-container');
  const binanceErrorCode = document.querySelector('.binance-error-code');

  if (!historicalDataResponse.status <= 200 || historicalDataResponse.status >= 300) {
    binanceErrorCode.innerHTML = historicalDataResponse.status;
  }

  if (!currentDataResponse.status <= 200 || currentDataResponse.status >= 300) {
    binanceErrorCode.innerHTML = currentDataResponse.status;
  }

  binanceErrorCode.innerHTML = historicalDataResponse.status;
  binanceLoaderContainer.style.display = 'none';
  binanceErrorContainer.style.display = 'flex';
}

function generateChartLine(data) {
  const svgContainerWidth = document.querySelector('pp-binance-chart').offsetWidth;
  const svgContainerHeight = 130;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const lineCommand = (point) => `L ${point[0]} ${point[1]}`;
  const points = [
    [0, ((data[0] - min) * svgContainerHeight) / (max - min)],
    [(svgContainerWidth / 7) * 2, ((data[1] - min) * svgContainerHeight) / (max - min)],
    [(svgContainerWidth / 7) * 3, ((data[2] - min) * svgContainerHeight) / (max - min)],
    [(svgContainerWidth / 7) * 4, ((data[3] - min) * svgContainerHeight) / (max - min)],
    [(svgContainerWidth / 7) * 5, ((data[4] - min) * svgContainerHeight) / (max - min)],
    [(svgContainerWidth / 7) * 6, ((data[5] - min) * svgContainerHeight) / (max - min)],
    [svgContainerWidth, ((data[6] - min) * svgContainerHeight) / (max - min)],
  ];

  const svgPath = () => {
    const d = points.reduce(
      (acc, point, i, a) => (i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${lineCommand(point, i, a)}`),
      ''
    );
    return `
      <defs>
        <linearGradient id="gradient" x1="0%" x2="100%">
          <stop offset="0%" stop-color="var(--module-background)" />
          <stop offset="20%" stop-color="var(--main)" />
          <stop offset="80%" stop-color="var(--main)" />
          <stop offset="100%" stop-color="var(--module-background)" />
        </linearGradient>
      </defs>
      <path d="${d}" transform="translate(0, 10)" stroke="url(#gradient)" fill="none" stroke-width="7" stroke-linejoin="round" />
    `;
  };

  const svg = document.querySelector('.binance-chart-svg');
  svg.innerHTML = svgPath(points, lineCommand);
}

function completeFooterValues(data) {
  const differenceValue = document.querySelector('.binance-difference-value');
  const currentValue = document.querySelector('.binance-current-value');

  differenceValue.innerHTML =
    data.priceChange > 0
      ? `${Math.round(data.priceChange)}<span class="binance-money-unit">€</span>`
      : `${Math.round(data.priceChange)}<span class="binance-money-unit">€</span>`;
  currentValue.innerHTML = `${Math.round(data.lastPrice)}<span class="binance-money-unit">€</span>`;
}

function displayBinanceData(historicalData, currentData) {
  const filteredHistoricalData = historicalData.map((e) => +e[1]);
  const binanceLoader = document.querySelector('pp-binance-loader-container');
  const binanceContainer = document.querySelector('pp-binance');

  binanceLoader.style.display = 'none';
  binanceContainer.style.display = 'flex';
  generateChartLine(filteredHistoricalData);
  completeFooterValues(currentData);
}

async function getBinancedata() {
  const url = 'https://api.binance.com';
  const klinesPath = '/api/v3/klines';
  const klinesParams = `?symbol=${cryptoPicked}EUR&interval=1d&limit=7`;
  const tickerPath = '/api/v3/ticker/24hr';
  const tickerParams = `?symbol=${cryptoPicked}EUR`;
  const [historicalDataResponse, currentDataResponse] = await Promise.all([
    fetch(`${url}${klinesPath}${klinesParams}`),
    fetch(`${url}${tickerPath}${tickerParams}`),
  ]);

  if (historicalDataResponse.ok && currentDataResponse.ok) {
    const [historicalDataJsonResponse, currentDataJsonResponse] = await Promise.all([
      historicalDataResponse.json(),
      currentDataResponse.json(),
    ]);

    return displayBinanceData(historicalDataJsonResponse, currentDataJsonResponse);
  }

  return handleBinanceApiError(historicalDataResponse, currentDataResponse);
}

function toggleButtons(event) {
  const buttonsList = document.querySelectorAll('.binance-selector-button');
  buttonsList.forEach((button) => {
    button.type = 'inactive';
  });
  event.target.type = 'active';
  cryptoPicked = event.target.innerHTML.toUpperCase();

  getBinancedata();
}

export { cryptoButtonsContainer, getBinancedata, toggleButtons };
