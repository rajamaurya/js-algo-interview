/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 283. Move Zeroes
 Easy 6 8360 ♡ 227 Add to List O Share
 Given an integer array nums , move all e's to the end of it
 while maintaining the relative order of the non-zero
 elements.
 Note that you must do this in-place without making a copy
 of the array.
 Example 1:
   Input: nums = [0,1,0,3,12]
   Output: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if(nums.length == 1){
     return nums
    }
 let pos = 0;
 for(let i = 1; i< nums.length; i++){
     if(nums[pos] == 0 && nums[i] !== 0){
         nums[pos] = nums[i];
         nums[i] = 0;
         pos++;
     }else if(nums[pos] == 0 && nums[i] ==0){
         continue;
     }else{
         pos++;
     }
 }
 return nums;
/*
 let countZ = 0, temp = 0, ans = [];
 for(let i = 0; i < nums.length; i++){
     if(nums[i] == 0){
         countZ++;
     }
 }

 for(let i = 0; i < nums.length; i++){
     if(nums[i] !== 0){
         nums[temp] = nums[i];
         temp++;
     }
     if(i >=temp){
         nums[i] = 0
     }
 }
 
 return nums;
 */
};