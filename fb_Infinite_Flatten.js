// First way
//const arr = [1,2,3,[4,5,6,[7,8,[9]]]];
let arr = [1,{a:[2,[3]]},4,[5,[6]], [[7],8,9],10]
function deepFlatten(arr, res = 1){
    if(res > 0){
        return arr.reduce((acc, curr)=> acc.concat(!Array.isArray(curr)?curr:deepFlatten(curr, res-1)),[])
    }else{
       return arr.slice();
    }
    return res;
}
console.log(deepFlatten(arr,Infinity));

//second way

function flatten(arr,q = [], res = []){ // follow this for complex data check
    
    q.push(...arr)
    while(q.length){
        let el = q.shift();

        if(Array.isArray(el)){
            for(let i = 0; i < el.length; i++){
                q.push(el[i]);
            }
           
        }else if(typeof el == 'object'){
            let values = Object.values(el);
            for(let val of values){
                if(Array.isArray(val)){
                    for(let i = 0; i < val.length; i++){
                        q.push(val[i]);
                    }
                   
                }
            }
            
        }else{
            res = [...res , el];
            
        }
    }
    return res;
}

let resp = flatten(arr);
console.log(resp);