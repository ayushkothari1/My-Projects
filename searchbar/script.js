const searchInput = document.querySelector("#search");
const listItems = document.querySelectorAll("#results li");
const hidden = document.querySelectorAll(".hidden");
const activeHidden = document.querySelectorAll(".active-hidden");

hidden.forEach((lis) => {
  lis.addEventListener("click", function () {
    hidden.forEach(function (tab) {
      tab.classList.remove("active-hidden");
    });
    lis.classList.add("active-hidden");
  });
});
console.log(listItems);
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  console.log(query);

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
