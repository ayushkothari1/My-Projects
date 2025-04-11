const show = document.querySelector(".show");
const hide = document.querySelector(".hide");

hide.addEventListener("click", function () {
  hide.style.display = "none";
  show.style.display = "block";
});
