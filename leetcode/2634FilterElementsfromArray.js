/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const ans = [];
    for (let i = 0; i < arr.length; ++i) {
        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
};

// Example usage:
const arr = [1, 2, 3, 4, 5];

const isEven = (n) => n % 2 === 0;

const filtered = filter(arr, isEven);
console.log(filtered); // Output: [2, 4]