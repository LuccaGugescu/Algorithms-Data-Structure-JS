function averagePair(arr, average){
    let right = arr.length - 1;
    let left = 0;
    let totAverage;
    while(left < right) {
        totAverage = (arr[left] + arr[right]) / 2;
        if(totAverage === average){ 
            return [arr[right], arr[left]];
        }
        else if(totAverage > average){
            right--;
        }
        else {
            left++;
        }
    }   
    return -1;
}

console.log(averagePair([1,3,3,4,5], 3.5));