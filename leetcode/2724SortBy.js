/**
 * Sorts an array based on the result of applying the given function to each element.
 * @param {Array} arr The array to be sorted.
 * @param {Function} fn The function used to extract the sorting key from each element.
 *                      Should return a value that can be compared using "<" and ">" operators.
 * @return {Array} The sorted array.
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};