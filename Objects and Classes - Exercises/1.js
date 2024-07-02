function printEmployees(inputArray) {
    let employees = {};

    for (let name of inputArray) {
        let personalNum = name.length;
        employees[name] = personalNum;
    }

    // Output the formatted results
    for (let name in employees) {
        let personalNum = employees[name];
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
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
