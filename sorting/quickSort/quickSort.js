var pivot = require("./pivot");
function quickSort(arr, left = 0, right = arr.length) {
    if(left < right) {
        let pivotId = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotId - 1);
        //right
        quickSort(arr, pivotId+1, right);
    }
    return arr;
}

console.log(quickSort([1,3,2,4,6,3]));