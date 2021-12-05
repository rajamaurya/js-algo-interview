Array.prototype.myFilter = function(fn){
  let filteredArray = [];
  for(let index = 0; index < this.length; index++){
      if(fn.call(null, this[index], index, this)){
          filteredArray.push(this[index])
      }
  }
  return filteredArray;
}

let es= [8,89,09,89].myFilter(el=> el>8);
console.log(es);
