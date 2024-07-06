/**
 * @param {Generator<Promise<any>, T, unknown>} generator
 * @return {[() => void, Promise<T>]}
 */
var cancellable = function(generator) {
    let cancel = () => {};
    const cancelPromise = new Promise((resolve, reject) => {
        cancel = () => reject('Cancelled');
    });
    cancelPromise.catch(() => {}); // Prevent unhandled promise rejection warning

    const promise = (async () => {
        let next = generator.next();
        while (!next.done) {
            try {
                next = generator.next(await Promise.race([next.value, cancelPromise]));
            } catch (e) {
                next = generator.throw(e);
            }
        }
        return next.value;
    })();

    return [cancel, promise];
};

// Example usage:
function* tasks() {
    const val = yield new Promise(resolve => resolve(2 + 2));
    yield new Promise(resolve => setTimeout(resolve, 100));
    return val + 1;
}

const [cancel, promise] = cancellable(tasks());
setTimeout(cancel, 50);
promise.catch(console.log); // Logs "Cancelled" at t=50ms
