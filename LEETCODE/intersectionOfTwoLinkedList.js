/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let map = new Set();
    while(headA !== null){
        if(!map.has(headA)){
            map.add(headA);
        }
        headA = headA.next;
    }
    while(headB !== null){
        if(map.has(headB)){
          return headB;
        }
        headB = headB.next;
    }
    return null;
};