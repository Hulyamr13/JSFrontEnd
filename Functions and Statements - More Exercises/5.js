function printDNA(num) {
    let sequence = 'ATCGTTAGGG';
    let copySequence = sequence;

    let counter = 0;
    for (let i = 0; i < num; i++) {
        let pair = copySequence.slice(0, 2);
        copySequence = copySequence.slice(2) + copySequence.slice(0, 2);

        switch (counter % 4) {
            case 0:
                console.log(`**${pair}**`);
                break;
            case 1:
                console.log(`*${pair[0]}--${pair[1]}*`);
                break;
            case 2:
                console.log(`${pair[0]}----${pair[1]}`);
                break;
            case 3:
                console.log(`*${pair[0]}--${pair[1]}*`);
                break;
        }

        counter++;
    }
}

// Example usage:
printDNA(4);
console.log();
printDNA(10);
