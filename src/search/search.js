// //////// SEARCH //////// //

const searchContainer = document.querySelector('pp-search')
const buttonsContainer = document.querySelector('pp-engine-buttons')
const iconList = document.querySelectorAll('.pp-search-icon')

function toggleEngineIcons(event) {
  iconList.forEach(icon => {
    icon.dataset.state = 'inactive'
  })

  event.target.dataset.state = 'active'
}

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

export {buttonsContainer, searchContainer, toggleEngineIcons, sendSearch}
