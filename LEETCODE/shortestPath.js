/**
 * shortest path
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

test_00:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2
test_01:
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'y', 'x'); // -> 1
test_02:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'a', 'e'); // -> 3
test_03:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'e', 'c'); // -> 2
test_04:
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'b', 'g'); // -> -1
test_05:
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'w', 'e'); // -> 1
test_06:
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'n', 'e'); // -> 2
test_07:
const edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

shortestPath(edges, 'm', 's'); // -> 6
 * 
 * @param {*} edges 
 * @param {*} nodeA 
 * @param {*} nodeB 
 * @returns 
 */
const shortestPath = (edges, nodeA, nodeB) => {
  
    const graph = createGraph(edges);
    
    let q = [[nodeA,0]];
    let v = new Set([nodeA]);
    console.log(v);
    while(q.length){
      let [c, d]= q.shift();
      if(c == nodeB)return d;
      
      for(let n of graph[c]){
        if(!v.has(n)){
          q.push([n, d+1]);
          v.add(n)
        }
      }
    }
    
    return -1;
  };
  
  
  const createGraph = (edges)=>{
    const g = {};
    for(let e of edges){
      const [a,b] = e;
      if(!g[a])g[a] = [];
      if(!g[b])g[b]= [];
      g[a].push(b);
      g[b].push(a);
    }
    return g;
  } 
  
  module.exports = {
    shortestPath,
  };
  