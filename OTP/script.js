const otp = document.querySelector(".OTP");
const button = document.querySelector(".button");
const length = 8;
const numbers = "0123456789";

button.addEventListener("click", function () {
  let code = "";
  while (length > code.length) {
    code += numbers[Math.floor(Math.random() * numbers.length)];
  }
  otp.value = code;
});
