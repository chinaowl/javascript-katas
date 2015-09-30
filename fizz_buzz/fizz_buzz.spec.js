var fb = require('./fizz_buzz');

describe('FizzBuzz', function() {
    it('returns 1 for 1', function() {
        expect(fb.fizzBuzz(1)).toEqual(1);
    });

    xit('returns fizz for 3', function() {
        expect(fb.fizzBuzz(3)).toEqual('Fizz');
    });

    xit('returns buzz for 5', function() {
        expect(fb.fizzBuzz(5)).toEqual('Buzz');
    });
});
