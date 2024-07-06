/**
 * @generator
 * @param {string} start - The start date in 'YYYY-MM-DD' format.
 * @param {string} end - The end date in 'YYYY-MM-DD' format.
 * @param {number} step - The number of days to step forward.
 * @yields {string} The next date in the range in 'YYYY-MM-DD' format.
 */
function* dateRangeGenerator(start, end, step) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    let currentDate = startDate;

    while (currentDate <= endDate) {
        yield currentDate.toISOString().slice(0, 10);
        currentDate.setDate(currentDate.getDate() + step);
    }
}

/**
 * Example usage:
 */
const g = dateRangeGenerator('2023-04-01', '2023-04-04', 1);
console.log(g.next().value); // '2023-04-01'
console.log(g.next().value); // '2023-04-02'
console.log(g.next().value); // '2023-04-03'
console.log(g.next().value); // '2023-04-04'
console.log(g.next().done);  // true
