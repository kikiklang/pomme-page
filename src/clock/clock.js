// //////// CLOCK //////// //

function displayClock() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const date = new Date()
  const h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()

  const day = days[date.getDay()]
  const hour = h < 10 ? `0${h}` : h
  const minute = m < 10 ? `0${m}` : m
  const second = s < 10 ? `0${s}` : s

  document.querySelector('.pp-time').innerHTML = `${day} : ${hour} : ${minute} : ${second}`

  setTimeout(displayClock, 1000)
}

export default displayClock
