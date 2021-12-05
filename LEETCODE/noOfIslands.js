/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if(grid == null || grid.length == 0){
        return 0;
    }
   let result = 0
   let count =0;
   for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == '1'){
                result += callIslands(grid, i , j, result);
            }
            
        }
    }
    
    return result;
};
const callIslands = (grid,i, j, result)=>{
    if(i < 0 || i >= grid.length  || j < 0 || j>=grid[i].length || 
       grid[i][j] == '0')
    {   
        return result;
    }
    grid[i][j] = '0';
    callIslands(grid, i+1, j, result)
    callIslands(grid, i-1, j, result)
    callIslands(grid, i, j+1, result)
    callIslands(grid, i, j-1, result)
    result = 1;
 return result;    
}