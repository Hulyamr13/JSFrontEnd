/**
 * Partially applies arguments to a function, using '_' as placeholders.
 *
 * @param {Function} fn - The function to partially apply arguments to.
 * @param {Array} args - The arguments to partially apply, using '_' as placeholders.
 * @return {Function} - A new function with partially applied arguments.
 */
function partial(fn, args) {
    return function (...restArgs) {
        const finalArgs = args.slice(); // Create a copy of the initial arguments array
        let restIndex = 0;

        // Replace placeholders with arguments from restArgs
        for (let i = 0; i < finalArgs.length; i++) {
            if (finalArgs[i] === '_') {
                finalArgs[i] = restArgs[restIndex++];
            }
        }

        // Append any remaining arguments from restArgs
        while (restIndex < restArgs.length) {
            finalArgs.push(restArgs[restIndex++]);
        }

        return fn(...finalArgs);
    };
}

// Example usage:
function add(a, b, c) {
    return a + b + c;
}

const partialAdd = partial(add, [1, '_', 3]);
console.log(partialAdd(2)); // Output: 6

const partialAdd2 = partial(add, ['_', '_', 3]);
console.log(partialAdd2(1, 2)); // Output: 6
