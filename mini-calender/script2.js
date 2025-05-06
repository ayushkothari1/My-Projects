const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNum = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
console.log(date.getDate(), date.getMonth(), date.getFullYear(), date.getDay());
let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthIndex = date.getMonth();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayIndex = date.getDay();
dayName.innerHTML = daysOfWeek[dayIndex];
monthName.innerHTML = month[monthIndex];
dayNum.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
