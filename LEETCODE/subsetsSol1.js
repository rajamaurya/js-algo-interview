/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let subsets = [];
    if(nums.length == 0 || nums == undefined || nums == null){
        return [[]];
    }
    subsets  = nums.reduce((subset, curr)=> {
        console.log(subset);
        return subset.concat(subset.map(e=> [curr,...e]))
    },[[]])
   // })
    return subsets;
};

const res = subsets([1,2,3,4])
