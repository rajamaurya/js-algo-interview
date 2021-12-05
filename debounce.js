const debounce = (fn,delay)=>{ //means-  you keep calling but it gets called only when you stop calling.
    let timer;
       return ()=>{
           clearTimeout(timer); // clear all previous click generated timer and keep to run the latest delay
           timer = setTimeout(()=>{
            //fn.apply(this, this.arguments); // call this way
            console.log(fn)
            fn();   // or call this way. both are correct
           },delay);
          // clearTimeout(timer);
       }
}

const debounceWithImmidiateFlag = (cb,delay, immmediate = false)=>{
let timer;
    return (...args)=>{
        if(immmediate){
            cb.call(this,args);
            immmediate = false;
        }

        timer.clearTimeout();
        timer = setTimeout(()=>{
            //cb.call(this);
            immmediate = true;
        },delay)
    }
}
let btn = document.createElement("button");
btn.setAttribute("id", "button");
btn.setAttribute("value", "Click Me");
btn.textContent = "Debounce";
document.body.appendChild(btn);


let button = document.querySelector("button");
button.addEventListener('click', debounce(()=>console.log("hello"), 3000));