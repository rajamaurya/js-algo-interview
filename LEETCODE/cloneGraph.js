/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    let visited = {};
    /**-----------------------------BFS Solution----------------------
    if(node==null)return node;
    let q = [node];
    let currentNode = new Node(node.val);
    visited[node.val] = currentNode; // copy visited 
    
    while(q.length > 0 ){
        let current = q.shift(); 
        for(let curr of current.neighbors){
            
             if(!visited[curr.val]){
                 q.push(curr);
                 let newNode = new Node(curr.val) 
                 visited[curr.val] = newNode;
                 
             }
             visited[current.val].neighbors.push(visited[curr.val])
             
            
        }
        
    }
    
    
    return currentNode; // BFS APPROACH

   */


    return cloner(node, visited); // DFS CALL
};
// DFS Solution.................
const cloner = (node, visited) => {
    
    if(node == null)return null;
    
    if(visited[node.val]){ // check
       return visited[node.val];
    }
    let currentNode = new Node(node.val); // create
    visited[currentNode.val] =  currentNode;
    
    for(let n of node.neighbors){
         let neighbor = cloner(n,visited)
         currentNode.neighbors.push(neighbor)  
    }
    return  currentNode;
}
