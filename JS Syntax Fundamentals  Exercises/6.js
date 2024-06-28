function sumDigits(number) {
    let numberStr = number.toString();
    let sum = 0;

    for (let digit of numberStr) {
        sum += Number(digit);
    }

    console.log(sum);
}

// Примери
sumDigits(245678);  // Изход: 32
sumDigits(97561);   // Изход: 28
sumDigits(543);     // Изход: 12
