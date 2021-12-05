/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {

    // first way

    //     let set = new Set();
    //     let isect = [];
    
    //     for(let i = 0; i< nums1.length; i++){
    //         if(!set.has(nums1[i])){
    //             set.add(nums1[i]);
    //         }
    //     }
        
    //     for(let i = 0; i < nums2.length; i++){
    //         if(set.has(nums2[i])){
    //             isect.push(nums2[i]);
    //             set.delete(nums2[i]) // if you do not delete, it simply add duplicates
    //         }
    //     }
         
    //     return isect;
        
        // another way of solving...
        
        nums1.sort((a,b)=>a-b);
        nums2.sort((a,b)=>a-b);
        let res = [];
        // without using set or map
        let i = 0, j = 0;
        
        while(i < nums1.length && j < nums2.length){
            if(nums1[i] == nums2[j]){
                res.push(nums1[i]);
                i++;
                j++
            }else if(nums1[i] < nums2[j]){
                i++
            }else{
                j++
            }
        }
        return [...new Set(res)];
    };