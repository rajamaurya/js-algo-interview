/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target){
    if(original == null){
        return null;
    }
    if(original.val == target.val)return cloned;
   // return  bfs(original, cloned, target, null); // bfs solution
       if(cloned.val == target.val){
             return cloned
         }
         let leftNode = getTargetCopy(original.left,cloned.left,target);
         let rightNode = getTargetCopy(original.right,cloned.right,target);
          
         if(leftNode!==null)return leftNode;
    
    return rightNode;
};
const bfs = (original, cloned, target, result)=>{

    let q1 = [],q2 = [] ;
    q1.push(original)
    q2.push(cloned);
    
    while(q1.length > 0){
        let q1_node = q1.shift();
        let q2_node = q2.shift();
        if(q1_node.val == target.val){
            return q2_node;
        }
        if(q1_node.left !== null ){
            q1.push(q1_node.left)
            q2.push(q2_node.left)
        }
        if(q1_node.right !== null) {
            q1.push(q1_node.right)
            q2.push(q2_node.right)
        }
    }
    return result;
}