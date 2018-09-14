'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  //test normal case
  it('should return fizz-buzz on multiples of 15, buzz on multiples of 5, fizz on multiples of 3, and the number on any other number', () => {
    const normalCases = [
      { a: 15, expected: 'fizz-buzz' },
      { a: 5, expected: 'buzz' },
      { a: 3, expected: 'fizz' },
      { a: 30, expected: 'fizz-buzz' },
      { a: 25, expected: 'buzz' },
      { a: 21, expected: 'fizz' },
      { a: 22, expected: 22 },
      { a: 29, expected: 29 }
    ];

    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['a', '3', true];

    badInputs.forEach(input => {
      expect(() => {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
