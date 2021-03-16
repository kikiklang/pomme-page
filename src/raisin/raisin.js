// //////// RAISIN //////// //

function truncateLinkName() {
  const raisinLinks = [...document.querySelectorAll('.raisin-link')]
  const maxLength = 12

  raisinLinks.forEach(link => {
    if (link.innerHTML.length > maxLength) {
      link.innerHTML = `${link.innerHTML.replace(/\.[^/.]+$/, '').slice(0, Math.max(0, maxLength))}...`
    }
  })
}

export default truncateLinkName
