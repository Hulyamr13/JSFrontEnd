function printMatrix(n) {
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(n); // Push the number n into the row array
        }
        console.log(row.join(' ')); // Print the row as a string joined by spaces
    }
}

// Examples
printMatrix(3);
// Output:
// 3 3 3
// 3 3 3
// 3 3 3

printMatrix(7);
// Output:
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7
// 7 7 7 7 7 7 7

printMatrix(2);
// Output:
// 2 2
// 2 2
