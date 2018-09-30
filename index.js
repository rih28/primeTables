//include modules
var argumentIsPositiveInteger = require('./argumentIsPositiveInteger');
var getPrimes = require('./getPrimes');
var createMultiplyMatrix = require('./createMultiplyMatrix');
var createMultiplyMatrixMultiThread = require('./createMultiplyMatrixMultiThread');
var showGrid = require('./showGrid'); //Cant really test UI in command line which is unforunate.


/*
 * Decided on an argument based user input, I am declaring the type below as
 * For example: node index --primes=10 runs the program with the argument 10
 * This method has clear flaws i.e. using " as an argument can't be resolved
 */
const optionDefinitions = [
  { name: 'primes', alias: 'p', type: Number }
]

const commandLineArgs = require('command-line-args'); //for using command line user input
const options = commandLineArgs(optionDefinitions); //declaring options for command line user input


//get the user input from the argument. options returns an object, for example { primes: 10 }
//please note, blank returns 0 as the type is declared as Number in the optionDefinitions
const prime = options.primes;

//check whether prime is a positive integer or not and return a boolean
const inp = argumentIsPositiveInteger(prime)
console.log(inp);
main(inp, prime);

/*
 * Runs the main program
 * @param {boolean} inp
 * @param {number} prime
 */
function main(input, pVal) {
  if (input) {
    console.log("Thank you :)");
    const primeList = getPrimes(pVal);

    if (pVal <= 10000) {
      let multiplyMatrix = createMultiplyMatrix(primeList);
      showGrid(primeList, multiplyMatrix); // outputs the grid in nice form
    } else {
      //Need async function to get a promise from the async threads in the createMultiplyMatrixMultiThread module. Its very messy!!
      async function getChunkedMultiplyMatrix() {
         let multiplyMatrix = await createMultiplyMatrixMultiThread(primeList, pVal);
         showGrid(primeList, multiplyMatrix);
      }
      getChunkedMultiplyMatrix();
    }

    //TODO: Show the grid
  } else {
    console.log("User input must be a positive integer i.e. 25, 2, 25000");
  }
}
