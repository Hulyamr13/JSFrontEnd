/**
 * Adds an `upperBound` method to the Array prototype.
 * The `upperBound` method returns the last index of the target element in the array.
 * @param {number} target - The target element to search for.
 * @return {number} - The last index of the target element, or -1 if not found.
 */
Array.prototype.upperBound = function (target) {
    return this.lastIndexOf(target);
};

// Example usage:
console.log([3, 4, 5].upperBound(5)); // Output: 2
console.log([1, 4, 5].upperBound(2)); // Output: -1
console.log([3, 4, 6, 6, 6, 6, 7].upperBound(6)); // Output: 5