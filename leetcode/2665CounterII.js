/**
 * @param {number} init
 * @return {{ increment: () => number, decrement: () => number, reset: () => number }}
 */
var createCounter = function(init) {
    let val = init;
    return {
        increment() {
            return ++val;
        },
        decrement() {
            return --val;
        },
        reset() {
            return (val = init);
        },
    };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4
