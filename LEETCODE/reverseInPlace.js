/**
 * https://leetcode.com/problems/reverse-string/submissions/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) { // multipointer solution----------------------
    let j = 0;
    for(let i = s.length -1 ; i >=0; i--){
        
         if(j <= i){
              let temp = s[j];
             s[j] = s[i];
             s[i] = temp
         }else{
             return;
         }
    
        j++;
    }
};

/*
var reverseString = function(s) {
       
    let left = 0;
    let right = s.length-1;
    
    while(left <= right){
        if(left <= right){
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp
        }else{
            return;
        }
        left++;
        right--;
    }
};
*/

/*
  Using stack-------------------------
  var reverseString = function(s) {
    let stack = [];
    for(let i = 0 ; i < s.length; i++){
        stack.push(s[i])
    }
    for(let j = 0; j < s.length; j++){
        s[j] = stack.pop();
    }
};
*/

/* multipointer solution----------------------
 let left = 0;
    let right = s.length-1;
    
    while(left <= right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

*/
/* By Using inbuilt funtion-----------------------------------
var reverseString = function(s) {
   s.reverse()
};
*/