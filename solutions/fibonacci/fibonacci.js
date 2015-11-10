function getSequence(n) {
    if (n < 1) return [];

    if (n === 1) return [0];

    var result = [0, 1];

    for (var i = 0; i < n - 2; i++) {
        result.push(result[i] + result[i + 1]);
    }

    return result;
}

module.exports = {
    getSequence: getSequence
};
