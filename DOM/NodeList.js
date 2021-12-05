class NodeList {
   
    #length;
    #nodeList;
    constructor(nodelist){
        this.#nodeList = nodelist;
    }
    get length(){
        return this.#length  = Array.from(this.#nodeList).length;
    }
    #item(index){
       if(index == null || typeof index !== 'number' || index == undefined){
           new Error("index is invalid")
       }
       let nodeList = Array.from(this.#nodeList);
       let node = nodeList.find((node,index)=> index === index);
       return node !== undefined? node:null;
    }
    item(){
        return this.#item();
    }
    #entries(){
        let nextIndex = 0;
        let array = Array.from(this.#nodeList);
        console.log("array received: ", array);
        let tep  = this.item(nextIndex++);
        console.log("item :", tep);
        return {
            next: function() {
                return nextIndex < array.length ? {
                    value: [nextIndex++, item(nextIndex++)],
                    done: false
                  } : {
                    done: true
                  };
            },
            [Symbol.iterator]: function() { return this; }
        }
    }
    entries(){
        return this.#entries();
    }
    #forEach(callback,args){
        args = args || window;
        for(let i = 0; i < this.length; i++){
             callback.call(args, this[i], i, this)
        }
        
    }
    forEach(){
        return this.#forEach();
    }
    #keys(){
        let nextIndex = 0;
        let array = Array.from(this.#nodeList);
        return {
            next: function() {
                return nextIndex < array.length ? {
                    value: nextIndex++,
                    done: false
                  } : {
                    done: true
                  };
            },
            [Symbol.iterator]: function() { return this; }
        }
    }
    keys(){
        return this.#keys();
    }
    #values(){
        let nextIndex = 0;
        let array = Array.from(this.#nodeList); // can replace with - let that = this;
        return {
            next: function() {
                return nextIndex < array.length ? { // that.length
                    value: array[nextIndex++],
                    done: false
                  } : {
                    done: true
                  };
            },
            [Symbol.iterator]: function() { return this; }
        }
    }
    values(){
        return this.#values();
    }

}


 let childNodes= div.childNodes;
 console.log("childNodes: ", childNodes)
 let ui = document.getElementById("UI");
 ui.addEventListener('click', (event)=>{
     if(event.target = 'LI'){
         console.log(event.target.name)
     }
 })
div.addEventListener('click', ()=>{
    const nodeList = new NodeList(childNodes);
    let item = nodeList.item();
    console.log(item);
    let values = nodeList.values();
    let entries = nodeList.entries();
    for(let entry of entries){
        console.log("entry " + entry);
    }
    for(let val of values){
        console.log(val);
    }
})

