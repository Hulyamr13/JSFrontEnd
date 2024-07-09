function delayAll(functions, ms) {
    return functions.map(fn => {
        return async function () {
            await new Promise(resolve => setTimeout(resolve, ms));
            return fn();
        };
    });
}

// Example usage:
const functions = [
    () => Promise.resolve("Function 1"),
    () => Promise.resolve("Function 2"),
    () => Promise.resolve("Function 3")
];

const delayedFunctions = delayAll(functions, 1000);

// Execute each delayed function
Promise.all(delayedFunctions.map(fn => fn())).then(results => {
    console.log(results); // ["Function 1", "Function 2", "Function 3"] after 1000ms delay
});