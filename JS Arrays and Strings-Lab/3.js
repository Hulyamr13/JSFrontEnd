function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of arr) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);
}

// Examples
evenOddSubtraction([1, 2, 3, 4, 5, 6]);   // Output: 3
evenOddSubtraction([3, 5, 7, 9]);        // Output: -24
evenOddSubtraction([2, 4, 6, 8, 10]);    // Output: 30
