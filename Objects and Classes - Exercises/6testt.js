function findWords(wordsArr) {
    let searchWords = wordsArr[0].split(' ');

    let searchWordsObj = searchWords.reduce((acc, word) => {
        acc[word] = wordsArr.slice(1).reduce((count, sentence) => {
            let words = sentence.split(' ');
            if (words.includes(word)) {
                return count + 1;
            } else {
                return count;
            }
        }, 0);
        return acc;
    }, {});

    let sortedWords = Object.entries(searchWordsObj)
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}
