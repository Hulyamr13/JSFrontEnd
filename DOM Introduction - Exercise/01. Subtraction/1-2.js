function subtract() {
    const [num1, num2] = [
        document.querySelector('#firstNumber').value,
        document.querySelector('#secondNumber').value
    ];
    const result = Number(num1) - Number(num2);
    document.querySelector('#result').textContent = result;
}
