/**
 * @param {Function[]} functions
 * @return {Function}
 */
let compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * console.log(fn(4)); // 9
 */