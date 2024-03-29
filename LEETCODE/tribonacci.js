/**
 * 
 * @param {tribonacci
Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

The 0-th and 1-st numbers of the sequence are both 0.

The 2-nd number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous three numbers.

Solve this recursively.

test_00:
tribonacci(0); // -> 0
test_01:
tribonacci(1); // -> 0
test_02:
tribonacci(2); // -> 1
test_03:
tribonacci(5); // -> 4
test_04:
tribonacci(7); // -> 13
test_05:
tribonacci(14); // -> 927
test_06:
tribonacci(20); // -> 35890
test_07:
tribonacci(37); // -> 1132436852} n 
 * @param {*} memo 
 * @returns 
 */
const tribonacci = (n, memo = {}) => {
    if(n ==0 || n == 1 )return 0;
    if(n == 2) return 1;
    if(memo[n]) return memo[n]
    memo[n] = tribonacci(n-1, memo)+ 
              tribonacci(n-2, memo)+
              tribonacci(n-3, memo)
    return memo[n];
  };
  
  module.exports = {
    tribonacci,
  };
  