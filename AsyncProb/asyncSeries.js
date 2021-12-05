const f1 = ()=>{
    setTimeout(()=>{
        console.log("f1 called")
       return successCallback("F1 calling");
    },5000)
}
const f2 = ()=>{
    setTimeout(()=>{
       return successCallback("F2 calling");
    },2000)
}
const asyncTasks = [f1,f2];

const successCallback = (mssg)=>{
    return mssg
}
const errorCallback = (mssg)=>{
    return mssg
}


const asyncSerieshandler = function (asyncTasks,resultCallback){
        function errorCallback(error){
            return resultCallback.call(null,error);
        }
        let taskCompleted = 0;
        let results = []
        asyncTasks.reduce((acc, curr) => {
                 return acc.then(()=>{
                     return new Promise((resolve)=>{
                        try{
                            console.log("CURR VAL: ", curr);
                            let res =  curr();
                            results.push(res);
                            taskCompleted++;

                            if(taskCompleted == tasks.length){
                                resolve(results)
                                 resultCallback.call(null,results);
                            }
                        }catch(error){
                           return errorCallback(error)
                        }
                     })
                    
                 })
        }, Promise.resolve());
}


const result = asyncSerieshandler(asyncTasks,(result)=>{return result})
console.log("RESULT: ", result);