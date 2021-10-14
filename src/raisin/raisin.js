// //////// RAISIN //////// //

/**
 * Main exported module function
 * @returns {void} Nothing
 */
export function startRaisinModule() {
  getHostnameOnHover()
}

/**
 * Add an mouse over event listener on each link to display domain name inside the search module if existing
 */
function getHostnameOnHover() {
  const raisinLinks = [...document.querySelectorAll('.raisin-link')]
  const searchInput = document.querySelector('.pp-search-input')

  for (const link of raisinLinks) {
    link.addEventListener('mouseover', event => {
      event.preventDefault()
      if (searchInput) {
        searchInput.placeholder = link.hostname
      }
    })
  }
}
