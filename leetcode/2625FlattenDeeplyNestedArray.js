/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) {
        return arr;
    }
    const result = [];

    const flatten = (numbers, depth = 0) => {
        for (let ele of numbers) {
            if (Array.isArray(ele) && depth < n) {
                flatten(ele, depth + 1); // Recursively flatten nested arrays
            } else {
                result.push(ele); // Push non-array elements into the result
            }
        }
    };

    flatten(arr);
    return result;
};
