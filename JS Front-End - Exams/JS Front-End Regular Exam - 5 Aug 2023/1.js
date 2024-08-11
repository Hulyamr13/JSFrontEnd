function raceSimulation(inputLines) {
    const n = parseInt(inputLines[0], 10);
    const riders = new Map();

    for (let i = 1; i <= n; i++) {
        const [name, fuel, position] = inputLines[i].split('|');
        riders.set(name, {
            fuel: parseInt(fuel, 10),
            position: parseInt(position, 10),
        });
    }

    const commands = inputLines.slice(n + 1, -1);

    commands.forEach(command => {
        if (command.startsWith("StopForFuel")) {
            const [_, rider, minFuel, newPosition] = command.split(' - ');
            const minFuelInt = parseInt(minFuel, 10);
            const newPositionInt = parseInt(newPosition, 10);

            const riderData = riders.get(rider);
            if (riderData.fuel < minFuelInt) {
                riderData.position = newPositionInt;
                console.log(`${rider} stopped to refuel but lost his position, now he is ${newPositionInt}.`);
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
        } else if (command.startsWith("Overtaking")) {
            const [_, rider1, rider2] = command.split(' - ');

            const rider1Data = riders.get(rider1);
            const rider2Data = riders.get(rider2);

            if (rider1Data.position < rider2Data.position) {
                [rider1Data.position, rider2Data.position] = [rider2Data.position, rider1Data.position];
                console.log(`${rider1} overtook ${rider2}!`);
            }
        } else if (command.startsWith("EngineFail")) {
            const [_, rider, lapsLeft] = command.split(' - ');
            const lapsLeftInt = parseInt(lapsLeft, 10);

            if (riders.has(rider)) {
                riders.delete(rider);
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeftInt} laps before the finish.`);
            }
        }
    });

    for (const [rider, { position }] of riders) {
        console.log(`${rider}\n  Final position: ${position}`);
    }
}

// Example usage:
const inputLines = [
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
];

raceSimulation(inputLines);
