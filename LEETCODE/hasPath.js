/* https://leetcode.com/problems/find-if-path-exists-in-graph/
 *INPUT
 * 10
 *[[2,9],[7,8],[5,9],[7,2],[3,8],[2,8],[1,6],[3,0],[7,0],[8,5]]
 *1
 *0
 /**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    
    let queue = [source];
    let graph = {};
    
    if(source == destination)return true
    // let visited= {}
    let visited= new Set(); // set soltn 
    graph  = getAdjacencyList(n,edges);
    
    // ------------------------DFS WAY---------
    let isPath = hasPath(graph ,source,destination, visited);
   
    return isPath;
    //-----------------
    // BFS Solution
    /*
    
    while(queue.length > 0){
           let currentNode = queue.shift();
           if(currentNode == destination)return true;
           let len = graph[currentNode].length;
           for(let i = 0; i < len; i++){
            if(!visited[graph[currentNode][i]]){
                    queue.push(graph[currentNode][i]);
                    visited[graph[currentNode][i]] = true;
                } 
            }
    }
    return false
    */
};
// another solution using set.
const hasPath = (graph,src,dest,visited)=>{
  if(src === dest)return true;
  if(visited.has(src))return false;
  visited.add(src)
  for(let node of graph[src]){
        if(hasPath(graph, node, dest , visited)){
            return true
        }
    
  }
  
  return false;
}
/*
const hasPath = (graph,src,dest,visited={})=>{
  if(src === dest)return true;
  visited[src] = true;
  for(let node of graph[src]){
     if(!visited[node]){
         if(hasPath(graph, node, dest , visited)){
            return true
         }
     }
    
  }
  
  return false;
}
*/
const getAdjacencyList = (n, edges)=>{
    let list = {};
    for(let edge of edges){
        let [a,b] = edge;
        if(!list[a]){
            list[a] = [];
        }
        if(!list[b]){
            list[b] = [];
        }
        list[a].push(b);
        list[b].push(a);     
    }
   return list;
}