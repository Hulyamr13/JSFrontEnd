const intervalMap = new Map();

function customInterval(fn, delay, period) {
    let count = 0;
    let id;

    function recursiveTimeout() {
        id = Date.now();
        intervalMap.set(
            id,
            setTimeout(() => {
                fn();
                count++;
                recursiveTimeout();
            }, delay + period * count)
        );
    }

    recursiveTimeout();
    return id;
}

function customClearInterval(id) {
    if (intervalMap.has(id)) {
        clearTimeout(intervalMap.get(id));
        intervalMap.delete(id);
    }
}

// Example usage:
const intervalId = customInterval(() => {
    console.log("Interval executed!");
}, 1000, 5000);

// Clear the interval after some time (e.g., 15 seconds)
setTimeout(() => {
    customClearInterval(intervalId);
}, 15000);
