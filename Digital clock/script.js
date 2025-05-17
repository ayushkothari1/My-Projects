const hourEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

updateClock();
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let num = (n) => (n < 10 ? "0" + n : n);
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  hourEl.innerHTML = num(h);
  minutesEl.innerHTML = num(m);
  secondEl.innerHTML = num(s);
  ampmEl.innerHTML = ampm;
  console.log(h, s, m);
}

setInterval(updateClock, 1000);
