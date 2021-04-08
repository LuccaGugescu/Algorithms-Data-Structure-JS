function counterSort(arr) {
    let result = [];
    let freq = {};
    for(let element of arr) {
        freq[element] = (freq[element] || 0) + 1;
    }
    for(key in freq) {
        while(freq[key] > 0) {
            result.push(parseInt(key));
            freq[key]--;
        }
    }
    return result;
}
console.log(counterSort([2,1,3,44,2,33,1,23]));