const  charCount = (str) => { // hello World
    let chars = {};
    for(let char of str) {
        char = char.toLowerCase();
       if(/[a-z0-9]/.test(char)) {
            chars[char] = ++chars[char] || 1;
        }
    }
    return chars;
}


console.log(charCount("Hello World"));