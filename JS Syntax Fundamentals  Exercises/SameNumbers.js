function sameNumbers(number) {
    let numberStr = number.toString();
    let firstDigit = numberStr[0];
    let sumOfDigits = 0;
    let allSame = true;

    for (let digit of numberStr) {
        sumOfDigits += Number(digit);
        if (digit !== firstDigit) {
            allSame = false;
        }
    }

    console.log(allSame);
    console.log(sumOfDigits);
}

// Примери
sameNumbers(2222222);  // Изход: true 14
sameNumbers(1234);     // Изход: false 10
