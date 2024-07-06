class Calculator {
    /**
     * @param {number} value Initial value for the calculator.
     */
    constructor(value) {
        this.x = value;
    }

    /**
     * Adds a value to the current result and returns the Calculator instance.
     * @param {number} value The value to add.
     * @return {Calculator} The Calculator instance with updated result.
     */
    add(value) {
        this.x += value;
        return this;
    }

    /**
     * Subtracts a value from the current result and returns the Calculator instance.
     * @param {number} value The value to subtract.
     * @return {Calculator} The Calculator instance with updated result.
     */
    subtract(value) {
        this.x -= value;
        return this;
    }

    /**
     * Multiplies the current result by a value and returns the Calculator instance.
     * @param {number} value The value to multiply by.
     * @return {Calculator} The Calculator instance with updated result.
     */
    multiply(value) {
        this.x *= value;
        return this;
    }

    /**
     * Divides the current result by a value and returns the Calculator instance.
     * Throws an error if the value is zero.
     * @param {number} value The value to divide by.
     * @return {Calculator} The Calculator instance with updated result.
     * @throws {Error} If division by zero is attempted.
     */
    divide(value) {
        if (value === 0) {
            throw new Error('Division by zero is not allowed');
        }
        this.x /= value;
        return this;
    }

    /**
     * Raises the current result to the power of a value and returns the Calculator instance.
     * @param {number} value The exponent value.
     * @return {Calculator} The Calculator instance with updated result.
     */
    power(value) {
        this.x **= value;
        return this;
    }

    /**
     * Returns the current result.
     * @return {number} The current value of the calculator.
     */
    getResult() {
        return this.x;
    }
}
