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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    return inorder(root, []);
};
const inorder = (root, res)=>{
       if(root == null || root.length == 0){
        return [];
      }
      inorder(root.left,res);
      res.push(root.val);
      inorder(root.right, res);
    
    return res;
}