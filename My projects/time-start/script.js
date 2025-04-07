const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const restart = document.querySelector("#restart");
let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.querySelector("#displayTime");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

play.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
});
restart.addEventListener("click", function () {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
});
