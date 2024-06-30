function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(result.toFixed(2));
}

// Examples
calculator(5, '+', 10);   // Output: 15.00
calculator(25.5, '-', 3); // Output: 22.50
calculator(10, '*', 2);   // Output: 20.00
calculator(8, '/', 4);    // Output: 2.00
calculator(5, '/', 0);    // Output: Error: Division by zero
calculator(7, '%', 3);    // Output: Invalid operator
