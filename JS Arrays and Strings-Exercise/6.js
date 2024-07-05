function hashedWords(myString) {
    const regexp = /#([A-Za-z]+)/g;
    let match;
<<<<<<< Updated upstream
    
=======

>>>>>>> Stashed changes
    while ((match = regexp.exec(myString)) !== null) {
        console.log(match[1]);
    }
}


function hashedWords(myString) {
    myString.replace(/#([A-Za-z]+)/g, (match, group) => {
        console.log(group);
<<<<<<< Updated upstream
        return ''; 
=======
        return '';
>>>>>>> Stashed changes
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


function modernTimes(inputString) {
<<<<<<< Updated upstream
    const regex = /#[A-Za-z]+/gm; 
    
=======
    const regex = /#[A-Za-z]+/gm;

>>>>>>> Stashed changes
    inputString.split(/\s+/).forEach(word => {
        const matches = word.match(regex);

        if (matches) {
            matches.forEach(match => {
                console.log(match.substring(1));
            });
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
