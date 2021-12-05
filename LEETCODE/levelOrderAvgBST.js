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
 var averageOfLevels = function(root) {
    if(root == null){
        return root;
    }
    let result = [];
    return bfs(root, result); 
};
const bfs = (root, result)=>{
    let q = [];
    q.push(root);
    while(q.length > 0){
        let levelSum = 0;
        let len = q.length; // be careful here
        for(let i = 0; i < len; i++ ){ // dont put i < q.length; 
            let currNode = q.shift();
             levelSum += currNode.val;
             if(currNode.left != null){ q.push(currNode.left)}
             if(currNode.right != null){q.push(currNode.right)}   
         }
        let level_avg = levelSum / len;
        result.push(level_avg)  
        
    }
    return result;
}