function invertObject(obj) {
    const ans = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (ans.hasOwnProperty(value)) {
                if (Array.isArray(ans[value])) {
                    ans[value].push(key);
                } else {
                    ans[value] = [ans[value], key];
                }
            } else {
                ans[value] = key;
            }
        }
    }
    return ans;
}

// Example usage:
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value1',
    key4: 'value3'
};

const invertedObj = invertObject(obj);
console.log(invertedObj);
