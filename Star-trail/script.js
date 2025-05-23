const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const orb = document.createElement("div");
  orb.classList.add("trail");

  const size = Math.random() * 20 + 10;
  orb.style.width = `${size}px`;
  orb.style.height = `${size}px`;
  orb.style.left = `${e.pageX - size / 2}px`;
  orb.style.top = `${e.pageY - size / 2}px`;

  // Random bright color
  const hue = Math.floor(Math.random() * 360);
  orb.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;

  body.appendChild(orb);

  setTimeout(() => {
    orb.remove();
  }, 1000);
});
