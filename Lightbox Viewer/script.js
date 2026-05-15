const imgItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");
const images = [
  "https://cdn.freecodecamp.org/curriculum/labs/stonehenge.jpg",
  "https://cdn.freecodecamp.org/curriculum/labs/storm.jpg",
  "https://cdn.freecodecamp.org/curriculum/labs/trees.jpg",
];
imgItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImage.src = images[index];
    console.log(images[index]);
  });
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
