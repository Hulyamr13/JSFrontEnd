function findLargestNumber(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);
}

// Examples:
findLargestNumber(5, -3, 16);        // Output: The largest number is 16.
findLargestNumber(-3, -5, -22.5);    // Output: The largest number is -3.
