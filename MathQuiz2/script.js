const container = document.querySelector(".container");
const answer = document.querySelector(".answer");
const question = document.querySelector(".question");
const feedback = document.querySelector(".feedback");
const score = document.querySelector(".score");
const button = document.querySelector("button");
let num = 0;
let a, b;
function UpdateQuestions() {
  a = Math.floor(Math.random() * 100);
  b = Math.floor(Math.random() * 100);
  console.log(a, b);
  question.innerHTML = `What is ${a} + ${b}?`;
}
button.addEventListener("click", function () {
  let currectAnswer = a + b;
  console.log(currectAnswer);
  const userAnswer = parseInt(answer.value);

  if (userAnswer === currectAnswer) {
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
    num++;
    score.innerHTML = `Score : ${num}`;
  } else {
    feedback.innerHTML = `Wrong! The correct answer is ${currectAnswer} `;
    feedback.style.color = "red";
  }
  setTimeout(() => {
    feedback.innerHTML = "";
  }, 1500);

  answer.value = "";
  UpdateQuestions();
});
UpdateQuestions();
