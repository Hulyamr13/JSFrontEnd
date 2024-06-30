function evenOddSubtraction(arr) {
    let [evenSum, oddSum] = arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc[0] += curr;
        } else {
            acc[1] += curr;
        }
        return acc;
    }, [0, 0]);

    let difference = evenSum - oddSum;
    console.log(difference);
}


evenOddSubtraction([1, 2, 3, 4, 5, 6]);   // Изход: 3
evenOddSubtraction([3, 5, 7, 9]);        // Изход: -24
evenOddSubtraction([2, 4, 6, 8, 10]);    // Изход: 30
