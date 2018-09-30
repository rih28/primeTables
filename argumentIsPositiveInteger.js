
/*
 * Function for testing whether the user input is viable i.e. a positive integer.
 * @param {Number} prime
 * @return {bool}
 */

function argumentIsPositiveInteger(prime) {
  //This has flaws!
  if (isNaN(prime)) {
    return false;
  } else {
    if (Number.isInteger(prime)) {
      if (prime < 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}

module.exports = argumentIsPositiveInteger;
