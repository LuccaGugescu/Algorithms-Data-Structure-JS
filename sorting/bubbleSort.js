function bubbleSort(arr) {
    let k = 1;
    let temp = 0;
    swap = true;
    while(swap) {
        swap = false;
        for(let i = 0; i < arr.length - k; i++) {
            if(arr[i] > arr[i+1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swap = true;    
            }
            
        }
        k++;
    }
    return arr;
}


console.log(bubbleSort([7,6,5,4,3,2,1]));