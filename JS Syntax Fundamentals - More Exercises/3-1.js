function calculator(num1, operator, num2) {
    let result = operator === '+' ? num1 + num2 :
                 operator === '-' ? num1 - num2 :
                 operator === '*' ? num1 * num2 :
                 operator === '/' && num2 !== 0 ? num1 / num2 :
                 'Invalid operation';

    console.log(typeof result === 'number' ? result.toFixed(2) : result);
}
