const { fork } = require('child_process'); //This is not the most graceful solutions, but C++ Add-ons were not in the spec

let primeArrayOfArrays = [];
let primeListComplete = [];
const chunkSize = 1000; //Just picked a reasonable number

async function createMultiplyMatrixMultiThread(primeList, prime) {
  return new Promise(function(resolve, reject) {

  //console.log("test 1")
  let primeProcessList = [];
  let numberOfPrimeProcesses = Math.floor(prime/chunkSize);
  const remainderOfPrimeProcesses = prime%chunkSize;

  //console.log("test 2: " + numberOfPrimeProcesses + " - " + remainderOfPrimeProcesses)

  if (remainderOfPrimeProcesses > 0) {
      numberOfPrimeProcesses = numberOfPrimeProcesses + 1;
  }

  for (let i = 0; i < numberOfPrimeProcesses; i++) {
      let process = fork('./multiplythread.js');
      primeProcessList.push(process);
      primeArrayOfArrays.push([]);
      primeListComplete.push(false);
  }

  //console.log(primeProcessList);
  //console.log(primeArrayOfArrays);
  //console.log(primeListComplete);

  for (const [index, value] of primeProcessList.entries()) {
      let remainder = chunkSize;
      if ((index+1) == primeProcessList.length) {
      	remainder = prime-(index*chunkSize)
      }

      //console.log(index)

      value.send({ vOne: primeList.slice(index*chunkSize,(index*chunkSize)+remainder), pVector: primeList, index: index });
      value.on('message', (message) => {
        primeListComplete[message.index] = true;
        primeArrayOfArrays[message.index] = message.mms;
        console.log(primeListComplete);
      	if (primeListComplete.indexOf(false) == -1) {
          console.log("good to go")
      	  let multiplyGrid = Array.prototype.concat.apply([], primeArrayOfArrays);
          resolve(multiplyGrid);
          //console.log(multiplyGrid);
          //return multiplyGrid;
      	  //console.log(multiplyGrid);
      	  //viewMatrixOutput(primeList, multiplyGrid)
      	  //console.log(primeArrayOfArrays[1].length);
          //viewMatrixOutput(primeList, multiplyGrid)
      	  //test(primeList);
      	}
        //console.log(`Process ${index} returned ${message.pla}`);
     });
   }
   });
}

module.exports = createMultiplyMatrixMultiThread;
