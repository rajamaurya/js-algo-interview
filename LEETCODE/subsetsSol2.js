/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let subset =  [];
    
    let result =[], index = 0, currentSet=[];
    
    let subsets = getAllSubsets(nums,index,currentSet,result);
    return subsets;
};

const getAllSubsets = (nums,index,currentSet,result)=>{
    result.push([...currentSet]);
    if(index == nums.length){
        return result;
    }
    for(let i = index; i < nums.length; i++){
        currentSet.push(nums[i])
        getAllSubsets(nums, i + 1, currentSet, result);
        console.log("currentSet: ", currentSet)
        currentSet.length --;
    }
    return result;
}