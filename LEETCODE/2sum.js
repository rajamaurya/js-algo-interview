/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let masterObj = {};
    //let map = new Map();
    for(let i = 0; i < nums.length; i++){
            masterObj[nums[i]] = i;  
            //map.set(nums[i], i);
    }
   if(nums.length >= 2){
        for(let i = 0; i < nums.length; i++){
        let temp = target - nums[i];
          if( masterObj[temp] && i !== masterObj[temp]){
              return [i, masterObj[temp]];
          }
            // if(map.has(temp)){
            //     return [i, map.get(temp)];
            // }
       }
   }
   
    
};