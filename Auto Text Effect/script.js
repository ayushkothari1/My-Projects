const Container = document.querySelector(".container");
const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor"];
let CarrerIndex = 0;
let characterIndex = 0;

updateText();
// console.log(Index);

function updateText() {
  Container.innerHTML = `<h1>I Am ${
    careers[CarrerIndex].slice(0, 1) === "I" ? "An" : "A"
  } ${careers[CarrerIndex].slice(0, characterIndex)}</h1>`;
  characterIndex++;
  if (characterIndex === careers[CarrerIndex].length + 1) {
    CarrerIndex++;
    characterIndex = 0;
  }
  if (CarrerIndex === careers.length) {
    CarrerIndex = 0;
    // updateText();
  }
  setTimeout(updateText, 100);
}
