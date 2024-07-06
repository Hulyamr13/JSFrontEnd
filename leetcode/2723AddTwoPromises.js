/**
 * @param {Promise<any>} promise1
 * @param {Promise<any>} promise2
 * @return {Promise<number>}
 */
var addTwoPromises = async function(promise1, promise2) {
    return (await promise1) + (await promise2);
};

/**
 * Example usage:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
