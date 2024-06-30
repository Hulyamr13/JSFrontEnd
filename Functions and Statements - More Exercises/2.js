function numberModification(number) {
    let numsArr = Array.from(String(number), Number);

    let averageValue = numsArr.reduce((acc, curr) => acc + curr, 0) / numsArr.length;

    while (averageValue <= 5) {
        numsArr.push(9);
        averageValue = numsArr.reduce((acc, curr) => acc + curr, 0) / numsArr.length;
    }

    console.log(numsArr.join(''));
}


numberModification(101);   // Output: 1019999
numberModification(5835);  // Output: 5835
