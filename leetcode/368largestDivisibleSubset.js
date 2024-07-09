/**
 * @param {number[]} nums
 * @return {number[]}
 */
let largestDivisibleSubset = function(nums) {
    let n = nums.length;
    if (n === 0) return [];

    let dp = new Array(n).fill(1);

    let prev = new Array(n).fill(-1);

    nums.sort((a, b) => a - b);

    let maxSubsetSize = 1, maxSubsetIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > maxSubsetSize) {
            maxSubsetSize = dp[i];
            maxSubsetIndex = i;
        }
    }

    let result = [];
    for (let i = maxSubsetIndex; i >= 0; i = prev[i]) {
        result.push(nums[i]);
        if (prev[i] === -1) break;
    }

    return result.reverse();
};