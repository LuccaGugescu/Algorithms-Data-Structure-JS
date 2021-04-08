
function binarySearch(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor(left + right);
    if(arr[middle] === n) {
        return true;
    }
    else if(arr[middle] > n) {
        right = middle -1;
    }
    else {
        left = middle + 1;
    }
    
    return (left >= right) ? false :binarySearch(arr.slice(left, right+1), n);
}





console.log(binarySearch([1,2,3,4,5,6], 9));