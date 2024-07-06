/**
 * @typedef {null|boolean|number|string|JSONValue[]|Object.<string, JSONValue>} JSONValue
 * @typedef {{ id: number } & Object.<string, JSONValue>} ArrayType
 * @typedef {Object.<number, ArrayType>} Obj
 */

/**
 * Joins two arrays of objects based on the 'id' property.
 * @param {ArrayType[]} arr1 - The first array of objects.
 * @param {ArrayType[]} arr2 - The second array of objects.
 * @return {ArrayType[]} - The joined array of objects.
 */
var join = function(arr1, arr2) {
    const r = (acc, x) => ((acc[x.id] = x), acc); // Reducer function to convert arr1 to an object indexed by 'id'
    const d = arr1.reduce(r, {}); // Convert arr1 to an object 'd' indexed by 'id'

    arr2.forEach(x => {
        if (d[x.id]) {
            Object.assign(d[x.id], x); // If 'id' exists in d, merge properties from x into d[id]
        } else {
            d[x.id] = x; // Otherwise, add x directly to d[id]
        }
    });

    return Object.values(d); // Convert object 'd' back to an array of values
};
