/**
 * @param {Function} fn
 * @return {Function}
 */
let memoize = function(fn) {
    let idxMap = new Map();
    let cache = new Map();

    let getIdx = function(obj) {
        if (!idxMap.has(obj)) {
            idxMap.set(obj, idxMap.size);
        }
        return idxMap.get(obj);
    };

    return function(...params) {
        let key = params.map(getIdx).join(',');
        if (!cache.has(key)) {
            cache.set(key, fn(...params));
        }
        return cache.get(key);
    };
};

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function(a, b) {
 *   callCount += 1;
 *   return a + b;
 * });
 *
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(callCount); // 1
 */