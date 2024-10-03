document.getElementById("btn").addEventListener("click", function() {
    const num1 = parseFloat(document.querySelector(".num1").value);
    const num2 = parseFloat(document.querySelector(".num2").value);
    const operation = document.getElementById("selectOp").value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    switch (operation) {
        case "plus":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        default:
            alert("Please select an operation");
            return;
    }

    document.querySelector(".result").innerText = `Result: ${result}`;
});
