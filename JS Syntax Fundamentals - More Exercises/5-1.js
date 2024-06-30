function solve(yield) {
    let workingDays = 0;
    let totalSpice = 0;

    while (yield >= 100) {
        totalSpice += yield;
        yield -= 10;
        totalSpice -= 26;
        workingDays++;
    }

    totalSpice -= (workingDays > 0) ? 26 : 0; // Deduct the final day's consumption if there were working days

    console.log(workingDays);
    console.log(totalSpice);
}
