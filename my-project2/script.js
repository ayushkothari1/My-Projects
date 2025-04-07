const section1 = document.querySelector(".section1");
const container = document.querySelector(".container");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const rules = document.querySelector(".rules");
const got = document.querySelector(".got");
const start = document.querySelector(".start");
const right = document.querySelector(".true");
const right2 = document.querySelector(".true2");
let wrong = document.querySelectorAll(".wrong");
let none = document.querySelectorAll(".none");
let imgT = document.querySelector(".imgT");
let imgT2 = document.querySelector(".imgT2");
let imgF = document.querySelectorAll(".imgF");
let lose = document.querySelector(".lose");
const again = document.querySelector(".again");
const home = document.querySelector(".home");
let next1 = document.querySelector(".next1");
let next2 = document.querySelector(".next2");

function showRules() {
  section1.style.display = "none";
  section2.style.display = "block";
}

function backToHome() {
  section2.style.display = "none";
  section1.style.display = "block";
}

got.addEventListener("click", backToHome);
function gameStart(e) {
  section1.style.display = "none";
  section3.style.display = "block";
  console.log("welcome");
}

start.addEventListener("click", gameStart);

function rightAnswer() {
  next1.style.display = "block";
  none.forEach(function (e) {
    e.style.display = "none";
  });
  imgT.style.background = "green";
imgF.forEach(function(color){
  color.style.background = "red";
})

}

wrong.forEach(function(e){
  e.addEventListener("click", function(){
    section3.style.display = "none";
    lose.style.display = "block";
  })
  
})
right.addEventListener("click", rightAnswer);


again.addEventListener("click", function(){
  lose.style.display = "none"
    section3.style.display = "block";
})

next1.addEventListener("click", function(){
  section3.style.display = "none";
  section4.style.display = "block";
})

home.addEventListener("click", function(){
  lose.style.display = "none";

   section1.style.display = "block";
})

right2.addEventListener("click", function(){
  imgT2.style.background = "green";
  none.forEach(function (e) {
    e.style.display = "none";
  });
  imgT.style.background = "green";
imgF.forEach(function(color){
  color.style.background = "red";
})
next2.style.display = "block";
})
