/**
 * Creates an object from two arrays: one of keys and one of values.
 *
 * @param {Array} keysArr - The array of keys.
 * @param {Array} valuesArr - The array of values.
 * @return {Object} - The resulting object.
 */
function createObject(keysArr, valuesArr) {
    const ans = {};
    for (let i = 0; i < keysArr.length; ++i) {
        const k = String(keysArr[i]);
        if (ans[k] === undefined) {
            ans[k] = valuesArr[i];
        }
    }
    return ans;
}

// Example usage:
const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];
const obj = createObject(keys, values);
console.log(obj); // { a: 1, b: 2, c: 3 }
