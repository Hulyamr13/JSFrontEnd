function findWords(wordsArr) {
    let searchWords = wordsArr[0].split(' ');
    let searchWordsObj = {};

    searchWords.forEach(word => {
        searchWordsObj[word] = 0;
    });

    searchWords.forEach(word => {
        for (let i = 1; i < wordsArr.length; i++) {
            let words = wordsArr[i].split(' ');
            if (words.includes(word)) {
                searchWordsObj[word]++;
            }
        }
    });

    let sortedWords = Object.entries(searchWordsObj)
        .sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    });
}
