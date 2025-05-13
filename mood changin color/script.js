const palettes = {
  happy: ["#FFD700", "#FF69B4", "#FFA500", "#FFFF66"],
  sad: ["#708090", "#2F4F4F", "#4682B4", "#A9A9A9"],
  energetic: ["#FF4500", "#FF0000", "#FFFF00", "#00FF00"],
  calm: ["#ADD8E6", "#B0E0E6", "#E0FFFF", "#AFEEEE"],
};

const moodSelect = document.querySelector("#select");
const bigBox = document.querySelector("#Box");

moodSelect.addEventListener("change", () => {
  const selectedMood = moodSelect.value;
  bigBox.innerHTML = "";

  if (palettes[selectedMood]) {
    palettes[selectedMood].forEach((color) => {
      const box = document.createElement("div");
      box.className = "color-box";
      box.style.backgroundColor = color;
      bigBox.appendChild(box);
    });
  }
});
