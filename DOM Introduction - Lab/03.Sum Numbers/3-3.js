function calc() {
    const { value: num1 } = document.getElementById('num1');
    const { value: num2 } = document.getElementById('num2');

    const sum = parseFloat(num1) + parseFloat(num2);

    document.getElementById('sum').value = sum;
}
