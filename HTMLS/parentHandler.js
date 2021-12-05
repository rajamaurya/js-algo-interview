let button = document.querySelector("#save");
let fields = document.getElementsByTagName('input');
let global = {};
button.addEventListener('click', (event)=>{
    event.preventDefault();
    for(let field of fields){
            let temp = global;
            let fieldName = field.name;
            let names = fieldName.includes(".")?fieldName.split('.'):fieldName;

            if(Array.isArray(names)){
                for(let i = 0; i< names.length; i++){
                   temp[names[i]] = {...global[names[i]]}
                   if(i == names.length -1 ){
                        temp[names[i]] = field.value;
                    }else if(!temp[names[i]]){
                       temp[names[i]] = {}
                    }else{
                       temp = temp[names[i]];
                   }
                }
               
            }else{
            temp[names] = field.value
            }
    }
    console.log("o/p: ", global)
})

// o/p:
/*  
o/p:  
fizz: "vsv"
foo:
    bar:
        baz: "fdsq"
        [[Prototype]]: Object
    bat: "fvdgs"
[[Prototype]]: Object


*/
