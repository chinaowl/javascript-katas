var fibonacci = require('./fibonacci');

describe('Fibonacci', function () {
    it('returns first number', function () {
        expect(fibonacci.getSequence(1)).toEqual([0]);
    });

    xit('returns first two numbers', function () {
        expect(fibonacci.getSequence(2)).toEqual([0, 1]);
    });

    xit('returns first three numbers', function () {
        expect(fibonacci.getSequence(3)).toEqual([0, 1, 1]);
    });
});
