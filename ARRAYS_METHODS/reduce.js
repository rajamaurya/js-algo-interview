Array.prototype.MyReduce = function(fn,startingValue){
    let acc = startingValue || undefined;
    let curr;

    for(let index = 0; index < this.length; index++){
        curr = this[index];
        if(acc){
            acc = fn.call(null, acc, curr, index, this);
        }else{
            acc = this[index];
        }
    }

    return acc;
}

let  mysum = [[12],[121],[32],[32], [3]].MyReduce((acc,curr)=>{ 
    return acc.concat(curr+1) },[]);

console.log("MYSUM: ", mysum);

let sum = [12,121,32,32].reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum);