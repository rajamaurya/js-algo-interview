/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    let node = new ListNode(0,null);
    node.next = head;
    let fasterNode = node;
    let slowerNode = node;
    if(head.next == null){
        return head;
    }
    while(k>0){
        fasterNode = fasterNode.next;
        k--;
    }
    let refNode = fasterNode;
    
    while(fasterNode !== null){
        slowerNode = slowerNode.next;
        fasterNode = fasterNode.next;
    }
    let val = refNode.val;
    refNode.val = slowerNode.val;
    slowerNode.val = val;
    
    return node.next;
};