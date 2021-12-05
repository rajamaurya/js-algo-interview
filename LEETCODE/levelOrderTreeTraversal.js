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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root == null){return []; }
    
    return bfs(root, []);
};
const bfs = (root,result)=>{
    let q = [];
    q.push(root);
    
    while(q.length > 0){
        let len = q.length;
        let temp = [];
        for(let i = 0; i < len; i++){
            let currNode = q.shift();
            temp.push(currNode.val);
            if(currNode.left)q.push(currNode.left);
            if(currNode.right)q.push(currNode.right);
        }
        result = [...result, temp]
    }
    return result;
}