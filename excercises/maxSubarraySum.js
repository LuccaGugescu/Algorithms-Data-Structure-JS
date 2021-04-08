function maxSubarraySum(arr, SW) {
    let maxSum = 0;
    let temp;
    if (arr.length < SW) return null;
    for(let i = 0; i < SW; i++) {
        maxSum += arr[i];
    }
    temp = maxSum;
    for(let i = SW; i < arr.length; i++) {
        temp = temp - arr[i-SW] + arr[i];
        maxSum = Math.max(maxSum, temp); 
    }
    return maxSum;
}
console.log(maxSubarraySum([100,200,300,400], 2));