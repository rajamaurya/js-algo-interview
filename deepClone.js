function deepClone(obj){
     return cloneMeDeeply(obj);
}
const cloneMeDeeply = (obj)=>{
     if(obj == null ||  typeof obj !== 'object'){
         return obj;
     }
    let clone = obj.constructor();
    for(let [key, value] of Object.entries(obj)){
            clone[key] = cloneMeDeeply(value);
     }
     return clone;
}

let obj = {
    one: 1,
    show: function(){
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
let newObj = {
    one : {
        'one-one' : new String("hello"),
        'one-two' : [
            {"one": {
                "t":{
                    "th":{
                        "td": 4
                    }
                }
            }}, "two", true, "four"
        ]
    },
    two : function(){
        return this.one;
    },
    three : [
        {
            name : "three-one",
            number : new Number("100"),
            obj : new function() {
                this.name = "Object test";
            }   
        }
    ],
    four:10
}
let res = deepClone(newObj);
console.log(res)
res.four = 11;;

console.log("RES : ", res);
console.log("NEW OBJ : " , newObj);


function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
       return objectpassed;
    }
  // give temporary-storage the original obj's constructor
  var temporarystorage = objectpassed.constructor(); 
    for (var key in objectpassed) {
        temporarystorage[key] = keepCloning(objectpassed[key]);
    }
    return temporarystorage;
  }
  var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
  var employeeDetailsDuplicate = (keepCloning(employeeDetailsOriginal));
  employeeDetailsOriginal.name = "NameChanged";
  console.log(employeeDetailsOriginal);
  console.log(employeeDetailsDuplicate);