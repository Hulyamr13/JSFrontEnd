function printEmployees(inputArray) {
    inputArray.forEach(name => {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);
    });
}


printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

printEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
