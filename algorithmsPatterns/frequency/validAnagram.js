function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    let freqCounter1 = {};
    for(let char of str1.toLowerCase()) {
        freqCounter1[char] = (freqCounter1[char] || 0) + 1;
    }
    for(let char of str2.toLowerCase()) {
        freqCounter1[char] -= 1;
        if(freqCounter1[char] < 0) {
            return false;
        }
    }
    
    return true;
}

console.log(validAnagram("1234", "43214"));