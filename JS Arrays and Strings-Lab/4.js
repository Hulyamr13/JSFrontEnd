function substring(str, startIndex, count) {
    let result = str.substr(startIndex, count);
    console.log(result);
}

// Examples
substring('ASentence', 1, 8);   // Output: Sentence
substring('SkipWord', 4, 7);    // Output: Word
