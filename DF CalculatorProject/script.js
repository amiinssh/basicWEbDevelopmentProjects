function calculateMaturityAmount() {
  const principle = parseFloat(document.getElementById("principle").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const tenur = parseFloat(document.getElementById("tenur").value);

  const maturityAmount = principle + (principle * interestRate * tenur) / 100;

  document.getElementById(
    "result"
  ).innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);
