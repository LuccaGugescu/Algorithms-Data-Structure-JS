/*
function maxSubarraySum(arr, SW) {
    let max = null;
    acc = 0;
    if(arr.length < SW || SW > arr.length) return null;
    for(let i = 0; i <= arr.length - SW; i++) {
        for(let j = i; j < i + SW; j++) {
            acc += arr[j];
        }
        if(max === null || max < acc) max = acc;
        acc = 0;
    }
    return max;
}
*/

function maxSubarraySum(arr, SW) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < SW) return null;
    for(let i = 0; i < SW; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for(let i = SW; i < arr.length; i++) {
        tempSum = tempSum - arr[i - SW] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;

}




console.log(maxSubarraySum([100,200,300,400], 2));