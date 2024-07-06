/**
 * @param {Array<Function>} functions - An array of functions that return Promises.
 * @return {Promise<any[]>} - A Promise that resolves to an array of results from all Promises.
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let cnt = 0;
        const ans = new Array(functions.length);

        for (let i = 0; i < functions.length; ++i) {
            const f = functions[i];
            f()
                .then(res => {
                    ans[i] = res;
                    cnt++;
                    if (cnt === functions.length) {
                        resolve(ans);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        }
    });
};

/**
 * Example usage:
 */
const promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]
