function undefinedToNull(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            obj[key] = undefinedToNull(obj[key]);
        }
        if (obj[key] === undefined) {
            obj[key] = null;
        }
    }
    return obj;
}

/**
 * Example usage:
 */
let obj1 = {"a": undefined, "b": 3};
let result1 = undefinedToNull(obj1);
console.log(result1); // {"a": null, "b": 3}

let obj2 = [undefined, undefined];
let result2 = undefinedToNull(obj2);
console.log(result2); // [null, null]