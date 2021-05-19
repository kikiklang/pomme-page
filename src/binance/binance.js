// //////// BINANCE //////// //

let cryptoPicked = process.env.BINANCE_SYMBOLS.split(' ')[0].toUpperCase()
const cryptoButtonsContainer = document.querySelector('pp-binance-selector')
const binanceLoaderContainer = document.querySelector('pp-binance-loader-container')

/**
 * Main exported module function that triggers data request, buttons list creation, chart line creation
 * footer values completion and attaches an event listener on modules buttons
 * @async
 * @returns {void} Nothing
 */
export async function startBinanceModule() {
  const [klineData, tickerData] = await Promise.all([getBinanceKlinesData(), getBinanceTickerData()])
  const binanceContainer = document.querySelector('pp-binance')

  binanceLoaderContainer.style.display = 'none'
  binanceContainer.style.display = 'flex'

  generateButtons()
  generateChartLine(klineData)
  completeFooterValues(tickerData)
  cryptoButtonsContainer.addEventListener('click', toggleButtons)
}

/**
 * GET klines data fron the binance API, used to draw the chart line
 * @async
 * @returns {Promise} Promise object
 */
async function getBinanceKlinesData() {
  const url = 'https://api.binance.com'
  const pair = process.env.BINANCE_PAIR
  const klinesPath = '/api/v3/klines'
  const klinesParameters = `?symbol=${cryptoPicked}${pair}&interval=1d&limit=7`
  const response = await fetch(`${url}${klinesPath}${klinesParameters}`)

  if (!response.ok) {
    displayBinanceErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  return response.json()
}

/**
 * GET ticker data fron the binance API, used to get current crypto values
 * @async
 * @returns {Promise} Promise object
 */
async function getBinanceTickerData() {
  const url = 'https://api.binance.com'
  const pair = process.env.BINANCE_PAIR
  const tickerPath = '/api/v3/ticker/24hr'
  const tickerParameters = `?symbol=${cryptoPicked}${pair}`
  const response = await fetch(`${url}${tickerPath}${tickerParameters}`)

  if (!response.ok) {
    displayBinanceErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  return response.json()
}

/**
 * Create and display a list of buttons based on user ENV variables choices
 * @returns {void} Nothing
 */
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

/**
 * Generate a chart line in SVG based on binance tickler API data.
 * @param {Array} data An array of arrays with choosen symbol data listed by days
 * @returns {void} Nothing
 */
function generateChartLine(data) {
  const filteredData = data.map(value => Number(value[1]))
  const svg = document.querySelector('.binance-chart-svg')
  const svgContainerWidth = document.querySelector('pp-binance-chart').offsetWidth
  const svgContainerHeight = 130
  const maxCryptoValue = Math.max(...filteredData)
  const minCryptoValue = Math.min(...filteredData)
  const xAxisPixelvalues = index => (svgContainerWidth / (filteredData.length - 1)) * index
  const yAxisPixelValues = value => Math.round(((value - minCryptoValue) * svgContainerHeight) / (maxCryptoValue - minCryptoValue))
  const pixelCoordinatesArray = filteredData.map((value, index) => [xAxisPixelvalues(index), yAxisPixelValues(value)])
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

/**
 * Add lastPrice and priceCHange data on module footer
 * @param {Object} data An object of various current data about the choosen symbol
 * @returns {void} Nothing
 */
function completeFooterValues(data) {
  const differenceValue = document.querySelector('.binance-difference-value')
  const currentValue = document.querySelector('.binance-current-value')
  const pairSymbol = process.env.BINANCE_PAIR_SYMBOL
  const lastPrice = Number(data.lastPrice)
  const priceChange = Number(data.priceChange)

  differenceValue.innerHTML = `${priceChange}<span class="binance-money-unit">${pairSymbol}</span>`
  currentValue.innerHTML = `${lastPrice}<span class="binance-money-unit">${pairSymbol}</span>`
}

/**
 * If one of binance HTTP requests fail, get error response and display info on the page
 * @param {Object} response the error response from the API
 * @returns {void} Nothing
 */
function displayBinanceErrorOnPage(response) {
  const binanceErrorContainer = document.querySelector('pp-binance-error-container')
  const binanceErrorCode = document.querySelector('.binance-error-code')

  binanceErrorCode.innerHTML = response.status
  binanceLoaderContainer.style.display = 'none'
  binanceErrorContainer.style.display = 'flex'
}

/**
 * If a button is clicked, his state is changed and HTTP requests are called again
 * @async
 * @param {Object} event Data about the clicked button
 * @returns {void} Nothing
 */
async function toggleButtons(event) {
  const buttonsList = document.querySelectorAll('.binance-selector-button')

  buttonsList.forEach(button => {
    button.dataset.state = 'inactive'
  })
  event.target.dataset.state = 'active'
  cryptoPicked = event.target.innerHTML.toUpperCase()

  const [klineData, tickerData] = await Promise.all([getBinanceKlinesData(), getBinanceTickerData()])
  generateChartLine(klineData)
  completeFooterValues(tickerData)
}
