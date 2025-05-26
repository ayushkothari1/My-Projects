const yearEl = document.querySelector(".year");
const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const futureTime = new Date("15 Aug, 2025 00:00:00").getTime();
console.log(futureTime);

function Timeleft() {
  const now = new Date().getTime();
  const gap = futureTime - now;
  console.log(gap);
  const s = 1000;
  const m = 60 * s;
  const h = 60 * m;
  const d = h * 24;
  dayEl.innerHTML = Math.floor(gap / d);
  hourEl.innerHTML = Math.floor((gap % d) / h);
  minuteEl.innerHTML = Math.floor((gap % h) / m);
  secondEl.innerHTML = Math.floor((gap % m) / s);
}
// Timeleft();

setInterval(Timeleft, 1000);
