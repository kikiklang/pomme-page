// //////// UNSPLASH //////// //

const unsplashLoaderContainer = document.querySelector('pp-unsplash-loader-container')

function handleUnsplashApiError(response) {
	const unsplashErrorContainer = document.querySelector('pp-unsplash-error-container')
	const unsplashErrorCode = document.querySelector('.unsplash-error-code')

	unsplashErrorCode.innerHTML = response.status
	unsplashLoaderContainer.style.display = 'none'
	unsplashErrorContainer.style.display = 'flex'
}

function displayUnsplashImage(data) {
	const image = document.querySelector('.unsplash-small')
	const unsplashLoader = document.querySelector('pp-unsplash-loader-container')
	const unsplashContainer = document.querySelector('pp-unsplash')

	image.src = data.urls.small
	unsplashLoader.style.display = 'none'
	unsplashContainer.style.display = 'flex'
}

async function getUnsplashData() {
	const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
	const orientation = 'landscape'
	const collectionId = 789734
	const url = 'https://api.unsplash.com/'
	const path = 'photos/random/'
	const parameters = `client_id=${apiKey}&orientation=${orientation}&collections=${collectionId}`
	const response = await fetch(`${url}${path}?${parameters}`)

	if (response.ok) {
		const jsonResponse = await response.json()
		return displayUnsplashImage(jsonResponse)
	}

	return handleUnsplashApiError(response)
}

export default getUnsplashData
