const bodyEl = document.querySelector("body");
const InputEl = document.querySelector(".input");
const circle = document.querySelector(".circle");
InputEl.checked = JSON.parse(localStorage.getItem("mode"));
circle.addEventListener("click", function () {
  console.log(InputEl.checked);
});
updateBody();
function updateBody() {
  if (InputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

InputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(InputEl.checked));
}
