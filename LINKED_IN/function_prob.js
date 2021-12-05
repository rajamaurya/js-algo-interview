let Foo = function(a) {
    // this.a = a; // either have a property 
    function bar() {            // else modify it to: this.bar = function(){return a}
        return a;
    }
    this.baz = function() {
        console.log(bar()) // it will return a. 
        return a;
    };
};
Foo.prototype = {   
    biz: function(a) {
        return  a;       
            // 1. this.a
            // 2. this.baz();
            // fibiz(7) // pass parameter..else it will return undefined
    }
};

let f = new Foo(7);

// what will be the output?
//const r = f.bar(); can't directly access bar.
const res = f.baz();
const ans = f.biz();

console.log(res +  " -- " + ans)