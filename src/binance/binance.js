// //////// CRYPTO //////// //

let cryptoPicked = 'BTC'
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

	differenceValue.innerHTML =
		data.priceChange > 0 ?
			`${Math.round(data.priceChange)}<span class="binance-money-unit">€</span>` :
			`${Math.round(data.priceChange)}<span class="binance-money-unit">€</span>`
	currentValue.innerHTML = `${Math.round(data.lastPrice)}<span class="binance-money-unit">€</span>`
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
	const klinesPath = '/api/v3/klines'
	const klinesParameters = `?symbol=${cryptoPicked}EUR&interval=1d&limit=7`
	const tickerPath = '/api/v3/ticker/24hr'
	const tickerParameters = `?symbol=${cryptoPicked}EUR`
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
		button.type = 'inactive'
	})
	event.target.type = 'active'
	cryptoPicked = event.target.innerHTML.toUpperCase()

	getBinancedata()
}

export {cryptoButtonsContainer, getBinancedata, toggleButtons}
