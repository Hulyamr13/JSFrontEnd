function calculateCircleArea(input) {
    if (typeof input === 'number') {
        let area = Math.PI * input ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

// Примери:
calculateCircleArea(5);    // Output: 78.54
calculateCircleArea('name'); // Output: We can not calculate the circle area, because we receive a string.
