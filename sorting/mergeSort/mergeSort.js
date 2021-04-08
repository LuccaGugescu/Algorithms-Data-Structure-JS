const merge = require("./merge");

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))))
}
console.log(mergeSort([3,21,4,2,6,5]));