function isPerfectNumber(num) {
    if (num <= 1) {
        return "It's not so perfect.";
    }

    let sum = 1; // Start with 1 because 1 is always a divisor
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) { // Avoid adding the number itself twice for perfect squares
                sum += num / i;
            }
        }
    }

    if (sum === num) {
        return "We have a perfect number!";
    } else {
        return "It's not so perfect.";
    }
}

// Examples
console.log(isPerfectNumber(6));     // Output: We have a perfect number!
console.log(isPerfectNumber(28));    // Output: We have a perfect number!
console.log(isPerfectNumber(1236498));// Output: It's not so perfect.
