/**
 * 
 * @param {sum list
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

test_00:
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19
test_01:
const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42
test_02:
const z = new Node(100);

// 100

sumList(z); // 100
test_03:
sumList(null); // 0} head 
 * @param {*} sum 
 * @returns 
 */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head,sum =0) => {
    // todo
    if(head==null)return sum;
    sum += head.val + sumList(head.next,sum);
    // Or sum += head.val
    //    sum sumList(head.next,sum);
    return sum;
  };
  
  module.exports = {
    sumList,
  };
  