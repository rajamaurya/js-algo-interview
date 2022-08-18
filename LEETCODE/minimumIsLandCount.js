/**
 * minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

minimumIsland(grid); // -> 1
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

minimumIsland(grid); // -> 9
test_03:
const grid = [
  ['W', 'W'],
  ['L', 'L'],
  ['W', 'W'],
  ['W', 'L']
];

minimumIsland(grid); // -> 1
 * @param {*} grid 
 * @returns 
 */

const minimumIsland = (grid) => {
    let landCount = 0;
    let min = Infinity;
    let visited = new Set();
    for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[row].length; col++){
        if(grid[row][col] == 'L'){
           landCount = exploreLandDFS(grid, row, col, visited)
           if(landCount < min && landCount >=1){
             min = landCount;
           }
        }
         
      }
    }
    return min;
  };
  const  exploreLandDFS = (grid, row, col, visited)=>{
    let count=1
    let pos = `${row},${col}`;
    if(row < 0 || row >=grid.length || col < 0 ||col >= grid[row].length ||  grid[row][col]=='W'){
      return 0;
    }
    if(visited.has(pos))return 0;
    visited.add(`${row},${col}`);
    count += exploreLandDFS(grid,row,col+1,visited) 
    count += exploreLandDFS(grid,row,col-1,visited) 
    count += exploreLandDFS(grid,row+1,col,visited) 
    count += exploreLandDFS(grid,row-1,col,visited)
    return count;
  }
  

module.exports = {
  minimumIsland,
};
