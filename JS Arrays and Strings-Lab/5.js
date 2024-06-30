function censorText(text, word) {
    const regex = new RegExp(word, 'gi');

    const censoredText = text.replace(regex, '*'.repeat(word.length));

    console.log(censoredText);
}

// Examples
censorText('A small sentence with some words', 'small');
// Output: A ***** sentence with some words

censorText('Find the hidden word', 'hidden');
// Output: Find the ****** word
