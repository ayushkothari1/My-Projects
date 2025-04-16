const imagList = [
  "/images/th (1).jpg",
  "/images/th (2).jpg",
  "/images/th (3).jpg",
  "/images/th.jpg",
];
const resultMsg = document.querySelector("#result-msg");
const mainImg = document.querySelector("#main-img");
const redImg = document.querySelector("#red");
const options = document.querySelectorAll(".option-img");
const btn = document.querySelector(".btn");
function changeMainImage() {
  const randoImage = Math.floor(Math.random() * imagList.length);
  mainImg.setAttribute("src", imagList[randoImage]);
}
changeMainImage();
options.forEach(function (e) {
  e.addEventListener("click", function (t) {
    redImg.style.display = "none";
    mainImg.classList.add("active");

    options.forEach((img) => img.classList.add("clicked"));
    setTimeout(() => {
      btn.style.display = "block";
    }, 3000);
    if (t.target.getAttribute("src") === mainImg.getAttribute("src")) {
      setTimeout(() => {
        resultMsg.innerHTML = "Nice! You matched it! 🎉";
      }, 3000);
    } else {
      setTimeout(function () {
        resultMsg.innerHTML = "Oops! Not a match. Try again!";
      }, 3000);
    }
    // options.classList.add("clicked");
  });
});
btn.addEventListener("click", ReloadGame);
function ReloadGame() {
  redImg.style.display = "block";
  mainImg.classList.remove("active");
  options.forEach((img) => img.classList.remove("clicked"));
  resultMsg.innerHTML = "";
  btn.style.display = "none";
  changeMainImage();
}
