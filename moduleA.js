const { emit } = require('./fb_EventEmitter');
const emitter = require('./fb_EventEmitter');

module.exports = {
    publishEvent(){
        console.log("publish event")
        emitter.publish('on',{data:[1,2,3]})
    },
    emit(){
        setTimeout(()=>{
        emitter.emit('ready')
        },2000)
    }
}