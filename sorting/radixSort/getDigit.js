function getDigit(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
}
console.log(getDigit(3, 1));

module.exports = getDigit;