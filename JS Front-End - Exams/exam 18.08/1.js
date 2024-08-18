function manageSuperheroes(input) {
    let n = parseInt(input[0]);
    let superheroes = {};

    for (let i = 1; i <= n; i++) {
        let [name, superpowers, energy] = input[i].split('-');
        superheroes[name] = {
            superpowers: new Set(superpowers.split(',')),
            energy: parseInt(energy)
        };
    }

    for (let i = n + 1; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine === 'Evil Defeated!') {
            break;
        }

        let [command, name, arg1, arg2] = commandLine.split(' * ');
        let hero = superheroes[name];

        switch (command) {
            case 'Use Power':
                if (hero && hero.superpowers.has(arg1) && hero.energy >= parseInt(arg2)) {
                    hero.energy -= parseInt(arg2);
                    console.log(`${name} has used ${arg1} and now has ${hero.energy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${arg1} or lacks energy!`);
                }
                break;
            case 'Train':
                if (hero) {
                    if (hero.energy < 100) {
                        let trainingEnergy = parseInt(arg1);
                        let energyGained = Math.min(trainingEnergy, 100 - hero.energy);
                        hero.energy += energyGained;
                        console.log(`${name} has trained and gained ${energyGained} energy!`);
                    } else {
                        console.log(`${name} is already at full energy!`);
                    }
                }
                break;
            case 'Learn':
                if (hero) {
                    if (hero.superpowers.has(arg1)) {
                        console.log(`${name} already knows ${arg1}.`);
                    } else {
                        hero.superpowers.add(arg1);
                        console.log(`${name} has learned ${arg1}!`);
                    }
                }
                break;
        }
    }

    for (const [name, { superpowers, energy }] of Object.entries(superheroes)) {
        console.log(`Superhero: ${name}`);
        console.log(`- Superpowers: ${[...superpowers].join(', ')}`);
        console.log(`- Energy: ${energy}`);
    }
}

// Example usage:
manageSuperheroes([
    "3",
    "Iron Man-Repulsor Beams,Flight-80",
    "Thor-Lightning Strike,Hammer Throw-10",
    "Hulk-Super Strength-60",
    "Use Power * Iron Man * Flight * 30",
    "Train * Thor * 20",
    "Train * Hulk * 50",
    "Learn * Hulk * Thunderclap",
    "Use Power * Hulk * Thunderclap * 70",
    "Evil Defeated!"
]);

manageSuperheroes([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
]);
