/**
 * @param {MultidimensionalArray} arr
 * @return {Generator<number, void, unknown>}
 */
var inorderTraversal = function* (arr) {
    for (const e of arr) {
        if (Array.isArray(e)) {
            yield* inorderTraversal(e);
        } else {
            yield e;
        }
    }
};

// Example usage:
const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
