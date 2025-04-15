const mainImg = document.querySelector("#main-img");
const redImg = document.querySelector("#red");
const options = document.querySelectorAll(".option-img");
options.forEach(function (e) {
  e.addEventListener("click", function () {
    redImg.style.display = "none";
    mainImg.classList.add("active");
  });
});
