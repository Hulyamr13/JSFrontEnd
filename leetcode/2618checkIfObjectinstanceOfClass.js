let checkIfInstanceOf = function(obj, classFunction) {
    if (classFunction === null || classFunction === undefined) {
        return false;
    }
    while (obj !== null && obj !== undefined) {
        const proto = Object.getPrototypeOf(obj);
        if (proto === classFunction.prototype) {
            return true;
        }
        obj = proto;
    }
    return false;
};

// Example usage:
let func1 = () => checkIfInstanceOf(new Date(), Date);
console.log(func1()); // true

let func2 = () => {
    class Animal {}
    class Dog extends Animal {}
    return checkIfInstanceOf(new Dog(), Animal);
};
console.log(func2()); // true

let func3 = () => checkIfInstanceOf(Date, Date);
console.log(func3()); // false

let func4 = () => checkIfInstanceOf(5, Number);
console.log(func4()); // true
