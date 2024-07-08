function invariant(condition, message) {
    if (!condition) {
        throw new Error(message());
    }
}

class ImmutableHelper {
    constructor(obj) {
        // Ensure obj is a plain object or array
        invariant(
            typeof obj === 'object' && obj !== null,
            () => 'ImmutableHelper must be initialized with an object or array'
        );

        this.originalObj = obj;
    }

    produce(mutator) {
        const proxyHandler = {
            get: (target, prop) => {
                // Prevent accessing keys that don't exist
                invariant(
                    prop in target,
                    () => `Key "${String(prop)}" does not exist in the object`
                );

                const value = target[prop];
                if (typeof value === 'object' && value !== null) {
                    // Recursively return a proxy for nested objects or arrays
                    return new Proxy(value, proxyHandler);
                } else {
                    return value;
                }
            },
            set: (target, prop, value) => {
                // Prevent setting keys to objects
                invariant(
                    !(prop in target) || typeof value !== 'object' || value === null,
                    () => `Cannot set key "${String(prop)}" to an object`
                );

                target[prop] = value;
                return true; // Indicate success
            },
            deleteProperty: () => {
                // Prevent deleting keys
                invariant(false, () => 'Cannot delete properties from the object');
            },
            apply: () => {
                // Prevent calling the proxy as a function
                invariant(false, () => 'Cannot call the object as a function');
            }
        };

        const proxy = new Proxy(this.originalObj, proxyHandler);

        // Execute the mutator function which is expected to mutate the proxy
        mutator(proxy);

        // Return a shallow clone of the original object with the mutations applied
        return { ...this.originalObj };
    }
}

// Example usage:
const originalObj1 = { "x": 5 };
const helper1 = new ImmutableHelper(originalObj1);
const newObj1 = helper1.produce((proxy) => {
    proxy.x = proxy.x + 1;
});
console.log(originalObj1); // {"x": 5}
console.log(newObj1); // {"x": 6}

const originalObj2 = { "arr": [1, 2, 3] };
const helper2 = new ImmutableHelper(originalObj2);
const newObj2 = helper2.produce((proxy) => {
    proxy.arr[0] = 5;
    proxy.newVal = proxy.arr[0] + proxy.arr[1];
});
console.log(originalObj2); // {"arr": [1, 2, 3]}
console.log(newObj2); // {"arr": [5, 2, 3], "newVal": 7}

const originalObj3 = { "obj": { "val": { "x": 10, "y": 20 } } };
const helper3 = new ImmutableHelper(originalObj3);
const newObj3 = helper3.produce((proxy) => {
    let data = proxy.obj.val;
    let temp = data.x;
    data.x = data.y;
    data.y = temp;
});
console.log(originalObj3); // {"obj": {"val": {"x": 10, "y": 20}}}
console.log(newObj3); // {"obj": {"val": {"x": 20, "y": 10}}}