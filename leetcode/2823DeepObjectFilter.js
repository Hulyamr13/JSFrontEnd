function deepFilter(obj, fn) {
    const dfs = (data) => {
        if (Array.isArray(data)) {
            const res = data.map(dfs).filter(item => item !== undefined);
            return res.length > 0 ? res : undefined;
        }
        if (typeof data === 'object' && data !== null) {
            const res = {};
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const filteredValue = dfs(data[key]);
                    if (filteredValue !== undefined) {
                        res[key] = filteredValue;
                    }
                }
            }
            return Object.keys(res).length > 0 ? res : undefined;
        }
        return fn(data) ? data : undefined;
    };

    return dfs(obj);
}

// Example usage:
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: [4, 5, { g: 6 }],
        },
    },
    h: [7, 8, { i: 9 }],
};

const filteredObj = deepFilter(obj, (value) => value > 3);

console.log(filteredObj);
