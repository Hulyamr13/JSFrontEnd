/**
 * Extends the Date prototype to add a nextDay method.
 */
Date.prototype.nextDay = function () {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + 1);
    return date.toISOString().slice(0, 10);
};

/**
 * Example usage
 */
const date = new Date("2014-06-20");
console.log(date.nextDay()); // "2014-06-21"
