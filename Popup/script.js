const openBtn = document.querySelector(".btn");
const close = document.querySelector(".close");
let popup = document.querySelector("#popup");

openBtn.addEventListener("click", function () {
  popup.classList.add("open-popup");
});
close.addEventListener("click", function () {
  popup.classList.remove("open-popup");
});
