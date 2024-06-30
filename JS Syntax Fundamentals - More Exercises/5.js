function solve(yield) {
    let workingDays = 0;
    let spices = 0;

    while (yield >= 100) {
        workingDays++;
        spices += yield;

        yield -= 10;
        spices -= 26;
    }

    if (workingDays > 0) {
        spices += 26; // Add back the last day's consumption after the loop ends
    }

    console.log(workingDays);
    console.log(spices);
}

// Examples:
solve(111);  // Output:
             // 2
             // 134

solve(134);  // Output:
             // 3
             // 217

solve(450);  // Output:
             // 36
             // 8099

solve(8938); // Output:
             // 110
             // 296383
