/**
 * @typedef {function(string[]): Promise<string[]>} QueryMultipleFn
 */

/**
 * @typedef {Object} ThrottledRequest
 * @property {string} key
 * @property {function(string): void} resolve
 */

class QueryBatcher {
  /**
   * @param {QueryMultipleFn} queryMultiple
   * @param {number} t
   */
  constructor(queryMultiple, t) {
    this.queryMultiple = queryMultiple;
    this.throttleTime = t;
    this.isThrottling = false;
    this.throttledRequests = [];
  }

  /**
   * @param {string} key
   * @return {Promise<string>}
   */
  async getValue(key) {
    if (this.throttleTime === 0) {
      const results = await this.queryMultiple([key]);
      return results[0];
    }
    if (this.isThrottling) {
      return new Promise((resolve) => {
        this.throttledRequests.push({ key, resolve });
      });
    }
    this.isThrottling = true;
    setTimeout(() => this.deThrottle(), this.throttleTime);
    const results = await this.queryMultiple([key]);
    return results[0];
  }

  // De-throttles and processes any pending requests.
  deThrottle() {
    const throttledRequests = this.throttledRequests;
    if (throttledRequests.length === 0) {
      this.isThrottling = false;
    } else {
      const keys = throttledRequests.map((req) => req.key);
      this.queryMultiple(keys).then((results) => {
        results.forEach((result, index) => {
          throttledRequests[index].resolve(result);
        });
      });
      setTimeout(() => this.deThrottle(), this.throttleTime);
      this.throttledRequests = [];
    }
  }
}