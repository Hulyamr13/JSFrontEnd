function hashedWords(myString) {
    const regexp = /#([A-Za-z]+)/g;
    let match;
    
    while ((match = regexp.exec(myString)) !== null) {
        console.log(match[1]);
    }
}


function hashedWords(myString) {
    myString.replace(/#([A-Za-z]+)/g, (match, group) => {
        console.log(group);
        return ''; 
    });
}

function hashedWords(myString) {
    const words = myString.split(' ');

    words.forEach(word => {
        if (word.startsWith('#')) {
            const cleanWord = word.slice(1); // премахваме '#'
            if (/^[A-Za-z]+$/.test(cleanWord)) {
                console.log(cleanWord);
            }
        }
    });
}



// Example usage:
hashedWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
// Expected Output:
// special
// socialMedia

hashedWords('The symbol # is known #variously in English-speaking #regions as the #number sign');
// Expected Output:
// variously
// regions
// number
