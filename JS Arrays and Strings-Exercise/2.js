function printEveryNthElement(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    return result;
}

// Example usage:
console.log(printEveryNthElement(['5', '20', '31', '4', '20'], 2));  // Output: ['5', '31', '20']
console.log(printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2));  // Output: ['dsa', 'test']
console.log(printEveryNthElement(['1', '2', '3', '4', '5'], 6));  // Output: ['1']
