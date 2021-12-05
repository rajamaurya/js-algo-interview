const someFn = function(params){
    return params;
}


const memoize = function(fn){
    let memo = {};
    //let args = JSON.stringify(arguments);
   return function(args){
        if(!memo[args]){
            let res = fn.apply(this,arguments);
            memo[args] = res;
            return res;
        }else{
            return memo[args];
        }
   }
}

const memoizedFunc = memoize(someFn);
const result = memoizedFunc(122);
console.log(memoizedFunc(122))
memoizedFunc("fnjkndg");