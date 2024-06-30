function listOfNames(names) {
    names.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}


// Example usage:
listOfNames(["John", "Bob", "Christina", "Ema"]);
// Output:
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John
