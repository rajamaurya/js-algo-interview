Function.prototype.myBind = function(ctx){
    //console.log(arguments)
    if(typeof this == 'function'){
        return ()=>{
            return this.call(ctx); // this.apply(ctx, ...arguments)
        }
    }else{
    return undefined;
    }
}

const ob = {
    name: "mutant",
    namePrinter(){
        return this.name
    }
}

function hello(){
    return {name: this.name, printer: this.namePrinter()};
}
const response = hello.myBind(ob);
console.log(response())



const res = hello.bind(ob);
//console.log(res)