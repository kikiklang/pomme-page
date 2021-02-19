// //////// SEARCH //////// //

const searchContainer = document.querySelector('pp-search')
const buttonsContainer = document.querySelector('pp-engine-buttons')
const buttonsList = document.querySelectorAll('.pp-search-button')

function toggleEngineButtons(event) {
	buttonsList.forEach(button => {
		button.type = 'inactive'
	})
	event.target.parentElement.type = 'active'
}

function sendSearch(event) {
	const input = document.querySelector('.pp-search-input')

	if (event.key === 'Enter') {
		const engine = [...buttonsList].find(b => [...b.attributes][1].value === 'active')
		const domain = [...engine.attributes][3].value
		const url = `${domain}?q=${input.value}`
		window.open(url)
	}
}

export {buttonsContainer, searchContainer, toggleEngineButtons, sendSearch}
