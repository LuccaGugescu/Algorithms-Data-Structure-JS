function selectionSort(arr) {
    
    for(var i = 0; i < arr.length ; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
             min = j;  
            }
        }
        if(i != min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([2,31,3,45,6]));
