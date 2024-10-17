const calculateLoan = () => {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("interest").value;
  let months = document.getElementById("months").value;

  let totalInterest = (amount * (interest * 0.01));
  let totalPayment = parseFloat(amount) + parseFloat(totalInterest);
  let monthsPayment = totalPayment / months;

  document.getElementById("result").innerHTML = `
    <h2>Results: </h2>
    <h4>Total payment: ${parseFloat(totalPayment).toFixed(2)}</h4>
    <h4>Monthly payment: ${parseFloat(monthsPayment).toFixed(2)}</h4>
    <h4>Total Interest: ${parseFloat(totalInterest).toFixed(2)}</h4>
  `;
};
