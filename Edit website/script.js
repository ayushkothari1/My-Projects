const editableDiv = document.getElementById("myDiv");
const editableh2 = document.querySelector("#h2");
const Color = document.querySelectorAll(".color");
// const body1 = document.querySelector("#body1");

Color.forEach(function (e) {
  e.addEventListener("click", function () {
    const editcolor = e.id;
    editableDiv.style.color = editcolor;
    editableh2.style.color = editcolor;
  });
});
editableh2.addEventListener("input", function () {
  localStorage.setItem("myHcontent", editableh2.innerHTML);
});
// body1.addEventListener("input", function () {
//   localStorage.setItem("myContent1", body1.innerHTML);
// });

// window.addEventListener("load", function () {
//   const saved = localStorage.getItem("myContent1");
//   if (saved) {
//     body1.innerHTML = saved;
//   }
// });

window.addEventListener("load", function () {
  const saved = localStorage.getItem("myHcontent");
  if (saved) {
    editableh2.innerHTML = saved;
  }
});
// Save changes to browser storage every time user types

editableDiv.addEventListener("input", () => {
  localStorage.setItem("myDivContent", editableDiv.innerHTML);
});

// Load saved content when page loads
window.addEventListener("load", () => {
  const saved = localStorage.getItem("myDivContent");
  if (saved) {
    editableDiv.innerHTML = saved;
  }
});
