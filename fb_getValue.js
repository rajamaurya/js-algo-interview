const getValue = (obj, path)=>{
    let res  = obj;
    let q = path.split('.'); console.log("Q: ", q)
    while(q.length > 0){
        let currPath = q.shift();
        for(let i = 0; i < currPath.length; i++){
            if(currPath[i] == '[' || currPath[i]  == ']'){
                continue;
            }else{
               obj = obj[currPath[i]];
            }
        }

    }
    return obj;
}


const obj = { 'x': [{ 'y': { 'z': 100 } },{ 'k': { 'l': 200 } }] };
console.log("RES: ",getValue(obj, 'x[1].k.l'));