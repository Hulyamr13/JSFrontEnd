/**
 * Adds a custom forEach method to the Array prototype.
 *
 * @param {Function} callback - The function to be executed for each element in the array.
 * @param {any} context - The value to be used as `this` when executing the callback.
 */
Array.prototype.forEach = function (callback, context) {
    for (let i = 0; i < this.length; ++i) {
        callback.call(context, this[i], i, this);
    }
};

// Example usage:
const arr = [1, 2, 3];
const callback = function (val, i, arr) {
    arr[i] = val * 2;
};
const context = { context: true };

arr.forEach(callback, context);

console.log(arr); // Output: [2, 4, 6]
