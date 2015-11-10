var fibonacci = require('./fibonacci');

describe('Fibonacci', function () {
    it('returns an empty array', function () {
        expect(fibonacci.getSequence(0)).toEqual([]);
    });

    it('returns first number', function () {
        expect(fibonacci.getSequence(1)).toEqual([0]);
    });

    it('returns first two numbers', function () {
        expect(fibonacci.getSequence(2)).toEqual([0, 1]);
    });

    it('returns first three numbers', function () {
        expect(fibonacci.getSequence(3)).toEqual([0, 1, 1]);
    });

    it('returns first five numbers', function () {
        expect(fibonacci.getSequence(5)).toEqual([0, 1, 1, 2, 3]);
    });

    it('returns first ten numbers', function () {
        expect(fibonacci.getSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
