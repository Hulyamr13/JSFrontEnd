/**
 * Extends the String prototype to include a replicate method.
 *
 * @param {number} times - The number of times to replicate the string.
 * @return {string} - The replicated string.
 */
String.prototype.replicate = function (times) {
    return new Array(times).fill(this).join('');
};

// Example usage:
console.log('abc'.replicate(3)); // 'abcabcabc'
console.log('xyz'.replicate(2)); // 'xyzxyz'
