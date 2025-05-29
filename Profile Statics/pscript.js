const yearEl = document.querySelector("#year");
const websiteEl = document.querySelector("#website");
const modeEl = document.querySelector("#mode");
let count1 = 0;
let count2 = 15;
let count3 = 15;
window.addEventListener("load", () => {
  setInterval(function () {
    if (count1 < 15) {
      count1++;
    }
    yearEl.innerHTML = count1;
  }, 100);
  setInterval(function () {
    if (count2 < 260) {
      count2++;
    }
    websiteEl.innerHTML = count2;
  }, 6);
  setInterval(function () {
    if (count3 < 27) {
      count3++;
    }
    modeEl.innerHTML = count3;
  }, 120);
});
