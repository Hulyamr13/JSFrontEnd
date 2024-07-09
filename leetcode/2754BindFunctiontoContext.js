/**
 * @param {Object} obj
 * @return {Function}
 */
Function.prototype.bindPolyfill = function (obj) {
    return (...args) => {
        return this.call(obj, ...args);
    };
};

// Example usage
function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
const greetAlice = greet.bindPolyfill(person);

console.log(greetAlice('Hello', '!')); // Output: "Hello, Alice!"