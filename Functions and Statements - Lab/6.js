function signCheck(numOne, numTwo, numThree) {
    let negatives = 0;
    if (numOne < 0) {
        negatives++;
    }
    if (numTwo < 0) {
        negatives++;
    }
    if (numThree < 0) {
        negatives++;
    }

    if (negatives % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

signCheck(5, 12, -15);   // Output: Negative
signCheck(-6, -12, 14);  // Output: Positive
signCheck(-1, -2, -3);   // Output: Negative
signCheck(-5, 1, 1);     // Output: Negative
