function naiveSearch(string, search) { 
    let count = 0;
    let j = 0;
    for(let i of string) {  
        if(i === search[j]) {   
            j++;
        } else {
            j = 0;
        }
        if(j === search.length - 1) count++;
        
        
    }
    return count;
}

console.log(naiveSearch("lucca is the best the", "the"));