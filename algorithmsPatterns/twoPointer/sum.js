function sum(numbers, n) {
    let left = 0;
    let right = numbers.length - 1;
    let sum;
    
    while(left < right) {
        sum = numbers[left] + numbers[right];
        if(sum === n) {
            return [numbers[left], numbers[right]];
        }
        else if(sum > n) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return -1;
}

console.log(sum([-6, -2, -1, 0, 2, 3, 5], 0));