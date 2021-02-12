// ////// //
// SEARCH //
// ////// //

const engineButtons = document.querySelector('engine');
const buttonsList = document.querySelectorAll('.engine-button');
const input = document.querySelector('input');

function toggleEngineButtons(event) {
  buttonsList.forEach((button) => {
    button.type = 'inactive';
  });
  event.target.parentElement.type = 'active';
}

function sendSearch(e) {
  if (e.key === 'Enter') {
    const engine = [...buttonsList].find((b) => [...b.attributes][1].value === 'active');
    const domain = [...engine.attributes][3].value;
    const url = `${domain}?q=${input.value}`;
    window.open(url);
  }
}

export { engineButtons, toggleEngineButtons, input, sendSearch };
