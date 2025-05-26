const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const newYearTime = new Date("Aug 15, 2025 00:00:00").getTime();
updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  console.log(now, newYearTime);
  const gap = newYearTime - now;
  console.log(gap);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  console.log(d, h, m, s);
  dayEl.innerHTML = d;
  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;
}
setInterval(updateCountdown, 1000);
