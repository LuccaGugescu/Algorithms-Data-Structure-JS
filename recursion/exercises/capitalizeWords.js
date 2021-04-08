function capitalizeWords(arr) {
    let words = [];
    if(arr.length === 0) return words;
    words.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return words.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(["salut", "ce faci", "xc"]));