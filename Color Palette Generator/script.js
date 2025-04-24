const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const savedContainer = document.getElementById("savedContainer");

let colors = [];

function generateRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

function createColorBlock(color = generateRandomColor(), locked = false) {
  const div = document.createElement("div");
  div.className = "color-block";
  div.style.backgroundColor = color;
  div.dataset.color = color;
  div.dataset.locked = locked;

  const lockBtn = document.createElement("button");
  lockBtn.className = "lock";
  lockBtn.textContent = locked ? "🔒" : "🔓";
  lockBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isLocked = div.dataset.locked === "true";
    div.dataset.locked = !isLocked;
    lockBtn.textContent = isLocked ? "🔓" : "🔒";
  });

  div.textContent = color;
  div.appendChild(lockBtn);

  div.addEventListener("click", () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
  });

  return div;
}

function renderPalette() {
  palette.innerHTML = "";
  colors = colors.map(({ color, locked }) =>
    locked ? { color, locked } : { color: generateRandomColor(), locked }
  );

  colors.forEach(({ color, locked }) => {
    const block = createColorBlock(color, locked);
    palette.appendChild(block);
  });
}

generateBtn.addEventListener("click", () => {
  if (colors.length === 0) {
    colors = new Array(5)
      .fill(null)
      .map(() => ({ color: generateRandomColor(), locked: false }));
  }
  renderPalette();
});

generateBtn.click(); // initial render
