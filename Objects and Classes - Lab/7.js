function addressBook(input) {
    let addressBook = {};

    input.forEach(entry => {
        let [name, address] = entry.split(':');
        addressBook[name] = address;
    });

    let sortedNames = Object.keys(addressBook).sort();

    sortedNames.forEach(name => {
        console.log(`${name} -> ${addressBook[name]}`);
    });
}

function addressBook(input) {
    const addressBook = {};

    input.forEach(entry => {
        const [name, address] = entry.split(':');
        addressBook[name] = address;
    });

    Object.keys(addressBook)
        .sort()
        .forEach(name => console.log(`${name} -> ${addressBook[name]}`));
}


// Test cases
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

console.log();

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);
