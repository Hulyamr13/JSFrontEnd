function hasSubstring(word, myString) {
    let myArray = myString.split(' ');

    for (let text of myArray) {
        if (text.toLowerCase() === word.toLowerCase()) {
            return word;
        }
    }

    return `${word} not found!`;
}

// Example usage:
console.log(hasSubstring('javascript', 'JavaScript is the best programming language'));
// Output: javascript

console.log(hasSubstring('python', 'JavaScript is the best programming language'));
// Output: python not found!
