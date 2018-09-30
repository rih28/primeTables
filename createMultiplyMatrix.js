/*
 * This works up to around 10000, but trying it on over 20000 crashes due to memory issues.
 * I will make a multiprocess version just in case
 * @param {Array} primeList
 * @return {Array} grid
 */

function createMultiplyMatrix(primeList) {
  let grid = [];
  const pa = primeList;

  const t2 = Date.now();
  for (let i = 0; i < pa.length; i++) {
    const newArray = pa.map(function(arr) {
  	  return arr*pa[i];
    });
    grid.push(newArray);
  }
  //console.log((Date.now()-t2));
  return grid;
}

module.exports = createMultiplyMatrix
