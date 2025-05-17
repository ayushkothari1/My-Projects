const textarea = document.querySelector(".textarea");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

textarea.addEventListener("keyup", () => {
  console.log("key is pressed");
  updateCounter();
});

function updateCounter() {
  totalCounter.innerHTML = textarea.value.length;
  remainingCounter.innerHTML =
    textarea.getAttribute("maxLength") - textarea.value.length;
}
updateCounter();
