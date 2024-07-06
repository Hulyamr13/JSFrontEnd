function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        if (!cache.has(key)) {
            cache.set(key, computeResult(args));
        }

        return cache.get(key);
    };

    function computeResult(args) {
        return fn(...args);
    }
}


/**
 * Example usage:
 */
let callCount = 0;
const memoizedFn = memoize(function(a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // Output: 5
console.log(memoizedFn(2, 3)); // Output: 5
console.log(callCount); // Output: 1
