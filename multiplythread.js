
async function multiplyPrimes(vectorOne, primeVector) {
  let grid = [];
  //const t3 = Date.now();

  //Create a multipled Matrix
  for (let i = 0; i < vectorOne.length; i++) {
    const newArray = primeVector.map(function(arr) {
  	  return arr*vectorOne[i];
    });
    grid.push(newArray);
  }
  //console.log((Date.now()-t3));
  return grid;
}

// receive message from master process
process.on('message', async (message) => {
  //run the async func multiplyPrimes
  const multiplyMatrixSec = await multiplyPrimes(message.vOne, message.pVector);
  //Keep track of the process number
  const index = message.index;
  // send response to master process
  process.send({ mms: multiplyMatrixSec, index: index });
});
