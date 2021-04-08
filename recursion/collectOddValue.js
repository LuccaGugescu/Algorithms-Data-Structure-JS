function collectOddValue(nums) {
    let result = [];
    function helper(helperInput) {
        if(helperInput.length === 0) {
            return ; 
        }
        if(helperInput[0] % 2 === 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1))
    }
    helper(nums);
    return result;
}

console.log(collectOddValue([21,34,5,2,4,12,432,5423,3]));