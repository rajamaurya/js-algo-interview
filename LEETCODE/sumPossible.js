/**
 * 
 * @param {sum possible
Write a function sumPossible that takes in an amount and an array of positive numbers. The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.

test_00:
sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
test_01:
sumPossible(15, [6, 2, 10, 19]); // -> false
test_02:
sumPossible(13, [6, 2, 1]); // -> true
test_03:
sumPossible(103, [6, 20, 1]); // -> true
test_04:
sumPossible(12, []); // -> false
test_05:
sumPossible(12, [12]); // -> true
test_06:
sumPossible(0, []); // -> true
test_07:
sumPossible(271, [10, 8, 265, 24]); // -> false
test_08:
sumPossible(2017, [4, 2, 10]); // -> false
test_09:
sumPossible(13, [3, 5]); // -> true} amount 
 * @param {*} numbers 
 * @returns 
 */
const sumPossible = (amount, numbers) => {
    if(amount == 0) return true;
    let sum = 0;
    let rem = 0;
    for(let no of numbers){
       rem = Math.floor(amount%no);
       if(numbers.indexOf(rem) !== -1)return true;
       if(amount%no == 0)return true;
       sum += no;
    }
    if(sum == amount)return true;
    
    
    return false;
  };
  
  module.exports = {
    sumPossible,
  };
  