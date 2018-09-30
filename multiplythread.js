async function multiplyPrimes(vectorOne, primeVector) {
  let grid = [];
  //console.log(vectorOne);

  //const b1 = Date.now();

  //TODO: cut it into chunks
  for (let i = 0; i < vectorOne.length; i++) {
    const newArray = primeVector.map(function(arr) {
  	  return arr*vectorOne[i];
    });
    grid.push(newArray);
  }
  //console.log(grid);
  //console.log((Date.now()-b1));
  return grid;
}

// receive message from master process
process.on('message', async (message) => {
  const multiplyMatrixSec = await multiplyPrimes(message.vOne, message.pVector);

  const index = message.index;
  //console.log("worker test");

  // send response to master process
  process.send({ mms: multiplyMatrixSec, index: index });
});
