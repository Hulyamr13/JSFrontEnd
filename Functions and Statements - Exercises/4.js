function oddAndEvenSum(number) {
    let numString = number.toString(); // Convert number to string
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numString) {
        let digitNum = parseInt(digit); // Convert character to number
        if (digitNum % 2 === 0) {
            evenSum += digitNum;
        } else {
            oddSum += digitNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Examples
oddAndEvenSum(1000435);               // Output: Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234);      // Output: Odd sum = 54, Even sum = 22
