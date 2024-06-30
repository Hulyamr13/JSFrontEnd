function palindromeIntegers(numbers) {
    for (let num of numbers) {
        let numStr = num.toString();
        let reversedStr = numStr.split('').reverse().join('');

        if (numStr === reversedStr) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

// Examples
palindromeIntegers([123, 323, 421, 121]);  // Output: false true false true
palindromeIntegers([32, 2, 232, 1010]);    // Output: false true true false
