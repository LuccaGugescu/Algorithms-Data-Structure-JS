//Performance o(N)

/*function hash(key, arrLen) {
    let total = 0;
    for(let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrLen;
    }
    return total;
}*/



function hash(key, arrLen) {
    let total = 0;
    const WEIRDN = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let value = key[i].charCodeAt(0) - 96;
        total = (total + WEIRDN + value) % arrLen;
    }
    return total;
}

console.log(hash("salut", 12));