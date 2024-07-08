function objDiff(obj1, obj2) {
    if (type(obj1) !== type(obj2)) return [obj1, obj2];
    if (!isObject(obj1)) return obj1 === obj2 ? {} : [obj1, obj2];
    const diff = {};
    const sameKeys = Object.keys(obj1).filter(key => key in obj2);
    sameKeys.forEach(key => {
        const subDiff = objDiff(obj1[key], obj2[key]);
        if (Object.keys(subDiff).length) diff[key] = subDiff;
    });
    return diff;
}

function type(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

/**
 * Example usage:
 */
const obj1 = { x: 5, y: { z: 10 } };
const obj2 = { x: 6, y: { z: 20 } };
const differences = objDiff(obj1, obj2);
console.log(differences); // Output: { x: [5, 6], y: { z: [10, 20] } }