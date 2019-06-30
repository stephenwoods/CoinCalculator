var assert = require('chai').assert;
var expect = require('chai').expect;
var parser = require('../parser.js');

describe('Parser', function() {
  describe('isValidInput', function() {
    it('should return true when you have a well-formatted input string.', function() {
      assert.equal(true, parser.isValidInput('$125'));
      assert.equal(true, parser.isValidInput('$125.25'));
      assert.equal(true, parser.isValidInput('$0.25'));
      assert.equal(true, parser.isValidInput('$.25'));
      assert.equal(true, parser.isValidInput('$0'));
      assert.equal(true, parser.isValidInput('125'));
      assert.equal(true, parser.isValidInput('125.25'));
      assert.equal(true, parser.isValidInput('0.25'));
      assert.equal(true, parser.isValidInput('.25'));
      assert.equal(true, parser.isValidInput('0'));
    });
    it('should return false when you have a mal-formatted input string', function() {
      assert.equal(false, parser.isValidInput('garbage'));
      assert.equal(false, parser.isValidInput('$123.456'));
      assert.equal(false, parser.isValidInput('$.1'));
      assert.equal(false, parser.isValidInput('$1.'));
      assert.equal(false, parser.isValidInput('1.'));
      assert.equal(false, parser.isValidInput('$1.1'));
      assert.equal(false, parser.isValidInput('$..'));
      assert.equal(false, parser.isValidInput('$.'));
      assert.equal(false, parser.isValidInput('.'));
    });
  });
  describe('getCoinSetForDollars', function() {
    it('should return the correct set when receiving a valid input string.', function() {
      expect({ "Dollars": 1 }).to.eql(parser.getCoinSetForDollars("$1.00"));
      expect({ "Dollars": 1 }).to.eql(parser.getCoinSetForDollars("$1"));
      expect({ "Dollars": 1 }).to.eql(parser.getCoinSetForDollars("1.00"));
      expect({ "Dollars": 1 }).to.eql(parser.getCoinSetForDollars("1"));
      expect({ "Dollars": 1 }).to.not.eql(parser.getCoinSetForDollars("$1.25"));
      expect({ "Dollars": 1, "Quarters": 1, "Nickels": 1 }).to.eql(parser.getCoinSetForDollars("$1.30"));
      expect({}).to.eql(parser.getCoinSetForDollars("$0.00"));
      expect({}).to.eql(parser.getCoinSetForDollars("0.00"));
      expect({}).to.eql(parser.getCoinSetForDollars("0"));
    });
  });

  // describe('calculateRPN', function() {
  //   describe('addition', function() {
  //     it('should add single digit numbers together', function() {
  //       assert.equal('9', parser.calculateRPN('1','8','+'));
  //     });
  //     it('should add multiple digit numbers together', function() {
  //       assert.equal('1234', parser.calculateRPN('34', '1200', '+'));
  //     });
  //     it('should add floating point numbers together', function() {
  //       assert.equal('1234.567', parser.calculateRPN('34.56', '1200.007', '+'));
  //     });
  //     it('should add floating point and whole numbers together', function() {
  //       assert.equal('1234.567', parser.calculateRPN('34', '1200.567', '+'));
  //     });
  //     it('should output an error message on overflow', function() {
  //       assert.equal('Error: Overflow', parser.calculateRPN('1', Number.MAX_SAFE_INTEGER.toString(), '+'));
  //     });
  //   });
  //   describe('subtraction', function() {
  //     it('should subtract single digit numbers', function() {
  //       assert.equal('-7', parser.calculateRPN('1','8','-'));
  //     });
  //     it('should subtract multiple digit numbers', function() {
  //       assert.equal('1166', parser.calculateRPN('1200', '34', '-'));
  //     });
  //     it('should subtract floating point numbers', function() {
  //       assert.equal('-1165.53', parser.calculateRPN('34.57', '1200.1', '-'));
  //     });
  //     it('should subtract floating point and whole numbers', function() {
  //       assert.equal('1166.567', parser.calculateRPN('1200.567', '34', '-'));
  //     });
  //     it('should output an error message on underflow', function() {
  //       assert.equal('Error: Underflow', parser.calculateRPN('-1', Number.MAX_SAFE_INTEGER.toString(), '-'));
  //     });
  //   });
  //   describe('multiplication', function() {
  //     it('should multiply single digit numbers', function() {
  //       assert.equal('9', parser.calculateRPN('3','3','*'));
  //     });
  //     it('should multiply multiple digit numbers', function() {
  //       assert.equal('121', parser.calculateRPN('11', '11', '*'));
  //     });
  //     it('should multiply floating point numbers', function() {
  //       assert.equal('1.56', parser.calculateRPN('1.2', '1.3', '*'));
  //     });
  //     it('should multiply floating point and whole numbers', function() {
  //       assert.equal('172.5', parser.calculateRPN('11.5', '15', '*'));
  //     });
  //     it('should output an error message on overflow', function() {
  //       assert.equal('Error: Overflow', parser.calculateRPN('2', Number.MAX_SAFE_INTEGER.toString(), '*'));
  //     });
  //   });
  //   describe('division', function() {
  //     it('should divide single digit numbers', function() {
  //       assert.equal('3', parser.calculateRPN('9','3','/'));
  //     });
  //     it('should divide multiple digit numbers', function() {
  //       assert.equal('12', parser.calculateRPN('132', '11', '/'));
  //     });
  //     it('should divide floating point numbers', function() {
  //       assert.equal('1.125', parser.calculateRPN('1.8', '1.6', '/'));
  //     });
  //     it('should divide floating point and whole numbers', function() {
  //       assert.equal('.2956521739130435', parser.calculateRPN('13.6', '46', '/'));
  //     });
  //     it('should divide an error message on overflow', function() {
  //       assert.equal('Error: Overflow', parser.calculateRPN(Number.MAX_SAFE_INTEGER.toString(), '0.5', '/'));
  //     });
  //   });
  // });
});
