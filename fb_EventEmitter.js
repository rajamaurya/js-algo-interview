class EventEmitter{
    constructor(events){
        this.events =  {};
    }
    subscribe(event, callback){
        if(this.events[event]){
            this.events[event].push(callback)  ;
            //console.log(this.events) 
        }else{
            this.events[event] = []
        }
    }
    emit(event,...args){
        if(this.events[event]){
            this.events[event].forEach(fn => fn.call(this,args));
            return true;
        }else{
            return false;
        }
    }
    on(event,callback){ // addEventListener
        if(!this.events[event]){
         this.events[event] = [callback];
        }else{
            this.events[event].push(callback);
        }
        return this;
    }
    off(event, callback){ // removeEventListener
        if(!this.events[event]){
           return this;
        }else{
               let index = this.events[event].indexOf(callback);
               this.events[event].splice(index,1);
               return this;
        }
    }
    once(event,callback){
        const eventWrapper = ()=>{
            callback();
            this.off(event,eventWrapper)
        }
        if(!this.events[event]){
            this.events[event] = []
        }else{
            
            this.events[event].push(eventWrapper)
        }
        return this;    
    }
}
// module.exports = new EventEmitter();
 const eventObj = new EventEmitter();
 const logEvent = document.querySelector("#onEvent"); // first log an event
 const emitEvent = document.querySelector("#emitEvent"); // then emit event as many as you can..
 const off = document.querySelector("#offEvent");
 
 emitEvent.addEventListener('click', ()=>{
    console.log("emittiing a message event here:");
    eventObj.emit("message", 1,2,3,4);
})
logEvent.addEventListener('click', ()=>{
   eventObj.on('message', ()=>{
     console.log("message received")
     let vip = document.createElement("h1");
     vip.setAttribute("id", "vip");
     vip.textContent = "hello lalu";
     document.body.appendChild(vip);
     console.log("lalu added:")
 })
});
off.addEventListener('click', ()=>{
    eventObj.off('message', ()=>{
        console.log("finally closed the event..");
    })
})

// const callback = (data)=>console.log(data);

// // eventObj.emit('on',()=>{
// //     console.log("ABC")
// // })

// //eventObj.emit('on');

// eventObj.subscribe('on',callback);
// eventObj.publish('off',);
// console.log(eventObj)