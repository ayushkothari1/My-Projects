const body1 = document.querySelector("#body1");

body1.addEventListener("input", function () {
  localStorage.setItem("myContent1", body1.innerHTML);
});

window.addEventListener("load", function () {
  const saved = localStorage.getItem("myContent1");
  if (saved) {
    body1.innerHTML = saved;
  }
});
