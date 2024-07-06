/**
 * @return {Function}
 */
function createHelloWorld() {
    return function () {
        return 'Hello World';
    };
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
