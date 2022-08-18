/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) { // Reverse polish notation = postfix notaion
    let operator = ['+', '-', '*','/'];
    let stack = [];
     
    for(let i = 0; i < tokens.length; i++){
         let choice = operator.indexOf(tokens[i]);
         if(choice !== -1 ){
             let a = stack.pop();
             let b = stack.pop();
             
             switch(tokens[i]){
                 case '+':{
                     stack.push(+a+ (+b));
                     break;
                 }
                 case '-':{
                     stack.push(+b- (+a));   
                     break;
                 }
                 case '*':{
                     stack.push(+a*+b);
                     break;
                 }
                 case '/':{
                    
                     let num = +b/+a;
                     if(num  < 0){
                         stack.push(Math.ceil(num));
                     }else{
                         stack.push(Math.floor(num));
                     }
                      
                     break;
                 }
                 default: return;
             }
         }else{
             stack.push(tokens[i]);
         }
     }
     return stack[0];
 };