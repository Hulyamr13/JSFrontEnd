function cafeteria(list) {
    const cafe = {};
    const n = Number(list.shift());

    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = list.shift().split(' ');
        cafe[name] = {
            shift: shift,
            drinks: coffeeTypes.split(',')
        };
    }

    const cafeCommands = {
        Prepare: (name, shift, type) => {
            const barista = cafe[name];
            if (barista.shift === shift && barista.drinks.includes(type)) {
                return `${name} has prepared a ${type} for you!`;
            } else {
                return `${name} is not available to prepare a ${type}.`;
            }
        },
        "Change Shift": (name, newShift) => {
            cafe[name].shift = newShift;
            return `${name} has updated his shift to: ${newShift}`;
        },
        Learn: (name, newType) => {
            const barista = cafe[name];
            if (barista.drinks.includes(newType)) {
                return `${name} knows how to make ${newType}.`;
            } else {
                barista.drinks.push(newType);
                return `${name} has learned a new coffee type: ${newType}.`;
            }
        }
    };

    let input = list.shift();
    while (input !== 'Closed') {
        const [command, ...values] = input.split(' / ');
        console.log(cafeCommands[command](...values));
        input = list.shift();
    }

    for (const name in cafe) {
        const { shift, drinks } = cafe[name];
        console.log(`Barista: ${name}, Shift: ${shift}, Drinks: ${drinks.join(', ')}`);
    }
}

// Example usage:
// cafeteria(['3', 'Alice day Espresso,Cappuccino', 'Bob night Latte,Mocha', 'Carol day Americano,Mocha', 'Prepare / Alice / day / Espresso', 'Change Shift / Bob / night', 'Learn / Carol / Latte', 'Learn / Bob / Latte', 'Prepare / Bob / night / Latte', 'Closed']);

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Change Shift / Bob / day',
    'Prepare / Carol / day / Cappuccino',
    'Learn / Bob / Mocha',
    'Closed']);
