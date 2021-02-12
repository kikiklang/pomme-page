// ///// //
// CLOCK //
// ///// //

function clock() {
  const days = ['DI', 'LU', 'MA', 'ME', 'JE', 'VE', 'SA'];
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const day = days[date.getDay()];
  const hour = h < 10 ? `0${h}` : h;
  const minute = m < 10 ? `0${m}` : m;
  const second = s < 10 ? `0${s}` : s;

  document.querySelector('.time').innerHTML = `${day} : ${hour} : ${minute} : ${second}`;

  setTimeout(clock, 1000);
}

export default clock;
