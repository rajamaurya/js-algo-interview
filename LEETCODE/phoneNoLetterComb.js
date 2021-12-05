/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {

    if(digits == null || digits == undefined || digits.length == 0){
        return [];
    }
   
     const keyPad = {
         2: 'abc',
         3: 'def',
         4: 'ghi',
         5: 'jkl',
         6: 'mno',
         7: 'pqrs',
         8: 'tuv',
         9: 'wxyz'
     }  
     
     if(digits.length == 1){
        return  keyPad[digits[0]].split("");
     }
       
     let maps = [];
     for(let i= 0; i < digits.length; i++){
          maps.push(keyPad[digits[i]]);
     }
     
     let result = mapper(maps, '', 0, digits, []);
     return result;
   };
   
   const mapper = (arr, str, count, digits, result)=>{
       let res = result;
       if(count == digits.length){
           res.push(str)
           return;
       }
       let temp = arr[count];  // 0: abc, 1: def ...
       
     
       for(let i = 0; i < temp.length; i++){
           
              mapper(arr, str.concat(temp[i]), count+1 , digits ,res);
   
       }
       
     return res;
   }