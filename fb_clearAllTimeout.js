
class Timer{
    constructor(fn, delay){
        this.fn =typeof fn === 'function'? fn: ()=>{console.log('pass a fn dear');};
        this.delay = delay;
        this.timeOut  = setTimeout;
        this.interval = setInterval;
        this.clrTimeout = clearTimeout;
        this.clrInterval = clearInterval;
        this.timers = [];
        this.intervals = [];
    }

    clearInterval(id){
        this.clrInterval(id);
    }
    clearTimeout(id){
        console.log("clearing timer")
        this.clearTimeout(id);
        console.log("id cleared: ", id);
    }
    setInterval(delay){
        this.interval(this.fn,delay);
        this.intervals.push()
        return Math.floor(Math.random(1000));
    }
    async setTimeout(delay){
       let id =  await this.timeOut(this.fn,delay);
        this.timers.push()
        return id;
    }
    clearAllTimeOut(){
        for(let id of this.timers){
            this.clrTimeout(id)
        }
    }
    clearAllIntervals(){
        for(let id of this.intervals){
            this.clrInterval(id)
        }
    }
}
function fn(){
    console.log('hello timer.');
}
const timer = new Timer(fn, 3000);

let id1 = timer.setTimeout(1000);
timer.clearTimeout(id1);
let id2 = timer.setTimeout(3000);
let id3 = timer.setTimeout(2000);

timer.clearAllTimeOut();

// let id = setTimeout(()=>{console.log("ok lisa")},2000)
// console.log("ID ",id)

// clearInterval(id);

// console.log("id ",id)









// var id = setTimeout(callback, delay);
// console.log("ID: ", id)
// function callback(){
//     console.log("delay me ");
// }
// setTimeout(callback, 1000);
// setTimeout(callback, 2000);
// setTimeout(callback, 3000);

// while(id--){
//     clearTimeout(id);
// }