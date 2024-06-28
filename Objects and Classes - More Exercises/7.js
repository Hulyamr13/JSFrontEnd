function storeSequences(inputArray) {
    const uniqueArrays = new Set();

    for (const element of inputArray) {
        const current = JSON.parse(element);
        const sorted = current.sort((a, b) => b - a);
        uniqueArrays.add(JSON.stringify(sorted));
    }

    const sortedUniqueArrays = Array.from(uniqueArrays).sort((a, b) => {
        const arrayA = JSON.parse(a);
        const arrayB = JSON.parse(b);
        return arrayA.length - arrayB.length;
    });

    sortedUniqueArrays.forEach(arrayString => {
        const array = JSON.parse(arrayString);
        console.log(`[${array.join(', ')}]`);
    });
}


// Test cases
let input1 = [
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
];
storeSequences(input1);

console.log();

let input2 = [
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
];
storeSequences(input2);
