function printMonth(number) {
    const months = [
        null,
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const monthName = months[number];

    if (monthName) {
        console.log(monthName);
    } else {
        console.log("Error!");
    }
}

// Примери:
printMonth(2);   // Output: February
printMonth(13);  // Output: Error!
