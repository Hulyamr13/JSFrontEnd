/**
 * @typedef {() => Promise<any>} F
 */

/**
 * @param {F[]} functions Array of async functions to execute
 * @param {number} n Maximum number of concurrent executions
 * @return {Promise<any>}
 */
function promisePool(functions, n) {
    const wrappers = functions.map(fn => async () => {
        await fn();
        const nxt = waiting.shift();
        nxt && await nxt();
    });

    const running = wrappers.slice(0, n);
    const waiting = wrappers.slice(n);

    return Promise.all(running.map(fn => fn()));
}

// Example usage:
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const functions = [
    async () => {
        console.log('Task 1 started');
        await delay(1000);
        console.log('Task 1 completed');
    },
    async () => {
        console.log('Task 2 started');
        await delay(2000);
        console.log('Task 2 completed');
    },
    async () => {
        console.log('Task 3 started');
        await delay(500);
        console.log('Task 3 completed');
    },
];

promisePool(functions, 2)
    .then(() => console.log('All tasks completed'));