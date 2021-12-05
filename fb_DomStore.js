class DomStore{
    constructor(){
        this.map = new Map()
    }
    get(node){
        return this.map.has(node)?this.map.get(node):undefined;
    }
    set(node, value){
        if(node !== null || node !== undefined){
            this.map.set(node, value)
        }
    }
    has(node){
        return node == undefined?false:this.map.has(node);
    }
    add(node,value){
        if(!this.map.has(node)){
            this.set(node,value);
        }else{
            this.set(node, this.get(node)+value);
        }
    }
}

const store = new DomStore();
const div = document.querySelector("#myDiv");
const p = document.querySelector("#myP");
const countButton = document.getElementById('count');
countButton.addEventListener('click', ()=>{
    let newElm  = document.createElement("button");
    newElm.textContent = "new button";
   
    store.add(countButton,10);
    countButton.innerText= store.get(countButton)
    //document.body.appendChild(countButton)
})
store.set(div,24);
store.set(p,25);

store.get(div);
store.get(p);
store.add(countButton, 10);
console.log(store.has(div))
console.log(store.has(p))

// const n1 = [1,2]
// const n2 = [3,2]
// const n3= null
// store.set(n1,40);
// store.set(n2,40);
// store.set(n3,40);
// console.log(store.get(n1))
// console.log(store.get(n2))
// console.log(store.get(n3))
// console.log(store.has(n1))
// console.log(store.has(n2))
// console.log(store.has(n3))
// console.log(store.has(1))
console.log(store);