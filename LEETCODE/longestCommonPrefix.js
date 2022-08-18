/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    if(strs .length == 1)return strs[0];
    if(strs .length == 0)return "";
    strs = strs.sort((a,b)=> a.length-b.length);
    let first = strs[0];
    let j = 0;
    let prefix = ""
    while(j < first.length){
          let temp = first[j];
          for(let i = 1; i < strs.length; i++){
              if(temp !== strs[i][j]){
                 return prefix;
              }
          }
          prefix +=temp;
          j++;
    }
    return prefix
};