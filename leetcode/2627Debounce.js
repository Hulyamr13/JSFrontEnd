/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
let debounce = function(fn, t) {
    let timeout;

    return function(...args) {
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */