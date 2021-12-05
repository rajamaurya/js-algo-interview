/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let res = [];
    if(nums.length <3){
        return []
    }
    nums.sort((a,b)=>a-b)
    if(nums.every(el=>el==0)){
        return [[0,0,0]];
    }
    for(let i  = 0; i < nums.length -2; i++){
        let left = i +1;
        let right = nums.length -1;
        
        while(left < right){
      
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum == 0){
                res.push([nums[i] , nums[left], nums[right]]);
                left++;
                right--;
              
            
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
         }
        
    }
    let ob ={};
    for(let r of res){
       if(!ob[r]){
           ob[r] = 1
       }
    }
   res = [];
   for(let keys of Object.keys(ob)){
      res.push(keys.split(',').map(el=>+el))
   }
   return res;
};