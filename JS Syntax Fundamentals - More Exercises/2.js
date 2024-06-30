function wordsUppercase(input) {
    // Step 1: Split the input string into an array of words
    let words = input.split(/\b/);

    // Step 2: Filter out non-word characters and empty strings
    words = words.filter(word => word.match(/\w/)); // Filter out non-word characters

    // Step 3: Convert each word to uppercase
    let uppercased = words.map(word => word.toUpperCase());

    // Step 4: Join the words with ", " and print the result
    let result = uppercased.join(", ");
    console.log(result);
}

// Examples
wordsUppercase('Hi, how are you?'); // Output: HI, HOW, ARE, YOU
wordsUppercase('hello'); // Output: HELLO
