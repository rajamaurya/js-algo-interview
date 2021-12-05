class JSON{
    #strings;
    constructor(){
       
    }

    stringify(obj, newObj =  {}){
        for(let [key, value] of Object.entries(obj)){
            if(typeof value == 'function'){
                newObj[key] =  value.toString();
            }
            newObj[key] =  value+'';
            if(typeof value == 'object'){
                newObj[key] = this.stringify(value, newObj);
            }
        }
        return newObj+'';
    }
}

const res = new JSON();
let obj = {
    "one": 1,
     sing(){
         return this.one;
     },
     print: {
         name: {
             firstName: "Raja",
             lastName: "Maurya"
         },
         work: "none"
     }
}
let result = res.stringify(obj);
console.log(typeof result)