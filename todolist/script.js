const buttonEl = document.querySelector(".add");
const listContainer = document.querySelector(".dolist");
const inputEl = document.querySelector(".input");

buttonEl.addEventListener("click", function () {
  if (inputEl.value === "") {
    alert("InputBox is emppty");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputEl.value;
    const span = document.createElement("span");
    span.innerHTML = "×";
    console.log(li);
    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputEl.value = "";
  savedata();
});
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("active");
    savedata();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savedata();
  }
});

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
