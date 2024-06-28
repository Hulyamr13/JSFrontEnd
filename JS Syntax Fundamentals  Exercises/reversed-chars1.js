function reversedChars(char1, char2, char3) {
    let chars = [char1, char2, char3];
    let reversedChars = chars.reverse();
    console.log(reversedChars.join(' '));
}


reversedChars('A', 'B', 'C');  // Output: C B A
reversedChars('1', 'L', '&');  // Output: & L 1
