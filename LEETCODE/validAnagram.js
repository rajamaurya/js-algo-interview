/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let smap = {};
    if(s.length !== t.length){
        return false;
    }
    for(let i = 0; i< s.length; i++){
        smap[s[i]]? smap[s[i]] +=1 : smap[s[i]] = 1;
    }
    
    for(let i= 0; i < t.length; i++){
        if(smap.hasOwnProperty(t[i])){
            smap[t[i]] -=1;
        }
    }
    let res  = Object.values(smap).every(el=> el == 0)
    return res;
};