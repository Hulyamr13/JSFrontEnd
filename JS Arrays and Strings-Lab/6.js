function countOccurrences(text, word) {
    const words = text.split(' ');

    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }

    console.log(count);
}

// Examples
countOccurrences('This is a word and it also is a sentence', 'is');
// Output: 2

countOccurrences('softuni is great place for learning new programming languages', 'softuni');
// Output: 1
