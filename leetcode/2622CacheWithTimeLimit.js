var TimeLimitedCache = function() {
    this.data = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let now = Date.now();
    let val = this.data.get(key);
    let result = val ? val.expiration > now : false;
    this.data.set(key, { value: value, expiration: now + duration });
    return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    let val = this.data.get(key);
    let result = val && val.expiration > Date.now();

    if (!result) {
        return -1;
    }

    return val.value;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let now = Date.now();
    let sum = 0;
    for (let key of this.data.keys()) {
        if (this.data.get(key).expiration > now) {
            sum += 1;
        }
    }
    return sum;
};

/**
 * Example usage:
 * const timeLimitedCache = new TimeLimitedCache();
 * console.log(timeLimitedCache.set(1, 42, 1000)); // false
 * console.log(timeLimitedCache.get(1)); // 42
 * console.log(timeLimitedCache.count()); // 1
 * setTimeout(() => {
 *     console.log(timeLimitedCache.get(1)); // -1 (after 1000ms)
 *     console.log(timeLimitedCache.count()); // 0
 * }, 1100);
 */
