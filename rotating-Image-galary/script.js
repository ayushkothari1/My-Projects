const imagContainer = document.querySelector(".image-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let x = 0;
let timer;

prev.addEventListener("click", function () {
  x = x + 45;
  updateGallery();
  clearTimeout(timer);
});
next.addEventListener("click", function () {
  x = x - 45;
  updateGallery();
  clearTimeout(timer);
});

function updateGallery() {
  imagContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
}

updateGallery();
