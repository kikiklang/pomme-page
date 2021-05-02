// //////// SEARCH //////// //

const iconList = document.querySelectorAll('.pp-search-icon')

/**
 * Main exported function that attaches event handler to specified DOM elements
 * @returns {void} Nothing
 */
export function startSearchModule() {
  const searchContainer = document.querySelector('pp-search')
  const buttonsContainer = document.querySelector('pp-engine-buttons')

  buttonsContainer.addEventListener('click', toggleEngineIcons)
  searchContainer.addEventListener('keypress', sendSearch)
}

/**
 * Toggle icon display based on custom html attribute found through the click event
 * @param {Object} event the event object that contains click target data
 * @returns {void} Nothing
 */
function toggleEngineIcons(event) {
  iconList.forEach(icon => {
    icon.dataset.state = 'inactive'
  })

  event.target.dataset.state = 'active'
}

/**
 * Trigger search if enter key is pressed when using the module
 * the user picked search engine is retrieved through html custom attributes
 * @param {*} event the event object that we are checking for a key press
 * @returns {void} Nothing
 */
function sendSearch(event) {
  const input = document.querySelector('.pp-search-input')

  if (event.key === 'Enter') {
    const activeEngine = [...iconList].find(b => [...b.attributes][3].value === 'active')
    const activeEngineDomain = [...activeEngine.attributes][5].value
    const url = `${activeEngineDomain}?q=${input.value}`
    window.open(url)
    input.value = ''
  }
}
