function specialSort(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    while (arr.length) {
        result.push(arr.shift());
        if (arr.length) {
            result.push(arr.pop());
        }
    }
    return result;
}

// Example usage:
console.log(specialSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));  // Output: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
