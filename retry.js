const retry  = async (fn, retries, data, successCallback, errorCallback)=>{
    function errorHandler(){
        retries -= 1;
    }
     while(retries >= 0 ){
            try{
                await fn.call(this, data, successCallback, errorHandler);
                retries--;
            }catch(error){
                console.log(error)
            }
     }
    
}

    const data = {data: "action taken"};
    const successCallback = ()=>{
        return "SUCCESS"
    }
    const errorCallback = ()=>{
        return "FAIL";
    }
    const fn = (data,  successCallback, errorCallback)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                errorCallback.call(this);
                reject("call rejected");
            },5000)
        })
    }

    const result = retry(fn, 5, data, successCallback,  errorCallback);
    console.log("RESULT: ", result)