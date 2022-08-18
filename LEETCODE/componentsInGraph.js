/*
bg = [[1, 6],[2, 7], [3, 8], [4,9], [2, 6]]
*/


function componentsInGraph(gb) {
    // Write your code here
    const graph = createGraph(gb);
    console.log(graph)
    let count = 0;
    let visited = new Set();
    for(let node in graph){
        let flag= explore(graph, node, visited);
        if(flag){
            count++;
        }
    }
    console.log(count)
    return count;
}
const explore = (graph, node, visited)=>{
    if(visited.has(String(node)))return false;
    visited.add(String(node));
    let neighbors = graph[node];
    
    for(let neighbor of neighbors){
        explore(graph, neighbor,visited)
    }
    
    return true;
}

const createGraph = (edges)=>{
    let graph = {};
    
    for(let edge of edges){
        let [a, b] = edge;
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}