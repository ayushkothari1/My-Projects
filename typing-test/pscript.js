const ram = document.querySelector(".ram");
ram.addEventListener("click", writings);
async function writings(writen) {
  const response = await fetch("https://api.api-ninjas.com/v1/quotes");
  const data = await response.json();
  console.log(data);
}
