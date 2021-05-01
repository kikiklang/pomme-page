// //////// UNSPLASH //////// //

const unsplashLoaderContainer = document.querySelector('pp-unsplash-loader-container')

/**
 * Main module function that trigger data request, DOM elements collection and DOM elements filling
 * @async
 * @returns {void} Nothing
 */
export async function displayUnsplashModule() {
  const data = await getUnsplashData()
  const image = document.querySelector('.unsplash-small')
  const unsplashContainer = document.querySelector('pp-unsplash')

  image.src = data.urls.small
  unsplashLoaderContainer.style.display = 'none'
  unsplashContainer.style.display = 'flex'
}

/**
 * GET data fron the unsplash API
 * @async
 * @returns {Promise} Promise object if resolved
 */
async function getUnsplashData() {
  const apiKey = process.env.UNSPLASH_API_KEY
  const orientation = 'landscape'
  const collectionId = process.env.UNSPLASH_COLLECTION_ID
  const url = 'https://api.unsplash.com/'
  const path = 'photos/random/'
  const parameters = `client_id=${apiKey}&orientation=${orientation}&collections=${collectionId}`
  const response = await fetch(`${url}${path}?${parameters}`)

  if (!response.ok) {
    displayUnsplashErrorOnPage(response)
    throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
  }

  return response.json()
}

/**
 * If unsplash HTTP request fails, get error response and display info on the page
 * @param {Object} response the error response from the API
 * @returns {void} Nothing
 */
function displayUnsplashErrorOnPage(response) {
  const unsplashErrorContainer = document.querySelector('pp-unsplash-error-container')
  const unsplashErrorCode = document.querySelector('.unsplash-error-code')

  unsplashErrorCode.innerHTML = response.status
  unsplashLoaderContainer.style.display = 'none'
  unsplashErrorContainer.style.display = 'flex'
}
