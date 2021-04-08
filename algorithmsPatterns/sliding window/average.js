function maxSubarrayAverage(arr, SW) {
    if (arr.length < SW) return null;
    let tempSum = 0;
    let average = [];
    for(let i = 0; i < SW; i++) {
        tempSum += arr[i];
    }
    average.push(tempSum / SW);

    for(let i = SW; i < arr.length; i++) {
        tempSum = tempSum - arr[i - SW] + arr[i];
        average.push(tempSum / SW);
    }
    return average;

}




console.log(maxSubarrayAverage([2,6,9,2,1,8,5,6,2], 3));