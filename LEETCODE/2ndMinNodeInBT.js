/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findSecondMinimumValue = function(root) {
    let result = new Set();
    if(root == null){
        return -1;
    }
    result = inorderTraversal(root, result);
    result = [...result];
    result.sort((a,b)=>a-b);
    if(result.length >= 2){
        return result[1];
    }
    return -1;
};
const inorderTraversal = (root, result)=>{
    if(root == null){
        return;
    }
    inorderTraversal(root.left,result);
    result.add(root.val);
    inorderTraversal(root.right,result);
    return result;
}