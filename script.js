function checkDivisibility() {
    var number = document.getElementById("inputNumber").value;
    var resultMessage = document.getElementById("result");

    if (number % 3 === 0) {
        resultMessage.textContent = "Number is divisible by 3";
    } else {
        resultMessage.textContent = "Number is not divisible by 3";
    }
}
