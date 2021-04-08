function maxSubarrayAverage(arr, SW) {
    let maxAverage = 0;
    let tempSum = 0;
    if (arr.length < SW) return null;
    for(let i = 0; i < SW; i++) {
        maxAverage += arr[i];
    }
    tempSum = maxAverage;
    maxAverage /= SW;

    for(let i = SW; i < arr.length; i++) {
        tempSum = tempSum - arr[i - SW] + arr[i];
        tempSum /= SW;
        maxAverage = Math.max(maxAverage, tempSum);
    }
    return maxAverage;

}




console.log(maxSubarrayAverage([2,6,9,2,1,8,5,6,2], 9));