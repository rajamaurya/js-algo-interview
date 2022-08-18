/**
 * https://leetcode.com/problems/rotate-list/
 * Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]

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
 var rotateRight = function(head, k) {
    if(head == null)return null;
    if(head.next == null || k == 0 ) return head;
    
    let size = 1;
    let current = head;
    let curr = head;
    
    while(current.next !== null){
        
        current = current.next;
        size+=1
        
    }
    k = k%size; // k can be greater or lesser than size . so take reminder.
    if(k == 0) return head;
    
    let  i = 0;
    
    while( i < size - k -1){
        curr = curr.next;
        i++;
    }
    let newHead = curr.next;
    curr.next = null;
    current.next = head;
   
    
    return newHead;
    
};