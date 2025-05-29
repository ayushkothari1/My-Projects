const counterEl = document.querySelectorAll(".counter");

counterEl.forEach(function (counter) {
  counter.innerHTML = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counter.innerHTML;
    const dataCeil = counter.getAttribute("data-ceil");
    console.log(dataCeil);
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    if (currentNum < dataCeil) {
      counter.innerHTML = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counter.innerHTML = dataCeil;
    }
  }
});
