class EventEmitter {
    constructor() {
        this.d = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.d.has(eventName)) {
            this.d.set(eventName, new Set());
        }
        const callbacks = this.d.get(eventName);
        callbacks.add(callback);

        return {
            unsubscribe: () => {
                callbacks.delete(callback);
            },
        };
    }

    emit(eventName, args = []) {
        const callbacks = this.d.get(eventName);
        if (!callbacks) {
            return [];
        }
        return [...callbacks].map(callback => callback(...args));
    }
}
/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * console.log(emitter.emit('onClick')); // [99]
 * sub.unsubscribe(); // undefined
 * console.log(emitter.emit('onClick')); // []
 */

const emitter = new EventEmitter();

// Subscribe to the 'onClick' event with onClickCallback
function onClickCallback() { return 99; }
const sub = emitter.subscribe('onClick', onClickCallback);

// Emit the 'onClick' event and log the results
console.log(emitter.emit('onClick')); // Output: [99]

// Unsubscribe from the 'onClick' event using the returned subscription object
sub.unsubscribe();

// Emit the 'onClick' event again after unsubscribing to verify no callbacks are invoked
console.log(emitter.emit('onClick')); // Output: []
