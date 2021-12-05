/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let res = [];
    // first way
//     let i = 0, j = 0;
    
//     while(i < nums1.length && j < nums2.length){
//         if(nums1[i] == nums2[j]){
//             res.push(nums1[i]);
//             i++;
//             j++
//         }else if(nums1[i] < nums2[j]){
//             i++
//         }else{
//             j++
//         }
//     }
    
// second way..
         let map = new Map();
         for(let i of nums2){
         map.has(i)? map.set(i, map.get(i)+1): map.set(i, 1);
         }
         res = helper(map, nums1,nums2, res)
    
     return res;
};

const helper = (map, nums1, nums2, res)=>{
    for(let i= 0; i < nums1.length; i++){
     if(map.has(nums1[i]) && map.get(nums1[i]) !== 0){
        res.push(nums1[i]);
        map.set(nums1[i], map.get(nums1[i])-1)
     }
    }
    return res;
}