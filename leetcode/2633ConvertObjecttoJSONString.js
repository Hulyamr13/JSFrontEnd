function jsonStringify(object) {
    if (object === null) {
        return 'null';
    }
    if (typeof object === 'string') {
        return `"${object}"`;
    }
    if (typeof object === 'number' || typeof object === 'boolean') {
        return object.toString();
    }
    if (Array.isArray(object)) {
        return `[${object.map(jsonStringify).join(',')}]`;
    }
    if (typeof object === 'object') {
        return `{${Object.entries(object)
            .map(([key, value]) => `${jsonStringify(key)}:${jsonStringify(value)}`)
            .join(',')}}`;
    }
    return '';
}

// Example usage:
const obj = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'New York',
        zip: 10001
    }
};

console.log(jsonStringify(obj));
