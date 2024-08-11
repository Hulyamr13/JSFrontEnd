function spaceExploration(commands) {
    const n = parseInt(commands[0]);
    const astronauts = {};

    for (let i = 1; i <= n; i++) {
        const [name, oxygen, energy] = commands[i].split(' ');
        astronauts[name] = {
            oxygen: parseInt(oxygen),
            energy: parseInt(energy)
        };
    }

    for (let i = n + 1; i < commands.length; i++) {
        const command = commands[i];
        if (command === "End") {
            break;
        }

        const [action, name, valueStr] = command.split(' - ');
        const value = parseInt(valueStr);

        if (action === "Explore") {
            if (astronauts[name].energy >= value) {
                astronauts[name].energy -= value;
                console.log(`${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`);
            } else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        } else if (action === "Refuel") {
            const originalEnergy = astronauts[name].energy;
            astronauts[name].energy = Math.min(200, astronauts[name].energy + value);
            const recovered = astronauts[name].energy - originalEnergy;
            console.log(`${name} refueled their energy by ${recovered}!`);
        } else if (action === "Breathe") {
            const originalOxygen = astronauts[name].oxygen;
            astronauts[name].oxygen = Math.min(100, astronauts[name].oxygen + value);
            const recovered = astronauts[name].oxygen - originalOxygen;
            console.log(`${name} took a breath and recovered ${recovered} oxygen!`);
        }
    }

    for (const [name, stats] of Object.entries(astronauts)) {
        console.log(`Astronaut: ${name}, Oxygen: ${stats.oxygen}, Energy: ${stats.energy}`);
    }
}

const commands1 = [
    '3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'
];
spaceExploration(commands1);

console.log("\n---\n");

const commands2 = [
    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End'
];
spaceExploration(commands2);
