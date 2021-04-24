// //////// UNSPLASH //////// //

function displayUnsplashImage(data) {
  const image = document.querySelector('.unsplash-small')
  const unsplashLoader = document.querySelector('pp-unsplash-loader-container')
  const unsplashContainer = document.querySelector('pp-unsplash')

  image.src = data
  unsplashLoader.style.display = 'none'
  unsplashContainer.style.display = 'flex'
}

async function getUnsplashData() {
  const response = 'https://images.unsplash.com/photo-1536408614573-c49fd217cd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDY1NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MTkyNzE3NzY&ixlib=rb-1.2.1&q=80&w=400'

  return displayUnsplashImage(response)
}

export default getUnsplashData
