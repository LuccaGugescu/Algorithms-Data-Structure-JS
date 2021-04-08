function some(arr, call) {
    if(arr.length === 0) return false;
    if(call(arr[0])) return true;
    return some(arr.splice(1), call);
}

console.log(some([1,2,11,4], val => val > 10));


