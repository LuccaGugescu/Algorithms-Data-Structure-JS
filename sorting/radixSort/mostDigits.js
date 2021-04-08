const digitCount = require("./digitCount");
function mostDigits(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(digitCount(arr[i]) > max) max = digitCount(arr[i]);
    }
    return max;
}

module.exports = mostDigits;