function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    };

    let jsonString = JSON.stringify(person);

    console.log(jsonString);
}

// Test cases
convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');
