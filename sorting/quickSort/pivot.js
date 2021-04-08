function pivot(arr, start, end) {
    let pivot = start;
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    for(let i = start+1; i < end; i++) {
        if(arr[i] < arr[pivot]) {
            pivot++;
            swap(arr, pivot, i);
            
        }
    }
    swap(arr, start, pivot);
    return pivot;
}
module.exports = pivot;