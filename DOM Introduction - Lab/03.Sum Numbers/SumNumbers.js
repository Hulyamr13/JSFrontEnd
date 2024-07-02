function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let parsedNum1 = parseFloat(num1);
    let parsedNum2 = parseFloat(num2);

    let sum = parsedNum1 + parsedNum2;

    document.getElementById('sum').value = sum;
}
