function ArrayWrapper(nums) {
    this.nums = nums;
    this.s = nums.reduce((a, b) => a + b, 0);
}

ArrayWrapper.prototype.valueOf = function() {
    return this.s;
};

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`;
};

/**
 * Usage example:
 */
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2); // Output: 10
console.log(String(obj1)); // Output: "[1,2]"
console.log(String(obj2)); // Output: "[3,4]"
