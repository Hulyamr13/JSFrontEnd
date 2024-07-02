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
