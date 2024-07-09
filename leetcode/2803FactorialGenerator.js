/**
 * Generator function to yield the factorial of numbers from 1 up to n.
 *
 * @param {number} n - The number up to which the factorials are generated.
 * @return {Generator<number>} - A generator that yields the factorials.
 */
function* factorial(n) {
    let ans = 1;
    if (n === 0) {
        yield 1;
        return;
    }
    for (let i = 1; i <= n; ++i) {
        ans *= i;
        yield ans;
    }
}

// Example usage:
const gen = factorial(2);
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2

const gen5 = factorial(5);
console.log(gen5.next().value); // Output: 1
console.log(gen5.next().value); // Output: 2
console.log(gen5.next().value); // Output: 6
console.log(gen5.next().value); // Output: 24
console.log(gen5.next().value); // Output: 120