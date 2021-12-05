/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
    let counter = 1;
    let resp = 0;
    let v1 = version1.includes('.')?version1.split('.'):(version1?[version1]:'');
    let v2 =  version2.includes('.')?version2.split('.'):(version2?[version2]:'');
    if(v1.length > v2.length){
        let diff = v1.length - v2.length;
        for(let i=0; i < diff; i++){
            v2.push(0);
        }
    }else if(v1.length < v2.length){
         let diff = v2.length - v1.length;
        for(let i=0; i < diff; i++){
            v1.push(0);
        }
    }
      if(+v1[0] < +v2[0]){
            return -1
    }else if(+v1[0] > +v2[0]){
            return 1
    }
    while(counter < v1.length){
           
           resp = compareVersions(v1, v2, counter)
           counter++;
           if(resp == -1 || resp == 1){
               return resp;
           }
    }

    return resp;
};
const compareVersions = (v1, v2, counter)=>{
    // console.log(v1[counter] + " :: "  + v2[counter])
     if(+v1[counter] < +v2[counter]){
            return -1
    }else if(+v1[counter] > +v2[counter]){
            return 1
    }else{
        return 0
    }
}