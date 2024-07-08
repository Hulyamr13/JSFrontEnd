/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (acc[key]) {
            acc[key].push(item);
        } else {
            acc[key] = [item];
        }
        return acc;
    }, {});
};

/**
 * Example usage:
 * [1, 2, 3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
console.log(['apple', 'banana', 'apricot', 'blueberry'].groupBy(item => item[0]));
// {"a":["apple","apricot"], "b":["banana","blueberry"]}