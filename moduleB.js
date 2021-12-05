const emitter = require('./fb_EventEmitter');

module.exports = {
    SubscribeEvent(){
        emitter.subscribe('on', ()=>{
            console.log("event subscribed here!")
        })
    }
}