// https://leetcode.com/problems/length-of-last-word/submissions/
// 1st approach--------------------------------
const lengthOfLastWord = (s)=>{
    let left = 0, right = s.length;
    let count = 0;
    if(s == "")return 0;
    while(left < right){

        if(s[left] !== " "){
            count++;
            left++;
        }else{
            while(left < right && s[left] == " "){
                left++;
            }
            if(left == right){
                return count;
            }else{
                count =0;
            }
        }
       
    }
    
    return count;
}

// 2nd approach--------------------------------
/*var lengthOfLastWord = function(s) {
    let left = 0;
    let right =s.length-1;
    let count = 0;
    let  len = 0;
    if(s == ""){
        return 0;
    }
    while(left <=right){
       if(s[left] !== " "){
           count = count+1;
       }else{
           if(count !== 0){
               len = count;
           }
           
           count = 0;
       }
        
        left++;
    } 
    
    return count==0?len:count;
    */

    // 3rd approach..--------------------------------------

    var lengthOfLastWord = function(s) {
        let left = 0, right = s.length-1;
        let count = 0;
        if(s == "")return 0;
        
        while(right >= left){
    
            if(s[right] !== " "){
                while(right >= left && s[right] !== " "){
                        count++;
                        right--;
                      }
                return count;
                
            }else{
                right--;
            }
        }
        
        return count;
        
    };

    // 4th approach---------------------------------------------

    var lenOfLastWord = function(s) {
        let left = 0, right = s.length-1;
        let count = 0;
        if(s == "")return 0;
        let ns = s.split(" ").reverse().join(" ");
        console.log(ns)
        while(left <= right){
    
            if(ns[left] !== " "){
                while(left <= right && ns[left] !== " "){
                        count++;
                        left++;
                      }
                return count;
                
            }else{
                left++;
            }
        }
        
        return count;
        
    };
