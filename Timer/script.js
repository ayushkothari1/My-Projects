const startEl = document.querySelector("#start");
const stopEl = document.querySelector("#stop");
const resetEl = document.querySelector("#reset");
const timeEl = document.querySelector("#time");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
let m = 25;
let s = 0;
let timer = null;
let num = (n) => (n < 10 ? "0" + n : n);

function updateDisplay() {
  minuteEl.innerHTML = num(m);
  secondEl.innerHTML = num(s);
}
startEl.addEventListener("click", function () {
  if (timer !== null) return;
  timer = setInterval(() => {
    if (m === 0 && s === 0) {
      clearInterval(timer);
      timer = null;
      return;
    }
    if (s === 0) {
      if (m > 0) {
        m--;
        s = 59;
      }
    } else {
      s--;
    }
    updateDisplay();
  }, 1000);
});

stopEl.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

resetEl.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  m = 25;
  s = 0;
  updateDisplay();
});
