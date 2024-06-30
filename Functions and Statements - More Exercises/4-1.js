function crystalProcess(inputArray) {
    const target = inputArray[0];
    const chunks = inputArray.slice(1);

    const operations = [
        { name: 'Cut', func: value => value / 4 },
        { name: 'Lap', func: value => value * 0.8 },
        { name: 'Grind', func: value => value - 20 },
        { name: 'Etch', func: value => value - 2 }
    ];

    function processChunk(amount) {
        let operationsNeeded = [];
        let currentThickness = amount;

        for (let operation of operations) {
            let count = 0;
            while (operation.func(currentThickness) >= target - 1) {
                currentThickness = operation.func(currentThickness);
                count++;
            }
            if (count > 0) {
                operationsNeeded.push({ name: operation.name, count });
            }
        }

        let xRayNeeded = currentThickness === target - 1;

        return { operations: operationsNeeded, xRayNeeded };
    }

    chunks.forEach(chunk => {
        console.log(`Processing chunk ${chunk} microns`);

        const { operations, xRayNeeded } = processChunk(chunk);

        operations.forEach(operation => {
            console.log(`${operation.name} x${operation.count}`);
            console.log('Transporting and washing');
        });

        if (xRayNeeded) {
            console.log('X-ray x1');
        }

        console.log(`Finished crystal ${target} microns`);
    });
}

// Example usage:
crystalProcess([1375, 50000]);
console.log();
crystalProcess([1000, 4000, 8100]);
