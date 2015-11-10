function fizzBuzz(n) {
    if (typeof n === 'number') {
        switch (n) {
            case 15:
                return 'FizzBuzz';
            case 3:
                return 'Fizz';
            case 5:
                return 'Buzz';
            default:
                return n;
        }
    }

    return 'I do not know what that is';
}

module.exports = {
    fizzBuzz: fizzBuzz
};
