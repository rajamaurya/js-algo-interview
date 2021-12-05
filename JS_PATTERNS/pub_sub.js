class PubSub{
    #events;
    constructor(){
        this.#events = {}
    }
    subscribe(event, callback){
        this.#events[event] = this.#events[event] || [];
        this.#events[event].push(callback); //attach an callback to the event. An event can have mutibple callbacks
        return this;
    }
    publish(event, ...args){
        if(!this.#events[event]){
            return;
        }else{
            this.#events[event].forEach(fn=> fn.call(this,args)) //call all callback attached to the respective event
        }
    }
    unsubscribe(event,callback){
        if(!this.#events[event]){
            return;
        }else{
            this.#events[event].filter(fn=> fn !== callback); // filter out called callback for unsubscription
            return this;
        }
    }
}


const pubsub = new PubSub();

emitEvent.addEventListener('mouseover', ()=>{
    console.log("emittiing a data event here:");
    pubsub.publish("data", 1,2,3,4);
})
logEvent.addEventListener('mouseover', ()=>{
   pubsub.subscribe('data', ()=>{
     console.log("data received")
     let vip = document.createElement("h1");
     vip.setAttribute("id", "ip");
     vip.textContent = "hello bhai";
     document.body.appendChild(vip);
     console.log("bhai added:")
 })
});
off.addEventListener('mouseover', ()=>{
    pubsub.unsubscribe('data', ()=>{
        console.log("finally unsubsribed the event..");
    })
})