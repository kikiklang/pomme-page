// //////// WEATHER //////// //
const newsapiTitle = document.querySelector('.pp-newsapi-title')
const newsapiSource = document.querySelector('.pp-newsapi-source')
const loaderContainer = document.querySelector('pp-newsapi-loader-container')
let dataSet
let currentArticleIndex = 0

/**
 * Main exported module function that trigger data request, DOM elements collection, DOM elements filling
 * add an event listener on module and display it
 * @async
 * @returns {void} Nothing
 */
export async function startNewsapiModule() {
  const newsapiContainer = document.querySelector('pp-newsapi')
  const data = await getNewsapiData()
  fillNewsApiDomElements(data)
  changeNeswapiArticle()
  loaderContainer.style.display = 'none'
  newsapiContainer.style.display = 'flex'
}

/**
 * GET data fron the newsapi API
 * @async
 * @returns {Promise} Promise object
 */
async function getNewsapiData() {
  const apiKey = process.env.NEWS_API_KEY
  const url = 'https://newsapi.org/v2/'
  const path = 'top-headlines'
  const country = process.env.NEWS_API_COUNTRY
  const response = await fetch(`${url}${path}?country=${country}&apiKey=${apiKey}`)

  if (!response.ok) {
    displaynewsapiErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  dataSet = await response.json()

  return dataSet
}

/**
 * Fill targeted DOM elements with newsapi data
 * @param {Object} data data from the newsapi API
 * @param {Object} dom DOM elements
 * @returns {void} Nothing
 */
function fillNewsApiDomElements(data, direction) {
  if (direction === 'forward' && !data.articles[currentArticleIndex]) {
    currentArticleIndex = 0
  }

  if (direction === 'backward' && !data.articles[currentArticleIndex]) {
    currentArticleIndex = data.articles.length - 1
  }

  const domain = (new URL(data.articles[currentArticleIndex].url))
  const getTitleOnly = data.articles[currentArticleIndex].title.split('-')
  getTitleOnly.pop()
  const title = getTitleOnly.join('-')

  newsapiTitle.innerHTML = title
  newsapiTitle.href = data.articles[currentArticleIndex].url
  newsapiSource.innerHTML = data.articles[currentArticleIndex].source.name
  newsapiSource.href = domain.origin
}

/**
 * If newsapi HTTP request fails, get error response and display info on the page
 * @param {Object} response the error response from the API
 * @returns {void} Nothing
 */
function displaynewsapiErrorOnPage(response) {
  const errorContainer = document.querySelector('pp-newsapi-error-container')
  const errorCode = document.querySelector('.newsapi-error-code')
  const errorMessage = document.querySelector('.newsapi-error-message')

  errorCode.innerHTML = response.status
  errorMessage.innerHTML = response.statusText
  loaderContainer.style.display = 'none'
  errorContainer.style.display = 'flex'
}

/**
 * Change articles links displayed on module
 * @returns {void} Nothing
 */
function changeNeswapiArticle() {
  const forwardButton = document.querySelector('.pp-newsapi-nav-right')
  const backwardButton = document.querySelector('.pp-newsapi-nav-left')

  forwardButton.addEventListener('click', () => {
    currentArticleIndex += 1
    fillNewsApiDomElements(dataSet, 'forward')
  })

  backwardButton.addEventListener('click', () => {
    currentArticleIndex -= 1
    fillNewsApiDomElements(dataSet, 'backward')
  })
}
