/**
 * @param {number[][]} grid
 * @return {number}
 */
let cherryPickup = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => new Array(m).fill(0)));
    let result = 0;

    dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1];

    for (let row = 1; row < n; ++row) {
        for (let rob1 = 0; rob1 < m; ++rob1) {
            for (let rob2 = 0; rob2 < m; ++rob2) {
                if (rob1 > row || rob2 < m - row - 1 || rob1 > rob2) continue;

                dp[row][rob1][rob2] = dp[row - 1][rob1][rob2];

                if (rob1 + 1 < m) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 + 1][rob2]);
                if (rob1 + 1 < m && rob2 - 1 >= 0) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 + 1][rob2 - 1]);
                if (rob1 + 1 < m && rob2 + 1 < m) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 + 1][rob2 + 1]);
                if (rob1 - 1 >= 0) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 - 1][rob2]);
                if (rob1 - 1 >= 0 && rob2 - 1 >= 0) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 - 1][rob2 - 1]);
                if (rob1 - 1 >= 0 && rob2 + 1 < m) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1 - 1][rob2 + 1]);
                if (rob2 - 1 >= 0) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1][rob2 - 1]);
                if (rob2 + 1 < m) dp[row][rob1][rob2] = Math.max(dp[row][rob1][rob2], dp[row - 1][rob1][rob2 + 1]);

                if (rob1 !== rob2) dp[row][rob1][rob2] += grid[row][rob1] + grid[row][rob2];
                else dp[row][rob1][rob2] += grid[row][rob1];

                result = Math.max(result, dp[row][rob1][rob2]);
            }
        }
    }

    return result;
};
