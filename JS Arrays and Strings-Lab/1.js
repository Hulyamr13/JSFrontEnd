function sumFirstAndLast(arr) {
    let sum = arr[0] + arr[arr.length - 1];
    console.log(sum);
}

// Examples
sumFirstAndLast([20, 30, 40]);      // Output: 60
sumFirstAndLast([10, 17, 22, 33]);  // Output: 43
sumFirstAndLast([11, 58, 69]);      // Output: 80
