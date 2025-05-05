const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event) => {
  const spanEl = document.createElement("span");
  xPos = event.offsetX;
  yPos = event.offsetY;
  spanEl.style.top = yPos + "px";
  spanEl.style.left = xPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
