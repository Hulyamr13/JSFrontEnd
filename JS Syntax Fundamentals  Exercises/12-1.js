function cookingByNumbers(start, op1, op2, op3, op4, op5) {
    let number = Number(start);
    const operations = [op1, op2, op3, op4, op5];

    const actions = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    };

    operations.forEach(operation => {
        number = actions[operation](number);
        console.log(number);
    });
}

// Примери
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// Изход: 16, 8, 4, 2, 1

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// Изход: 3, 4, 2, 6, 4.8
