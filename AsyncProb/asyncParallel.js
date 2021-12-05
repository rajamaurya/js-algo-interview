let errorHandler = (e)=>{
    return "ERORR: "+ e;
}
let succesHandler = (mssg)=>{
    return mssg;
}
let fn1 = async (data, errorHandler, succesHandler )=>{
    setTimeout(()=>{
        console.log("f1 released");
        return Promise.resolve(succesHandler("SUCCESS"));
    },10000)
}
let fn2 = async (data, errorHandler, succesHandler)=>{
    setTimeout(()=>{
        console.log("f2 released");
         return Promise.resolve(errorHandler("FAIL"));
    },5000)
}

let tasks = [fn1, fn2];
const parallelTaskhandler = async function(tasks,ecb,scb){
    let res;
    let data = "current node"
    for(let task = 0; task < tasks.length; task++){
        try{
             res = await tasks[task].call(this, data, ecb, scb);
              scb(res)
        } catch(e){
              ecb(e);
        }
    }
    return scb(res)
}


const result = parallelTaskhandler(tasks, errorHandler, succesHandler);

console.log("RESULT: ", result)