function oddAndEvenSum(number) {
    let oddSum = 0, evenSum = 0;
    for (let digit of number.toString()) {
        let digitNum = parseInt(digit);
        if (digitNum % 2 === 0) {
            evenSum += digitNum;
        } else {
            oddSum += digitNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Примеры использования
oddAndEvenSum(1000435);               // Вывод: Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234);      // Вывод: Odd sum = 54, Even sum = 22
