function charactersInRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);
    let result = [];

    if (start < end) {
        for (let i = start + 1; i < end; i++) {
            result.push(String.fromCharCode(i));
        }
    } else {
        for (let i = end + 1; i < start; i++) {
            result.push(String.fromCharCode(i));
        }
    }

    console.log(result.join(' '));
}

// Examples
charactersInRange('a', 'd');   // Output: b c
charactersInRange('#', ':');   // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
charactersInRange('C', '#');   // Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
