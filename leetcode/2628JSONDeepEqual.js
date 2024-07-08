function areDeeplyEqual(o1, o2) {
    if (o1 === null || typeof o1 !== 'object') {
        return o1 === o2;
    }
    if (typeof o1 !== typeof o2) {
        return false;
    }
    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }
    if (Array.isArray(o1)) {
        if (o1.length !== o2.length) {
            return false;
        }
        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false;
            }
        }
        return true;
    } else {
        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (let i = 0; i < keys1.length; i++) {
            const key = keys1[i];
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false;
            }
        }
        return true;
    }
}

/** Example usage:
 *
 * const obj1 = { a: 1, b: { c: [1, 2, 3] } };
 * const obj2 = { a: 1, b: { c: [1, 2, 3] } };
 * console.log(areDeeplyEqual(obj1, obj2)); // true
 */