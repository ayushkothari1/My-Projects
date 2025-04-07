const light = document.getElementById("light");
const onButton = document.getElementById("on-btn");
const offButton = document.getElementById("off-btn");

onButton.addEventListener("click", function() {
    light.style.background = "yellow"; // Simulate turning on the bulb
    onButton.style.display = "none";
    offButton.style.display = "block";
});

offButton.addEventListener("click", function() {
    setTimeout(() => {
        offButton.style.display = "none";
        onButton.style.display = "block";
        light.style.background = "wheat"; // Simulate turning off the bulb
    }); // Delay to simulate turning off
});
