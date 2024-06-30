function reverseAndPrint(n, arr) {
    let reversedArray = [];

    for (let i = 0; i < n; i++) {
        reversedArray.push(arr[i]);
    }

    reversedArray.reverse();
    console.log(reversedArray.join(' '));
}

// Examples
reverseAndPrint(3, [10, 20, 30, 40, 50]);    // Output: 30 20 10
reverseAndPrint(4, [-1, 20, 99, 5]);         // Output: 5 99 20 -1
reverseAndPrint(2, [66, 43, 75, 89, 47]);    // Output: 43 66
