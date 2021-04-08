function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length -1;
    let middle = 0;
    while(left <= right) {
        middle = Math.floor((right + left ) / 2);
        if(arr[middle] === n) return middle;
        else if(arr[middle] > n) {
            right = middle -1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6], 3));