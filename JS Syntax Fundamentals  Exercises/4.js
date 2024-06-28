function printAndSum(start, end) {
    let sum = 0;
    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
        sum += i;
    }

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

// Примери
printAndSum(5, 10);
// Изход:
// 5 6 7 8 9 10
// Sum: 45

printAndSum(0, 26);
// Изход:
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// Sum: 351

printAndSum(50, 60);
// Изход:
// 50 51 52 53 54 55 56 57 58 59 60
// Sum: 605
