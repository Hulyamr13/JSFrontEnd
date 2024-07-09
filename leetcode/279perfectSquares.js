/**
 * @param {number} n
 * @return {number}
 */
let numSquares = function(n) {
    if (n <= 0) return 0;

    let perfectSquares = [];
    let cntPerfectSquares = Array(n + 1).fill(0);

    for (let i = 1; i * i <= n; ++i) {
        perfectSquares.push(i * i);
        cntPerfectSquares[i * i] = 1;
    }

    if (perfectSquares[perfectSquares.length - 1] === n) {
        return 1;
    }

    let q = [];
    for (let e of perfectSquares) {
        q.push(e);
    }

    let currCntPerfectSquares = 1;

    while (q.length > 0) {
        ++currCntPerfectSquares;
        let levelSize = q.length;

        while (levelSize-- > 0) {
            let node = q.shift();

            for (let ps of perfectSquares) {
                if (node + ps === n) {
                    return currCntPerfectSquares;
                } else if (node + ps < n && cntPerfectSquares[node + ps] === 0) {
                    cntPerfectSquares[node + ps] = currCntPerfectSquares;
                    q.push(node + ps);
                } else if (node + ps > n) {
                    break;
                }
            }
        }
    }

    return 0;
};