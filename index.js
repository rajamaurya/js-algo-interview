const emitter = require('./fb_EventEmitter');
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

//moduleA.publishEvent('on');
moduleA.emit();
//moduleB.SubscribeEvent('on');
//console.log(emitter.events)
emitter.on('ready', ()=>{
    console.log("am ready event..")
})

