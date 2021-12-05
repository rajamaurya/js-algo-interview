


  // custom bind method:

  Function.prototype.bind = function(caller){
    let self = this;
    return function(){
        //return self.call(caller); // return self.apply(caller, arguments);
        return self.apply(caller, arguments);
    }
  }

  let obj  = {
    "hello": "pyare",
     print(){
       return function(){
         console.log(this.hello);
       }.bind(this)
     }
  }
 let res = obj.print();
 console.log(res())
//  let ans = res.bind(obj);
//  console.log( ans());