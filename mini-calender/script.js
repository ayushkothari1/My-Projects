const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNum = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();

console.log(date.getDate(), date.getMonth(), date.getFullYear(), date.getDay());

monthName.innerHTML = date.toLocaleDateString("en", { month: "long" });

dayName.innerHTML = date.toLocaleDateString("en", {
  weekday: "long",
});

dayNum.innerHTML = date.getDate();
yearEl.innerHTML = date.getFullYear();
