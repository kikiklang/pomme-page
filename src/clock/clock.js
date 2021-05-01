// //////// CLOCK //////// //

const clockContainer = document.querySelector('pp-clock-inner')

function displayTime() {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()

  const day = d.toLocaleDateString(process.env.CLOCK_LOCALE, {weekday: 'short'}).toUpperCase()
  const hour = h < 10 ? `0${h}` : h
  const minute = m < 10 ? `0${m}` : m
  const second = s < 10 ? `0${s}` : s

  document.querySelector('.pp-clock-time').innerHTML = `${day} : ${hour} : ${minute} : ${second}`

  setTimeout(displayTime, 1000)
}

function displayDate() {
  const today = new Date()
  const options = {year: 'numeric', month: 'short', day: 'numeric'}

  document.querySelector('.pp-clock-date').innerHTML = today.toLocaleDateString(process.env.CLOCK_LOCALE, options)
}

function toggleClockDisplay() {
  clockContainer.classList.toggle('is-flipped')
}

export {clockContainer, toggleClockDisplay, displayTime, displayDate}
