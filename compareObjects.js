let obj1 = {
    "one": 1,
    //  sing(){
    //      return this.one;
    //  },
     print: {
         name: {
             firstName: "Raja",
             lastName: "Maurya"
         },
         work: "none"
     }
}

let obj2 = {
    "one": 1,
    // sing(){
    //     return this.one;
    // },
    print: {
        name: {
            firstName: "Raja",
            lastName: "Maurya"
        },
        work: "none"
    }
}

const compareObj = (obj1, obj2)=>{
     for(let [key, value] of Object.entries(obj1)){
        if(!obj2.hasOwnProperty(key)){
            return false;
        }else if(typeof value == 'object'){
            return compareObj(value, obj2[key])
        }else if(typeof value == 'function'){ // issues with comparing fn
            return value.toString() == obj2[key].toString();
        }
        else if(value !== obj2[key]){
            return false; 
        }
     }
     return true;
 }


 let res = compareObj(obj1,obj2);

 console.log(res);