var fb = require('./fizz_buzz');

describe('FizzBuzz', function () {
    it('returns 1 for 1', function () {
        expect(fb.fizzBuzz(1)).toEqual(1);
    });

    it('returns fizz for 3', function () {
        expect(fb.fizzBuzz(3)).toEqual('Fizz');
    });

    it('returns buzz for 5', function () {
        expect(fb.fizzBuzz(5)).toEqual('Buzz');
    });

    it('returns fizzbuzz for 15', function () {
        expect(fb.fizzBuzz(15)).toEqual('FizzBuzz');
    });

    it('handles invalid input', function () {
        expect(fb.fizzBuzz()).toEqual('I do not know what that is');
        expect(fb.fizzBuzz('abc')).toEqual('I do not know what that is');
    });
});
