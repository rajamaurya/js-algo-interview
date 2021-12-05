let timer;
const throttle = (fn,delay)=>{ // means keep calling the fn but one gets excuted only a specied delay
  
       return ()=>{
           if(timer)return;
           timer = true;
          // clearInterval(timer); // clear all previous click generated timer and keep to run the latest delay
           timer = setTimeout(()=>{
            //fn.apply(this, this.arguments); // call this way
            console.log(fn)
            fn();   // or call this way. both are correct
            timer = false;
           },delay);
          // clearTimeout(timer);
       }
}

let btn1 = document.createElement("button");
btn1.setAttribute("id", "button1");
btn1.setAttribute("value", "Click Me");
btn1.textContent = "Throttle";
document.body.appendChild(btn1);


let button1 = document.querySelector("#button1");
button1.addEventListener('click', throttle(()=>console.log("Throttle"), 3000));