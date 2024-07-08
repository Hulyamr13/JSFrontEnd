/**
 * @typedef {(...params: any[]) => Promise<any>} Fn
 */

/**
 * @param {Fn} fn The async function to be time-limited
 * @param {number} t Time limit in milliseconds
 * @return {Fn} A new function with time-limiting behavior
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)),
        ]);
    };
};

// Example usage:
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log); // Output: "Time Limit Exceeded"