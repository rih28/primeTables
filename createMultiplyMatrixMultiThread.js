const { fork } = require('child_process'); //This is not the most graceful solutions, but C++ Add-ons were not in the spec

let primeArrayOfArrays = []; //Keeps the return values of the completed chunked multiplication matrices
let primeListComplete = []; //Keeps the state of the process i.e. false or true.
const chunkSize = 1000; //Just picked a reasonable number but too high a number causes a buffer issue.

/*
 * Function that creates a pool of processes in worker threads to resolve higher values of primes i.e. 20000.
 * @param {array} primeList
 * @param {Number} prime
 * @return {Promise(Array)} multiplyGrid
 */
async function createMultiplyMatrixMultiThread(primeList, prime) {
  return new Promise(function(resolve, reject) {
    let primeProcessList = []; // Array to store the actual process
    let numberOfPrimeProcesses = Math.floor(prime/chunkSize); // Finds the number of required processes
    const remainderOfPrimeProcesses = prime%chunkSize; // Deals with the remainder
    if (remainderOfPrimeProcesses > 0) { //If there is a remainder, add another process
      numberOfPrimeProcesses = numberOfPrimeProcesses + 1;
    }

    for (let i = 0; i < numberOfPrimeProcesses; i++) { //Create a new child process
      let process = fork('./multiplythread.js', {
        execArgv: ['--max-old-space-size=8000'] //argument doesnt seem to work, so it must be the main node thread
    });
    primeProcessList.push(process); //Push new process to the primeProcessList
    primeArrayOfArrays.push([]); //Adds an empty array to the primeArrayOfArrays Array to handle errors
    primeListComplete.push(false); //Adds a default state for the processes in a ProcessList Array
  }

  for (const [index, value] of primeProcessList.entries()) {
      //initialise the particulars of the processes
      let remainder = chunkSize;
      if ((index+1) == primeProcessList.length) {
      	remainder = prime-(index*chunkSize)
      }

      //Send information to the worker thread
      value.send({ vOne: primeList.slice(index*chunkSize,(index*chunkSize)+remainder), pVector: primeList, index: index });
      //Set a listener from the worker thread.
      value.on('message', (message) => {
        primeListComplete[message.index] = true; //Update the process
        primeArrayOfArrays[message.index] = message.mms; //Add the returned Grid to the primeArrayOfArrays List
      	if (primeListComplete.indexOf(false) == -1) {
      	  let multiplyGrid = Array.prototype.concat.apply([], primeArrayOfArrays); //Merge the primeArrayOfArrays List
          resolve(multiplyGrid); //Return the grid as a promise
      	}
     });
   }
   });
}

module.exports = createMultiplyMatrixMultiThread;
