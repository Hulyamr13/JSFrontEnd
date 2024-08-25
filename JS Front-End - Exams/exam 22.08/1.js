function processCommands(input) {
    if (Array.isArray(input)) {
        input = input.join('\n');
    }

    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);

    const chemicals = {};
    const formulas = {};

    for (let i = 1; i <= n; i++) {
        const [name, quantity] = lines[i].split(' # ');
        chemicals[name] = parseInt(quantity);
        formulas[name] = null;
    }

    for (let i = n + 1; i < lines.length; i++) {
        const command = lines[i].trim();
        if (command === 'End') {
            break;
        }

        const parts = command.split(' # ');
        const action = parts[0];

        if (action === 'Mix') {
            const chem1 = parts[1];
            const chem2 = parts[2];
            const amount = parseInt(parts[3]);

            if (chemicals[chem1] !== undefined && chemicals[chem2] !== undefined) {
                if (chemicals[chem1] >= amount && chemicals[chem2] >= amount) {
                    chemicals[chem1] -= amount;
                    chemicals[chem2] -= amount;
                    console.log(`${chem1} and ${chem2} have been mixed. ${amount} units of each were used.`);
                } else {
                    console.log(`Insufficient quantity of ${chem1}/${chem2} to mix.`);
                }
            } else {
                console.log(`One or both chemicals are not available in the lab.`);
            }

        } else if (action === 'Replenish') {
            const chem = parts[1];
            const amount = parseInt(parts[2]);

            if (chemicals[chem] !== undefined) {
                const newQuantity = chemicals[chem] + amount;
                if (newQuantity > 500) {
                    const addedAmount = 500 - chemicals[chem];
                    chemicals[chem] = 500;
                    console.log(`${chem} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
                } else {
                    chemicals[chem] = newQuantity;
                    console.log(`${chem} quantity increased by ${amount} units!`);
                }
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }

        } else if (action === 'Add Formula') {
            const chem = parts[1];
            const formula = parts[2];

            if (chemicals[chem] !== undefined) {
                formulas[chem] = formula;
                console.log(`${chem} has been assigned the formula ${formula}.`);
            } else {
                console.log(`The Chemical ${chem} is not available in the lab.`);
            }
        }
    }

    for (const [name, quantity] of Object.entries(chemicals)) {
        if (formulas[name]) {
            console.log(`Chemical: ${name}, Quantity: ${quantity}, Formula: ${formulas[name]}`);
        } else {
            console.log(`Chemical: ${name}, Quantity: ${quantity}`);
        }
    }
}

// Example usage with an array input
const inputArray = [
    '4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End'
];

processCommands(inputArray);
