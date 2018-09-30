/*
 * Shows the grid as outlined in the spec.
 * Adds the prime number array to the 1st row and column with a gap at x_00
 * @param {Array} pa
 * @param {Array} matrix
 */

function showGrid(pa, matrix) {
  /**Prime Row**/
  let primeRow = "|   ";
  for (ps of pa) {
    primeRow += `| ${ps} `;
  }
  primeRow += "|"
  console.log(primeRow);
  
  for (const [index, value] of matrix.entries()) {
    let gridRow = "";
    gridRow += "| " + pa[index];
    for (const vals of value) {
      gridRow += `| ${vals} `;
    }
    gridRow += "|";
    console.log(gridRow);
  }
}

module.exports = showGrid;
