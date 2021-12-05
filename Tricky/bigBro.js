function bigBrother(){ // interesting Q..
   //let x = 0;
  function littleBrother() {
    console.log("hello")
    return 'it is me!';
  }
  // return x;
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
const res = bigBrother();
console.log(res)