function rotateArray(arr, rotations) {
    let n = arr.length;
    rotations = rotations % n;  // Handle more rotations than the array length
    for (let i = 0; i < rotations; i++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}

// Example usage:
rotateArray([51, 47, 32, 61, 21], 2);  // Output: 32 61 21 51 47
rotateArray([32, 21, 61, 1], 4);       // Output: 32 21 61 1
rotateArray([2, 4, 15, 31], 5);        // Output: 4 15 31 2
