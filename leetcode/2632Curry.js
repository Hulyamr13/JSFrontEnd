/**
 * @param {Function} fn
 * @return {Function}
 */
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

// Example usage:
function sum(a, b) {
    return a + b;
}

const csum = curry(sum);
console.log(csum(1)(2)); // 3