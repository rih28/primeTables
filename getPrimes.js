
/*
 * Gets a user defined number of prime numbers and puts them in a list
 * The solution to this is fairly well defined and can be optimised further
 * but the performance is relatively good at the moment for reasonably large numbers i.e. (50000)
 * it could be reduced, but it would likely take as long as we would have to wait
 * for the first async function to finish to utilise the root of the prior primes
 * The two best ways to speed this up are have a lookuptable of the first 100 primes (or so)
 * as they are the highest prime in this list is greater than the square root
 * The other method is to use C++ Add-ons for real multithreaded computing but this
 * is outside the scope
 * @param {number} pVal
 * @return {Array} primeArray
 */

function getPrimes(pVal) {
  const t1 = Date.now();
  let primeArray = []; //create an empty Array
  let i = 0; //Set an iterator
  while (primeArray.length < pVal) { //while loop condition makes sure that the correct number of user defined primes is returned
    if (i > 1) { //1 is not a prime (I tested for this)
      if (i%2 == 0) { //Check whether the value is even
        if (i == 2) { //If it is even and equals only 2, then push to the primeArray. I felt this was trivial and did not need calculation using square roots
          primeArray.push(i)
        } else {
      	  //TODO: just in case
        }
      } else { //all odd numbers
        let isPrimeTest = true; //assume the number is prime
        let sqrtOfNumber = Math.floor(Math.sqrt(i)); //get the square root of the number
        rootPrimeArray = primeArray.filter(function (prime) { //filter the list of prior found primes to be less than or equal to the square root (integer part) of the number being tested.
  	      return prime <= sqrtOfNumber;
        });
        //divide the number by this filtered list of primes
        for (var j = 0; j < rootPrimeArray.length; j++) {
      	  if (i%primeArray[j] == 0) { //if the remainder is 0, then it is divisible by a prime and therefore is not prime
            isPrimeTest = false; //set prime to false
          }
        }
        if (primeArray.indexOf(i) == -1 && isPrimeTest == true) { //check whether number exists already and that it is prime
          primeArray.push(i) //add to the primeArray
        }
      }
    }
    i++; //update the increment
  }
  //console.log((Date.now()-t1)); //50000 takes about 20s which is a long time. I highlighted in the comments the restrictions and methods to resolve this. C++ add-on would likely increase performance in one thread.
  return primeArray;
}

module.exports = getPrimes;
