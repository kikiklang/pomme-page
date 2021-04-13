// //////// CRYPTO //////// //

let cryptoPicked = process.env.BINANCE_SYMBOLS.split(' ')[0].toUpperCase()
const cryptoButtonsContainer = document.querySelector('pp-binance-selector')
const binanceLoaderContainer = document.querySelector('pp-binance-loader-container')

function handleBinanceApiError(historicalDataResponse, currentDataResponse) {
  const binanceErrorContainer = document.querySelector('pp-binance-error-container')
  const binanceErrorCode = document.querySelector('.binance-error-code')

  if (!historicalDataResponse.status <= 200 || historicalDataResponse.status >= 300) {
    binanceErrorCode.innerHTML = historicalDataResponse.status
  }

  if (!currentDataResponse.status <= 200 || currentDataResponse.status >= 300) {
    binanceErrorCode.innerHTML = currentDataResponse.status
  }

  binanceErrorCode.innerHTML = historicalDataResponse.status
  binanceLoaderContainer.style.display = 'none'
  binanceErrorContainer.style.display = 'flex'
}

function generateButtons() {
  const symbolsList = process.env.BINANCE_SYMBOLS.split(' ')

  symbolsList.forEach(symbol => {
    const newButton = document.createElement('button')
    cryptoButtonsContainer.append(newButton)
    newButton.className = 'binance-selector-button'
    newButton.dataset.state = 'inactive'
    newButton.innerHTML = symbol
  })

  cryptoButtonsContainer.firstChild.dataset.state = 'active'
}

function generateChartLine(data) {
  const svg = document.querySelector('.binance-chart-svg')
  const svgContainerWidth = document.querySelector('pp-binance-chart').offsetWidth
  const svgContainerHeight = 130
  const maxCryptoValue = Math.max(...data)
  const minCryptoValue = Math.min(...data)
  const xAxisPixelvalues = index => (svgContainerWidth / (data.length - 1)) * index
  const yAxisPixelValues = value => Math.round(((value - minCryptoValue) * svgContainerHeight) / (maxCryptoValue - minCryptoValue))
  const pixelCoordinatesArray = data.map((value, index) => [xAxisPixelvalues(index), yAxisPixelValues(value)])
  const svgPath = pixelCoordinatesArray.map(pixel => pixel[0] === 0 ? `M ${pixel[0]},${pixel[1]}` : `L ${pixel[0]} ${pixel[1]}`).join(' ')

  const svgCode = `
		<defs>
			<linearGradient id="gradient" x1="0%" x2="100%">
				<stop offset="0%" stop-color="var(--module-background)" />
				<stop offset="20%" stop-color="var(--main)" />
				<stop offset="80%" stop-color="var(--main)" />
				<stop offset="100%" stop-color="var(--module-background)" />
			</linearGradient>
		</defs>
		<path d="${svgPath}" transform="translate(0, 10)" stroke="url(#gradient)" fill="none" stroke-width="7" stroke-linejoin="round" />
	`

  svg.innerHTML = svgCode
}

function completeFooterValues(data) {
  const differenceValue = document.querySelector('.binance-difference-value')
  const currentValue = document.querySelector('.binance-current-value')
  const pairSymbol = process.env.BINANCE_PAIR_SYMBOL
  const lastPrice = Number(data.lastPrice)
  const priceChange = Number(data.priceChange)

  differenceValue.innerHTML = `${priceChange}<span class="binance-money-unit">${pairSymbol}</span>`
  currentValue.innerHTML = `${lastPrice}<span class="binance-money-unit">${pairSymbol}</span>`
}

function displayBinanceData(historicalData, currentData) {
  const filteredHistoricalData = historicalData.map(value => Number(value[1]))
  const binanceLoader = document.querySelector('pp-binance-loader-container')
  const binanceContainer = document.querySelector('pp-binance')

  binanceLoader.style.display = 'none'
  binanceContainer.style.display = 'flex'
  generateChartLine(filteredHistoricalData)
  completeFooterValues(currentData)
}

async function getBinancedata() {
  const url = 'https://api.binance.com'
  const pair = process.env.BINANCE_PAIR
  const klinesPath = '/api/v3/klines'
  const klinesParameters = `?symbol=${cryptoPicked}${pair}&interval=1d&limit=7`
  const tickerPath = '/api/v3/ticker/24hr'
  const tickerParameters = `?symbol=${cryptoPicked}${pair}`
  const [historicalDataResponse, currentDataResponse] = await Promise.all([
    fetch(`${url}${klinesPath}${klinesParameters}`),
    fetch(`${url}${tickerPath}${tickerParameters}`)
  ])

  if (historicalDataResponse.ok && currentDataResponse.ok) {
    const [historicalDataJsonResponse, currentDataJsonResponse] = await Promise.all([
      historicalDataResponse.json(),
      currentDataResponse.json()
    ])

    return displayBinanceData(historicalDataJsonResponse, currentDataJsonResponse)
  }

  return handleBinanceApiError(historicalDataResponse, currentDataResponse)
}

function toggleButtons(event) {
  const buttonsList = document.querySelectorAll('.binance-selector-button')
  buttonsList.forEach(button => {
    button.dataset.state = 'inactive'
  })
  event.target.dataset.state = 'active'
  cryptoPicked = event.target.innerHTML.toUpperCase()

  getBinancedata()
}

export {generateButtons, cryptoButtonsContainer, getBinancedata, toggleButtons}
