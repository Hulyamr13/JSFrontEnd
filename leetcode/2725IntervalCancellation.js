/**
 * Executes the given function periodically with specified arguments,
 * and returns a cancellation function.
 * @param {Function} fn The function to be executed periodically.
 * @param {Array} args The arguments to be passed to the function.
 * @param {number} t The interval in milliseconds at which the function should be called.
 * @return {Function} A cancellation function that stops the periodic execution.
 */
var cancellable = function(fn, args, t) {
    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    return () => clearInterval(intervalId);
};

/**
 * Example usage:
 */
const result = [];

// Define the function and arguments
const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

// Track start time for measuring elapsed time
const start = performance.now();

// Function to log the results with elapsed time
const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({"time": diff, "returned": fn(...argsArr)});
};

// Start periodic execution and get cancellation function
const cancel = cancellable(log, args, t);

// Schedule cancellation after cancelTimeMs milliseconds
setTimeout(cancel, cancelTimeMs);

// Log the results after cancelTimeMs + t + 15 milliseconds
setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15);