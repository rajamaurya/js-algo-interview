
const asyncFn = function(){
    const randOmDelay = Math.floor(Math.random(10)*10000);
    return new Promise((resolve)=>{
    setTimeout(()=>{
            return resolve(`completed ${randOmDelay} dealyed task`);
        },randOmDelay)
            
    })
    
}
const arrays = [asyncFn,asyncFn,asyncFn];

const promiseAll = function(promiseArray){
     let results = [];
    return new Promise((resolve)=>{
        let tasks = 0;
         promiseArray.reduce((acc, curr)=>{
                  return acc.then(()=>{
                    try{
                        let res = curr.call(null);
                        res.then(data=>{ 
                            tasks++; 
                            results.push(data)
                            if(tasks == promiseArray.length){
                                resolve(results);
                            }
                        });
                      }catch(error){
                          reject(error);
                      }
                       
                  }) 
        },Promise.resolve())
    })
}

const result = promiseAll(arrays);
console.log("RES: ", result)

result.then(values=> console.log("ANS: ", values))


