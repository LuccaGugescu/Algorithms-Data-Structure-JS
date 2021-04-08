//two pointers
/*
function areThereDuplicates() {
    let i = 0;
    for(let j = 1; i < arguments.length; j++) {
        if(arguments[i] === arguments[j]) return true;
        else {
            i = j;
        }
    }
    return false;
}
console.log(areThereDuplicates(1, 2 ,2));*/

function areThereDuplicates() {
    let frequency = {};
    for(let i of arguments) {
        frequency[i] = (frequency[i] || 0) + 1;
        if(frequency[i] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));