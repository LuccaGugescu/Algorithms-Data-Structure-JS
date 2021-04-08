function capitalizeFirst(arr) {
    let result = [];
    if(arr.length === 1) return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return result.concat(capitalizeFirst(arr.slice(1)));
}


console.log(capitalizeFirst(["salut", "ceface", "mohameds"]));