const dino = document.querySelector(".dino");
const gameOver = document.querySelector(".gameOver");
const obstacle = document.querySelector(".obstacle");
const scoreCont = document.querySelector(".scoreCont");
let cross = true;
let score = 0;
document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode === 38) {
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 1000);
  }
  if (e.keyCode === 39) {
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dx + 112 + "px";
  }
  if (e.keyCode === 37) {
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dx - 112 + "px";
  }
};

setInterval(function () {
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  const offsetX = Math.abs(dx - ox);
  const offsetY = Math.abs(dy - oy);
  if (offsetX < 93 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");
  } else if (offsetX < 145 && cross) {
    score++;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  }
  console.log(offsetX, offsetY);
}, 100);

function updateScore() {
  scoreCont.innerHTML = `Your Score : ${score}`;
}
