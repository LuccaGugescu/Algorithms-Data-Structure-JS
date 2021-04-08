function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1.length !== num2.length) return false;
    let freq1 = {};
    let freq2 = {};
    for(let i of num1) {
        freq1[i] = (freq1[i] || 0) + 1;
    }
    for(let i of num2) {
        freq2[i] = (freq2[i] || 0) + 1;
    }
    
    for(let key in freq1) {
        if(freq1[key] !== freq2[key]) {
            return false
        }
    }
    return true;
}

console.log(sameFrequency(11212, 22111));
  