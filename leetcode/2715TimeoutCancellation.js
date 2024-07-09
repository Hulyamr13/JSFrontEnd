/**
 * @param {Function} fn - The function to be executed after the delay.
 * @param {Array} args - The arguments to be passed to the function `fn`.
 * @param {number} t - The time delay in milliseconds before executing `fn`.
 * @returns {Function} - Returns a cancellation function that clears the timeout.
 */
var cancellable = function(fn, args, t) {
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    return () => {
        clearTimeout(timer);
    };
};

/**
 * Example usage:
 */
const result = [];

const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);