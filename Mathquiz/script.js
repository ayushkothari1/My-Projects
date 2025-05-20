let num1, num2, correctAnswer;
let score = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  correctAnswer = num1 + num2;
  document.getElementById(
    "question"
  ).textContent = `What is ${num1} + ${num2}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function submitAnswer() {
  const userAnswer = Number(document.getElementById("answer").value);
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `Wrong! The correct answer was ${correctAnswer}.`;
    feedback.style.color = "red";
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  setTimeout(generateQuestion, 1500);
}

// Start the first question when the page loads
generateQuestion();
