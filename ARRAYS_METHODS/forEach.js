Array.prototype.myForEach = function(fn){

     for(let index = 0; index < this.length; index++){   // this refer to the calling array. 
                                                            //as array is also an obj
         if(this.indexOf(this[index])!== -1){
             this[index] = fn.call(null, this[index], index, this); // element - this[index]
         }  // stored this[index] val refer to updated value after callback fn completion
     }
     return this;
}



let arr = [23,232,23,3,4];
let arr2 = ["a","b","c"];
arr.myForEach(el=>el+1);
console.log(arr);
arr2.myForEach(el=> el.toUpperCase());
console.log(arr2)
