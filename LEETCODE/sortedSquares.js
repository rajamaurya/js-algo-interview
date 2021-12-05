/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // let squaredArr = nums.map(el=>el*el);
    // squaredArr.sort((a,b)=> a-b);
    // return squaredArr;
    let start = 0;
    let end = nums.length -1;
    let res = []
    let i = end;
    while(start <= end){
        let a = nums[start] * nums[start];
        let b = nums[end]*nums[end];
        
        if(a < b){
            res[i] = b;
            end--;
        }else{
            res[i] = a;
            start++;
        }
        i--;
    }
    return res;
};