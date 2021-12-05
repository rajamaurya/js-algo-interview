/**
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
 var mergeTwoLists = function(l1, l2) {
    let mergeList = new ListNode(0, null);
    let head = mergeList;
    
    // while() check only greater and shorter val
    // and move l1 || l2 and update the mergeList pointer accordingly.
    
    while(l1 !== null && l2 !== null){
      if(l1.val < l2.val){
          mergeList.next = l1;
          l1 =l1.next;
      }else{
           mergeList.next = l2;
           l2 = l2.next;
      }
      mergeList = mergeList.next;
    }
    if(l1!==null){ // node in l1 neither greater nor shorter added in mergeList
        mergeList.next = l1;
    }
    if(l2!==null){  // node in l2 neither greater nor shorter added in mergeList
        mergeList.next = l2;
    }
   return  head.next;
};
