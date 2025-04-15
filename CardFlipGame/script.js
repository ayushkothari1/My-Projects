const imagList = [
  "/images/th (1).jpg",
  "/images/th (2).jpg",
  "/images/th (3).jpg",
  "/images/th.jpg",
];
const mainImg = document.querySelector("#main-img");
const redImg = document.querySelector("#red");
const options = document.querySelectorAll(".option-img");
function changeMainImage() {
  const randoImage = Math.floor(Math.random() * imagList.length);
  mainImg.setAttribute("src", imagList[randoImage]);
}
changeMainImage();
options.forEach(function (e) {
  e.addEventListener("click", function (t) {
    redImg.style.display = "none";
    mainImg.classList.add("active");
    if (t.target.getAttribute("src") === mainImg.getAttribute("src")) {
      console.log("hey you got it man");
    } else {
      console.log("fuck you loser");
    }
  });
});
