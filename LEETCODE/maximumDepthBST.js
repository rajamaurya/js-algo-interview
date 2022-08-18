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
 var maxDepth = function(root) {
    if(root == null){
        return 0;
    }
    /* Another way to solve..
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth,rightDepth)+1;
    */
    if(root.left == null && root.right == null){
        return 1;
    }
    return dfs(root);
    
};

const dfs = (root, depth = 1) => {
    if(root == null){
        return depth;
    }
    
     if(root.left !== null || root.right !== null ){
         let leftDepth = dfs(root.left);
         let rightDepth = dfs(root.right);
         depth = Math.max(leftDepth,rightDepth)+1;
        
     }
    return depth;
}
