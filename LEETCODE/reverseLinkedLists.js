/**
 * 
 * @param {reverse list
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

test_00:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a
test_01:
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

reverseList(x); // y -> x
test_02:
const p = new Node("p");

// p

reverseList(p); // p} head 
 * @returns 
 */
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
const iterativeReverseList = (head)=>{
    let currNode = head;
    let prev = null;
    
    while(currNode!== null){
      let tempNode = currNode.next; // to keep the ref of next node..let
      currNode.next = prev;
      prev = currNode;
      currNode = tempNode;
    }
    return prev; // last node
  }
const recursiveReverseList = (head, currNode = head, prev = null) => {
    // Recursive sol
    if(currNode == null) return prev;
    //currNode = head;
    let nextNode = currNode.next;
    currNode.next= prev;
    prev = currNode;
    currNode = nextNode
    return recursiveReverseList(head, currNode,  prev);
  };
  
  module.exports = {
    recursiveReverseList,
    iterativeReverseList
  };
  