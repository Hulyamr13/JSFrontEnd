function divideFactorials(num1, num2) {
    let findFactorial = function(num) {
        return Array.from({length: num}, (_, index) => index + 1)
                    .reduce((acc, curr) => acc * curr, 1);
    };

    let factorial1 = findFactorial(num1);
    let factorial2 = findFactorial(num2);
    let result = factorial1 / factorial2;

    console.log(result.toFixed(2));
}

// Examples
divideFactorials(5, 2);  // Output: 60.00
divideFactorials(6, 2);  // Output: 360.00
