function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

// Examples
isLeapYear(1984);   // Output: yes
isLeapYear(2003);   // Output: no
isLeapYear(4);      // Output: yes
