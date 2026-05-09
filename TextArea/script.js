const textArea = document.querySelector("#text-input");
const character = document.querySelector("#char-count");
textArea.addEventListener("input", () => {
  updateCounter();
});

function updateCounter() {
  if (textArea.value.length > 50) {
    textArea.value = textArea.value.slice(0, 50);
  }
  let num = textArea.value.length;
  character.innerHTML = `Character Count: ${num}/50`;

  if ((num = 50)) {
    character.style.color = "red";
  } else {
    character.style.color = "black";
  }
}
