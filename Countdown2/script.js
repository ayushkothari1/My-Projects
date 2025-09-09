const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
// console.log(currentdate);

const targetDate = new Date("September 15, 2025 00:00:00").getTime();
// console.log(targetDate);

function countdowntime() {
  const currentdate = new Date().getTime();
  const remainDate = targetDate - currentdate;
  //   console.log(remainDate);
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  const daycount = Math.floor(remainDate / day);

  const hourscount = Math.floor((remainDate % day) / hour);
  const minutescount = Math.floor((remainDate % hour) / minute);
  const secondscount = Math.floor((remainDate % minute) / second);

  days.innerHTML = String(daycount).padStart(2, "0");
  hours.innerHTML = String(hourscount).padStart(2, "0");
  minutes.innerHTML = String(minutescount).padStart(2, "0");
  seconds.innerHTML = String(secondscount).padStart(2, "0");
  if (remainDate <= 0) {
    clearInterval(countdowntime);
  }
}

let stopInterval = setInterval(countdowntime, 1000);
