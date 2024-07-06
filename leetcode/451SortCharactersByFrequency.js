/**
 * @param {string} s
 * @return {string}
 */
let frequencySort = function(s) {
    let counter = {};
    for (let c of s) {
        counter[c] = (counter[c] || 0) + 1;
    }

    let sortedChars = Object.keys(counter).sort((a, b) => counter[b] - counter[a]);

    let ans = '';
    for (let char of sortedChars) {
        ans += char.repeat(counter[char]);
    }

    return ans;
};
