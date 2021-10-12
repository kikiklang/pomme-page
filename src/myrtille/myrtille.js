// //////// MYYRTILLE //////// //

/**
 * Main exported module function
 * @returns {void} Nothing
 */
export function startMyrtilleModule() {
  getHostnameOnHover()
}

/**
 * Add an mouse over event listener on each link to display domain name inside the search module if existing
 */
function getHostnameOnHover() {
  const myrtilleLinks = [...document.querySelectorAll('.myrtille-link')]
  const searchInput = document.querySelector('.pp-search-input')

  myrtilleLinks.forEach(link => {
    link.addEventListener('mouseenter', event => {
      event.preventDefault()
      if (searchInput) {
        searchInput.placeholder = link.hostname
      }
    })
  })
}
