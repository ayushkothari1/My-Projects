const trailerContainer = document.querySelector(".trailer-container");
const mainContainer = document.querySelector(".main-container");
const watchNow = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const Video = document.querySelector("video");

watchNow.addEventListener("click", function () {
  trailerContainer.style.display = "block";
  mainContainer.style.display = "none";
});

closeIcon.addEventListener("click", function () {
  trailerContainer.style.display = "none";
  mainContainer.style.display = "block";
  Video.pause();
  Video.currentTime = 0;
});
