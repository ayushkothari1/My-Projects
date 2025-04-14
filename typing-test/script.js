const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile programming language.",
  "Typing tests help improve your speed and accuracy.",
  "Practice makes perfect when it comes to coding.",
  "Web development combines creativity and logic.",
];

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("inputArea");
const resultEl = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

let currentSentence = "";
let startTime;
let isTyping = false;

function startGame() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceEl.textContent = currentSentence;
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();
  resultEl.textContent = "";
  isTyping = false;
}

inputEl.addEventListener("input", () => {
  if (!isTyping) {
    startTime = new Date().getTime();
    isTyping = true;
  }

  if (inputEl.value === currentSentence) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordCount = currentSentence.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    const accuracy = calculateAccuracy(inputEl.value, currentSentence);

    resultEl.innerHTML = `
          ✅ Completed!<br>
          ⏱ Time: ${timeTaken.toFixed(2)}s<br>
          🏁 Speed: ${wpm} WPM<br>
          🎯 Accuracy: ${accuracy}%
        `;
    inputEl.disabled = true;
  }
});

function calculateAccuracy(input, target) {
  let correct = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === target[i]) correct++;
  }
  return Math.round((correct / target.length) * 100);
}

startBtn.addEventListener("click", startGame);
