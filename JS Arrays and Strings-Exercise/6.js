function hashedWords(myString) {
    const regexp = /#([A-Za-z]+)/g;
    const matches = myString.matchAll(regexp);

    for (const match of matches) {
        console.log(match[1]);
    }
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
