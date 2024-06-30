function sumAndSubtract(num1, num2, num3) {
    function sum(a, b) {
        return a + b;
    }

    let sumResult = sum(num1, num2);
    let result = sumResult - num3;

    console.log(result);
}

// Examples
sumAndSubtract(23, 6, 10);   // Output: 19
sumAndSubtract(1, 17, 30);   // Output: -12
sumAndSubtract(42, 58, 100); // Output: 0
