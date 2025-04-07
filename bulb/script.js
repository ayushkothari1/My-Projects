const light = document.querySelector(".light");
const on = document.querySelector(".on");
const off = document.querySelector(".off");

on.addEventListener("click", function(){
    light.style.background = "yellow";
    on.style.display = "none"
    off.style.display = "block";
})

off.addEventListener("click", function(){
        off.style.display = "none";
        on.style.display = "block";
    light.style.background = "wheat";
})