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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if(root == null){
        return false;
    }
    let res = validateIsTreeSymmetric(root.left, root.right, false);
    return res;
};

const validateIsTreeSymmetric =(leftTree, rightTree, isSymmetric)=>{
    
    if(leftTree == null || rightTree == null){
        return leftTree == rightTree;
    }
    if(leftTree.val !== rightTree.val){
        return false;
    }
    isSymmetric = validateIsTreeSymmetric(leftTree.left, rightTree.right) &&
                  validateIsTreeSymmetric(leftTree.right, rightTree.left);
    return isSymmetric;
}