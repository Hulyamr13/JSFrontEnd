function mathOperations(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
        default: console.log("Invalid operator"); return;
    }

    console.log(result);
}

// Примери:
mathOperations(5, 6, '+');     // Output: 11
mathOperations(3, 5.5, '*');   // Output: 16.5
