/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};

// Example usage:
const arr = [1, 2, 3, 4, 5];

// Example map function to double each element
const double = (n) => n * 2;

const mapped = map(arr, double);
console.log(mapped); // Output: [2, 4, 6, 8, 10]
