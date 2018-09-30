var assert = require('assert');  //for mocha unit testing framework
var argumentIsPositiveInteger = require('../argumentIsPositiveInteger');
var getPrimes = require('../getPrimes');

//Create a test collection for the user input
describe('UserInput', function() {
  //Tests what happens when the input is not a Number
  describe('#primesInputArgument', function() {
    it('should return false when the input is not a Number', function() {
      assert.equal(argumentIsPositiveInteger("a"), false);
    });
  });
  //Tests what happens when the input is not an Integer
  describe('#primesInputArgument', function() {
    it('should return false when the input is a Number but not an Integer', function() {
      assert.equal(argumentIsPositiveInteger(1.5), false);
    });
  });
  //Tests what happens when the number is not a positive integer
  describe('#primesInputArgument', function() {
    it('should return false when the input is a Number and an Integer but not positive', function() {
      assert.equal(argumentIsPositiveInteger(-1), false);
    });
  });
  //Tests what happens when the number is a positive Integer
  describe('#primesInputArgument', function() {
    it('should return true when the input is a positive integer', function() {
      assert.equal(argumentIsPositiveInteger(1), true);
    });
  });
});

//Create a test collection for getting primes
describe('GetPrimes', function() {
  describe('#CheckPrimeList', function() {
    //Tests what happens when a return primeList array includes a non prime number
    //This has a flaw due to assert using == instead of a deep equality.
    it('should return false when the first 3 primes are equal to [2, 3, 4]', function() {
      //Hack required by the libraries equal assertion
      const testArray = [2, 4, 5];
      assert.notEqual(getPrimes(3).toString(), testArray.toString());
    });
  });
  describe('#primesInputArgument', function() {
    //Tests whether 1 exists in the list as 1 is not a prime number
    //This seems obvious but is pertinent to my algorithm
    it('should return -1 when a search for 1 is included', function() {
      assert.equal(getPrimes(10).indexOf(1), -1);
    });
  });
  describe('#primesInputArgument', function() {
    //Tests that the correct number of primes is returned
    it('should return a length of Array equal to the input value', function() {
      assert.equal(getPrimes(1000).length, 1000);
    });
  });
  describe('#primesInputArgument', function() {
    //Tests that the first 8 primes are correct based on known values
    it('should return true when the first 8 prime numbers equal the array given', function() {
      const testArray = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
      assert.equal(getPrimes(8).toString(), testArray.toString());
    });
  });
});

//TODO: Test Multiply Matrix
