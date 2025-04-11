const section1 = document.querySelector(".section1");
const container = document.querySelector(".container");
// const got = document.querySelector(".got");

function showRules() {
  section1.style.display = "none";
  let section = document.createElement("section");
  container.appendChild(section);
  section.classList.add("section2");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Rules of Game";
  section.appendChild(h3);
  let ul = document.createElement("ul");
  section.appendChild(ul);
  let li = document.createElement("li");
  li.innerHTML = "Click on right answer.";
  ul.appendChild(li);
  let li2 = document.createElement("li");
  li2.innerHTML = "If answer is correct keep playing the game.";
  ul.appendChild(li2);
  let li3 = document.createElement("li");
  li3.innerHTML = "If any of answer is wrong, you lost the game.";
  ul.appendChild(li3);
  let li4 = document.createElement("li");
  li4.innerHTML =
    "You won't get any score, your end goal is to finish the game.";
  ul.appendChild(li4);
  let button = document.createElement("button");
  button.innerHTML = "Got It";
  button.classList.add("got");
  section.appendChild(button);
  button.addEventListener("click", function () {
    section.style.display = "none";
    section1.style.display = "block";
  });
}

function gameStart() {
  section1.style.display = "none";
  let section = document.createElement("section");
  section.classList.add("section3");
  container.appendChild(section);
  let p = document.createElement("p");
  section.appendChild(p);
  p.innerHTML =
    "<span>1. </span> Which of these birds can see clearly at night?";
    let div = document.createElement("div");
    div.classList.add("options");
    section.appendChild(div);
    let div1 = document.createElement("div");
    div1.classList.add("img-box")
    div.appendChild(div1)
    let div2 = document.createElement("div");
    div2.classList.add("img-box")
    div.appendChild(div2)
    let div3 = document.createElement("div");
    div3.classList.add("img-box")
    div.appendChild(div3)
    let div4 = document.createElement("div");
    div4.classList.add("img-box");
    div.appendChild(div4);
    let span1 = document.createElement("span");
    span1.innerHTML = "(A). ";
     div1.appendChild(span1);
     let img1 = document.createElement("img");
     img1.src = "/images/download (1).jpg";
     div1.appendChild(img1);
     let input1 = document.createElement("input");
     input1.type = "checkbox";
     div1.appendChild(input1);
    let span2 = document.createElement("span");
    span2.innerHTML = "(B). ";
     div2.appendChild(span2);
     let img2 = document.createElement("img");
     img2.src = "/images/the-sad-lonely-bird-sitting-on-a-tree-branch-2J6FWY9.jpg";
     div2.appendChild(img2);
     let input2 = document.createElement("input");
     input2.type = "checkbox";
     div2.appendChild(input2);
    let span3 = document.createElement("span");
    span3.innerHTML = "(C). ";
     div3.appendChild(span3);
     let img3 = document.createElement("img");
     img3.src = "/images/images.jpg";
     div3.appendChild(img3);
     let input3 = document.createElement("input");
     input3.type = "checkbox";
     div3.appendChild(input3);
    let span4 = document.createElement("span");
    span4.innerHTML = "(D). ";
     div4.appendChild(span4);
     let img4 = document.createElement("img");
     img4.src = "/images/download.jpg";
     div4.appendChild(img4);
     let input4 = document.createElement("input");
     input4.type = "checkbox";
     div4.appendChild(input4);
     console.log("true");
}
