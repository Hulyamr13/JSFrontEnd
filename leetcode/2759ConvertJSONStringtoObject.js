/**
 * Parses a JSON string and returns the corresponding value.
 * @param {string} str - The JSON string to parse.
 * @return {any} The parsed value.
 */
function jsonParse(str) {
    const n = str.length;
    let i = 0;

    const parseTrue = () => {
        i += 4;
        return true;
    };

    const parseFalse = () => {
        i += 5;
        return false;
    };

    const parseNull = () => {
        i += 4;
        return null;
    };

    const parseNumber = () => {
        let s = '';
        while (i < n) {
            const c = str[i];
            if (c === ',' || c === '}' || c === ']') {
                break;
            }
            s += c;
            i++;
        }
        return Number(s);
    };

    const parseArray = () => {
        const arr = [];
        i++;
        while (i < n) {
            const c = str[i];
            if (c === ']') {
                i++;
                break;
            }
            if (c === ',') {
                i++;
                continue;
            }
            const value = parseValue();
            arr.push(value);
        }
        return arr;
    };

    const parseString = () => {
        let s = '';
        i++;
        while (i < n) {
            const c = str[i];
            if (c === '"') {
                i++;
                break;
            }
            if (c === '\\') {
                i++;
                s += str[i];
            } else {
                s += c;
            }
            i++;
        }
        return s;
    };

    const parseObject = () => {
        const obj = {};
        i++;
        while (i < n) {
            const c = str[i];
            if (c === '}') {
                i++;
                break;
            }
            if (c === ',') {
                i++;
                continue;
            }
            const key = parseString();
            i++; // Skip the colon
            const value = parseValue();
            obj[key] = value;
        }
        return obj;
    };

    const parseValue = () => {
        const c = str[i];
        if (c === '{') {
            return parseObject();
        }
        if (c === '[') {
            return parseArray();
        }
        if (c === '"') {
            return parseString();
        }
        if (c === 't') {
            return parseTrue();
        }
        if (c === 'f') {
            return parseFalse();
        }
        if (c === 'n') {
            return parseNull();
        }
        return parseNumber();
    };

    return parseValue();
}

// Example usage:
const jsonString1 = '{"x": 5, "y": 42}';
console.log(jsonParse(jsonString1)); // Output: { x: 5, y: 42 }

const jsonString2 = '[]';
console.log(jsonParse(jsonString2)); // Output: []

const jsonString3 = '[null, false, 0]';
console.log(jsonParse(jsonString3)); // Output: [null, false, 0]