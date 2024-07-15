function phoneBook(input) {
    let phoneBookEntries = {};

    input.forEach(entry => {
        let [name, phoneNumber] = entry.split(' ');

        phoneBookEntries[name] = phoneNumber;
    });

    for (let name in phoneBookEntries) {
        console.log(`${name} -> ${phoneBookEntries[name]}`);
    }
}

function phoneBook(input) {
    const phoneBookEntries = {};

    input.forEach(entry => {
        const [name, phoneNumber] = entry.split(' ');
        phoneBookEntries[name] = phoneNumber;
    });

    console.log(
        Object.entries(phoneBookEntries)
            .map(([name, phoneNumber]) => `${name} -> ${phoneNumber}`)
            .join('\n')
    );
}


function phoneBook(input) {
    const phoneBookEntries = input.reduce((acc, entry) => {
        const [name, phoneNumber] = entry.split(' ');
        acc[name] = phoneNumber;
        return acc;
    }, {});

    for (let name in phoneBookEntries) {
        console.log(`${name} -> ${phoneBookEntries[name]}`);
    }
}



function phoneBook(input) {
    const phoneBookEntries = {};

    input.forEach(entry => {
        const [name, phoneNumber] = entry.split(' ');
        phoneBookEntries[name] = phoneNumber;
    });

    Object.entries(phoneBookEntries).forEach(([name, phoneNumber]) => {
        console.log(`${name} -> ${phoneNumber}`);
    });
}



// Test cases
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);

phoneBook([
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);
