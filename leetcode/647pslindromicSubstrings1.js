/**
 * @param {string} s
 * @return {number}
 */
let countSubstrings = function(s) {
    const manachers = (s) => {
        let t = '^';
        for (let char of s) {
            t += `#${char}`;
        }
        t += '#$';

        let L = new Array(t.length).fill(0);
        let C = 0, R = 0;

        for (let i = 1; i < t.length - 1; i++) {
            if (R > i) {
                L[i] = Math.min(L[2 * C - i], R - i);
            }
            while (t[i + L[i] + 1] === t[i - L[i] - 1]) {
                L[i]++;
            }
            if (i + L[i] > R) {
                C = i;
                R = i + L[i];
            }
        }
        return L;
    };

    let L = manachers(s);
    let ans = 0;

    for (let l of L) {
        ans += Math.floor((l + 1) / 2);
    }
    return ans;
};
