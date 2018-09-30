var assert = require('assert');  //for mocha unit testing framework
var argumentIsPositiveInteger = require('../argumentIsPositiveInteger');

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


//TODO: Test Prime list
//TODO: Test Multiply Matrix
