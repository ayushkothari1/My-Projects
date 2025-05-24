function calculateLoan() {
  const loanAmountValue = document.querySelector("#loan-amount").value;
  const InterestRateValue = document.querySelector("#interest-rate").value;
  const MonthsToPayValue = document.querySelector("#months-to-pay").value;
  const payment = document.querySelector(".payment");
  interest = (loanAmountValue * (InterestRateValue * 0.01)) / MonthsToPayValue;

  monthlyPayment = loanAmountValue / MonthsToPayValue + interest;
  payment.innerHTML = `Monthly Payment:${monthlyPayment}`;
}
