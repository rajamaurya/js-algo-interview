class EventTarget{
    #listener;
    constructor(){
        this.#listener = {}
    }

    addEventListener(type, callback){
       if(!this.#listener[type]){
            this.#listener[type] = [];
       }else{
           this.#listener[type].push(callback) // attach event a callbackListner.Event Can have multiple cb
       }
    }
    removeEventListener(type, callback, options){
        if(this.#listener[type]){
                let indx = this.#listener[type].indexOf(callback);
                this.#listener[type].splice(indx,1);
                return;
        }else{
            return;
        }
    }
}


const target = new EventTarget();

const divs = document.querySelector("#myDiv");

divs.addEventListener('click', ()=>{

    console.log(divs.childNodes);
});

console.log(target);