/**
 * @callback CallbackFn
 * @param {function(number, string): void} next
 * @param {...number} args
 */

/**
 * @typedef {function(...number): Promise<number>} Promisified
 */

/**
 * @param {CallbackFn} fn
 * @return {Promisified}
 */
function promisify(fn) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            fn(
                (data, error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                },
                ...args,
            );
        });
    };
}

/**
 * Example usage:
 */
const asyncFunc = promisify(callback => callback(42));
asyncFunc().then(console.log); // 42