function makeImmutable(obj) {
    const arrayHandler = {
        set: function(_, prop) {
            throw `Error Modifying Index: ${String(prop)}`;
        },
    };

    const objectHandler = {
        set: function(_, prop) {
            throw `Error Modifying: ${String(prop)}`;
        },
    };

    const fnHandler = {
        apply: function(target) {
            throw `Error Calling Method: ${target.name}`;
        },
    };

    const fn = ['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

    const dfs = (obj) => {
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                obj[key] = dfs(obj[key]);
            }
        }

        if (Array.isArray(obj)) {
            fn.forEach(f => {
                if (typeof obj[f] === 'function') {
                    obj[f] = new Proxy(obj[f], fnHandler);
                }
            });
            return new Proxy(obj, arrayHandler);
        } else if (typeof obj === 'object' && obj !== null) {
            return new Proxy(obj, objectHandler);
        } else {
            return obj; // Return unchanged if not an object or array
        }
    };

    return dfs(obj);
}

// Example usage:
const obj = makeImmutable({ x: 5 });

try {
    obj.x = 6; // throws "Error Modifying: x"
} catch (error) {
    console.log(error);
}