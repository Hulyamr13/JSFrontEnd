function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(sum);
}

// Примери
sumDigits(245678);  // Изход: 32
sumDigits(97561);   // Изход: 28
sumDigits(543);     // Изход: 12
