const mostDigits = require("./mostDigits");
const getDigit = require("./getDigit");
function radixSort(arr) {
    const t = mostDigits(arr);
    for(let k = 0; k < t; k++) {
        let container = [[],[],[],[],[],[],[],[],[],[]];
        for(let i = 0; i < arr.length; i++) {
            container[getDigit(arr[i], k+1)].push(arr[i]);
        }
        arr = [].concat(...container);
    }
    return arr;
}

console.log(radixSort([32,4,5,1,5,6,7]));