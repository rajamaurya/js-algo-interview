/**
 * 2. Add Two Numbers https://leetcode.com/problems/add-two-numbers/
Medium
Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let cl1 = l1;
    let cl2 = l2;
    let temp = new ListNode();
    let newNode = temp;
    let carry = 0;
    while(cl1 !== null || cl2 !== null){
         let sum = getSum(cl1,cl2)+carry;
         let rem = sum % 10;
         carry = Math.floor(sum / 10);
         let node = new ListNode(rem);
         newNode.next = node
         newNode = newNode.next;
      
         if(cl1){
           cl1 = cl1.next;  
         }
         if(cl2){
            cl2 = cl2.next;
         }
         
    }
    if(carry > 0){
        let node = new ListNode(carry);
         newNode.next = node
         newNode = newNode.next;
    }
    
    return temp.next
};
const getSum = (c1, c2)=>{
    let a = c1 !== null?c1.val:0;
    let b = c2 !== null?c2.val:0;
    return a+b;
}