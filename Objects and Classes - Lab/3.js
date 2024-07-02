function convertAndPrint(jsonString) {
    let obj = JSON.parse(jsonString);

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Test cases
convertAndPrint('{"name": "George", "age": 40, "town": "Sofia"}');
console.log(); // Empty line for separation
convertAndPrint('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
