/**
 * @param {number[]} arr
 * @param {number} startIndex
 * @return {Generator<number, void, number>}
 */
function* cycleGenerator(arr, startIndex) {
    const n = arr.length;
    while (true) {
        const jump = yield arr[startIndex];
        startIndex = (((startIndex + jump) % n) + n) % n;
    }
}

/**
 *  const gen = cycleGenerator([1,2,3,4,5], 0);
 *  console.log(gen.next().value);  // 1
 *  console.log(gen.next(1).value); // 2
 *  console.log(gen.next(2).value); // 4
 *  console.log(gen.next(6).value); // 5
 *  console.log(gen.next(-3).value); // 2
 */

const gen = cycleGenerator([1, 2, 3, 4, 5], 0);
console.log(gen.next().value);   // 1
console.log(gen.next(1).value);  // 2
console.log(gen.next(2).value);  // 4
console.log(gen.next(6).value);  // 5
console.log(gen.next(-3).value); // 2
