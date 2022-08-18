// https://leetcode.com/problems/invert-binary-tree/

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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root || !root.left && !root.right)return root;
    
    return invertedTree(root);
};

const invertedTree = (root)=>{
    if(root == null){
         return root;
     }
    let temp = null;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
   
    if(root.left!== null){ 
    invertedTree(root.left);
    }
    if(root.right!== null){
        invertedTree(root.right)
    }
    
    
    return root;
}


// BFS SOLUTION

function invertBinaryTree(tree) {
    // Write your code here.
      if(!tree)return tree;
      let q = [tree];
      let res = tree;
      while(q.length){
          let node = q.shift();
          if(node){
              let temp = null;
              temp = node.left;
              node.left = node.right;
              node.right = temp;
          }else{
              continue;
          }
          q.push(node.left)
          q.push(node.right)
              
          res = node;
      }
      return res
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.invertBinaryTree = invertBinaryTree;
  