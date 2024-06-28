function cookingByNumbers(start, op1, op2, op3, op4, op5) {
    let number = Number(start);
    const operations = [op1, op2, op3, op4, op5];

    operations.forEach(operation => {
        if (operation === 'chop') {
            number /= 2;
        } else if (operation === 'dice') {
            number = Math.sqrt(number);
        } else if (operation === 'spice') {
            number += 1;
        } else if (operation === 'bake') {
            number *= 3;
        } else if (operation === 'fillet') {
            number *= 0.8;
        }
        console.log(number);
    });
}

// Примери
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// Изход: 16, 8, 4, 2, 1

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// Изход: 3, 4, 2, 6, 4.8
