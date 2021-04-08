function fibonacci(n) {
    if(n <= 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2); 
}
//dynamic programming
function fib(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
console.log(fibonacci(90));