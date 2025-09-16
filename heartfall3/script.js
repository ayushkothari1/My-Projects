const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const xS = e.offsetX;
  const yS = e.offsetY;
  const span = document.createElement("span");
  span.style.left = xS + "px";
  span.style.top = yS + "px";
  const size = Math.random() * 100;
  span.style.height = size + "px";
  span.style.width = size + "px";
  bodyEl.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
