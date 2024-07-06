/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) return [];

  const arr = Array.from(Array(rowsCount), () => Array());

  for (let i = 0; i < colsCount; i++) {
    let col = this.slice(i * rowsCount, i * rowsCount + rowsCount);
    if (i > 0 && i % 2 !== 0) col = col.reverse();

    for (let j = 0; j < col.length; j++) {
      arr[j].push(col[j]);
    }
  }

  return arr;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */