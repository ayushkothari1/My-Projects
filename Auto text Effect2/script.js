const container = document.querySelector(".container");
const profession = [
  "Web Developer",
  "Front-End Developer",
  "Instructor",
  "Junior Software Developer",
  "Full Stack Developer",
  "Dreamer",
  "Learner",
  "Engineer",
];
let professionIndex = 0;
let professionCharacterIndex = 0;
updateText();
function updateText() {
  let currenProfession = profession[professionIndex];
  const firstLetter = currenProfession[0];

  let vowels = ["A", "a", "U", "u", "E", "e", "O", "o", "i", "I"].includes(
    firstLetter
  );
  let article = vowels ? "An" : "A";
  container.innerHTML = `<h1>I Am ${article} ${profession[
    professionIndex
  ].slice(0, professionCharacterIndex)}</h1>`;
  professionCharacterIndex++;
  if (professionCharacterIndex === profession[professionIndex].length + 1) {
    professionIndex++;
    professionCharacterIndex = 0;
  }
  if (professionIndex === profession.length) {
    professionIndex = 0;
  }
  setTimeout(updateText, 200);
}
