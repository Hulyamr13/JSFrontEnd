/**
 * @typedef {Object} FulfilledObj
 * @property {'fulfilled'} status
 * @property {string} value
 */

/**
 * @typedef {Object} RejectedObj
 * @property {'rejected'} status
 * @property {string} reason
 */

/**
 * @typedef {FulfilledObj | RejectedObj} Obj
 */

/**
 * Executes an array of functions that return promises and returns a promise that resolves with an array of results.
 * Each result object has a status of either 'fulfilled' or 'rejected'.
 *
 * @param {Function[]} functions - The array of functions that return promises.
 * @return {Promise<Obj[]>} - A promise that resolves with an array of results.
 */
function promiseAllSettled(functions) {
    return new Promise(resolve => {
        const res = [];
        let count = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => ({ status: 'fulfilled', value }))
                .catch(reason => ({ status: 'rejected', reason }))
                .then(obj => {
                    res[i] = obj;
                    if (++count === functions.length) {
                        resolve(res);
                    }
                });
        }
    });
}

// Example usage:
const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(15), 100)),
    () => new Promise((resolve, reject) => setTimeout(() => reject('Error'), 200)),
    () => new Promise(resolve => setTimeout(() => resolve('Success'), 150))
];

const time = performance.now();

const promise = promiseAllSettled(functions);

promise.then(res => {
    const out = { t: Math.floor(performance.now() - time), values: res };
    console.log(out);
    // Example output: {"t":200,"values":[{"status":"fulfilled","value":15},{"status":"rejected","reason":"Error"},{"status":"fulfilled","value":"Success"}]}
});