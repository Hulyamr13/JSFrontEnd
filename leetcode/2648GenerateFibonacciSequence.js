/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0;
    let b = 1;
    yield a;
    yield b;

    while (true) {
        let next = a + b;
        yield next;
        a = b;
        b = next;
    }
};

// Example usage:
const gen = fibGenerator();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 1 (Fibonacci number after 1)
console.log(gen.next().value); // Output: 2 (Fibonacci number after 1)
console.log(gen.next().value); // Output: 3 (Fibonacci number after 2)
