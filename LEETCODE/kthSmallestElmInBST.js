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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let result =  inorderTraversal(root, []);
	if(result.length){
		return result[k-1];
	}
  return -1;
};
const inorderTraversal = (root, res)=>{
	if(root == null)return res;
		inorderTraversal(root.left,res);
		res.push(root.val);
		inorderTraversal(root.right, res);

	return res;
}