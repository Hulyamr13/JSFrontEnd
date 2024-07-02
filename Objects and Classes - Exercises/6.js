function findWords(wordsArr) {
    let searchWords = wordsArr[0].split(' ');
    let searchWordsObj = {};

    searchWords.forEach(word => {
        searchWordsObj[word] = 0;
    });

    for (let word1 of searchWords) {
        for (let sentence of wordsArr.slice(1)) {
            let words = sentence.split(' ');
            if (words.includes(word1)) {
                searchWordsObj[word1] += 1;
            }
        }
    }

    Object.entries(searchWordsObj)
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => {
            console.log(`${key} - ${value}`);
        });
}

// Test cases
findWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

console.log();

findWords([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);
