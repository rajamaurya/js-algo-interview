/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let curr = head;
    let stack = [];
    let rev = new ListNode(0,null);
    while(curr!== null){
         stack.push(curr);
         curr = curr.next;   
    }
    head = rev;
    let len =  stack.length;
    while(len > 0){
        let item = stack.pop();
        rev.next = new ListNode(item.val,null);
        rev = rev.next;
        len--;
    }
    return head.next; // [rev started with 0 node value]
};