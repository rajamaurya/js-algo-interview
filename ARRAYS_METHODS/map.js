Array.prototype.myMap = function(fn){
    let mappedArray = [];                  // as map always return new array so mappeddArray has been created.

    for(let index = 0; index < this.length; index++){
        if(this.indexOf(this[index] !== -1)){
           // mappedArray.push(fn.call(null, this[index], index, this));
                // OR
            mappedArray[index] = fn.call(null,this[index], index, this); // or fn(this[index], index, this)
        }
    }
    return mappedArray;
}

let resp = [2,3,4,5,66,12].myMap(el=> el+5);
console.log(resp);