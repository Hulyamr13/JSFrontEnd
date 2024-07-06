function createInfiniteObject() {
    return new Proxy(
        {},
        {
            get: function(_, prop) {
                return function() {
                    return prop.toString();
                };
            },
        }
    );
}

/**
 * Example usage:
 */
const obj = createInfiniteObject();

// Calling the function returned by accessing the property 'abc123'
console.log(obj['abc123']()); // Output: "abc123"
