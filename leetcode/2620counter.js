/**
 * Creates a counter function starting from the given number.
 * @param {number} n - The starting number for the counter.
 * @return {Function} A function that returns the next number in the sequence each time it is called.
 */
let createCounter = function(n) {
    // Initialize the counter with the starting value n
    let counter = n;

    // Return the counter function
    return function() {
        // Return the current value of the counter and then increment it
        return counter++;
    };
};

/**
 * Example usage:
 */
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
