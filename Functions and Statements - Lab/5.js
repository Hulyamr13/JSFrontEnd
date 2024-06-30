function simpleCalculator(numOne, numTwo, operator) {
    const operations = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    };

    const operation = operations[operator];
    if (operation) {
        const result = operation(numOne, numTwo);
        console.log(result);
    } else {
        console.log('Invalid operator');
    }
}

simpleCalculator(5, 5, 'multiply');  // Output: 25
simpleCalculator(40, 8, 'divide');   // Output: 5
simpleCalculator(12, 19, 'add');     // Output: 31
simpleCalculator(50, 13, 'subtract');  // Output: 37
simpleCalculator(10, 3, 'power');    // Output: Invalid operator
