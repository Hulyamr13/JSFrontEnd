/**
 * @param {Object|Array} obj1
 * @param {Object|Array} obj2
 * @return {Object|Array}
 */
function deepMerge(obj1, obj2) {
    const isObj = (obj) => obj && typeof obj === 'object';
    const isArr = (obj) => Array.isArray(obj);

    if (!isObj(obj1) || !isObj(obj2)) {
        return obj2;
    }

    if (isArr(obj1) !== isArr(obj2)) {
        return obj2;
    }

    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            obj1[key] = deepMerge(obj1[key], obj2[key]);
        }
    }

    return obj1;
}

// Example Usage
let obj1 = { "a": 1, "c": 3 };
let obj2 = { "a": 2, "b": 2 };
console.log(deepMerge(obj1, obj2)); // Output: {"a": 2, "c": 3, "b": 2}
