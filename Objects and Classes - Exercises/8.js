function parkingLot(input) {
    let parkedCars = new Set();

    for (let i = 0; i < input.length; i++) {
        let [direction, carNumber] = input[i].split(', ');

        if (direction === 'IN') {
            parkedCars.add(carNumber);
        } else if (direction === 'OUT') {
            parkedCars.delete(carNumber);
        }
    }

    let sortedCars = [...parkedCars].sort((a, b) => a.localeCompare(b));

    if (sortedCars.length > 0) {
        console.log(sortedCars.join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}

// Test cases
let input1 = [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
];

let input2 = [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
];

console.log("Test case 1:");
parkingLot(input1);

console.log("\nTest case 2:");
parkingLot(input2);
