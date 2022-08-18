/**
 * sland count
Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

test_00:
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3
test_01:
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4
test_02:
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1
test_03:
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0
 * 
 * @param {*} grid 
 * @returns 
 */
const islandCount = (grid) => {
    // todo
    let isLandCount = 0;
    let visited = new Set();
    for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[row].length; col++){
        if(grid[row][col] == 'L'){
           if(exploreLandDFS(grid, row, col, visited, isLandCount)){
             isLandCount +=1;
           }
        }
         
      }
    }
    return isLandCount;
  };
  const  exploreLandDFS = (grid, row, col, visited,count)=>{
    let pos = `${row},${col}`;
    if(row < 0 || row >=grid.length || col < 0 ||col >= grid[row].length ||  grid[row][col]=='W'){
      return false;
    }
    if(visited.has(pos))return false
    visited.add(`${row},${col}`);
    exploreLandDFS(grid,row,col+1,visited, count) 
    exploreLandDFS(grid,row,col-1,visited, count) 
    exploreLandDFS(grid,row+1,col,visited, count) 
    exploreLandDFS(grid,row-1,col,visited, count);
    return true;
  }
  
  module.exports = {
    islandCount,
  };
  