/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  
    let count = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == word[0] && checkDFS(board, i, j, count, word)){
                return true;
            }
        }
    }
    return false;
};

function checkDFS(board, x, y, count, word){
   if(count == word.length){
        return true;
    }
    if(x < 0 || x >=board.length || y < 0 || y >= board[x].length || board[x][y] !== word[count] ){
        return false;
    }
    let temp = board[x][y];
    board[x][y] = ' ';
    let found = checkDFS(board, x+1, y, count+1, word) 
             || checkDFS(board, x-1, y, count+1, word) 
             || checkDFS(board, x, y+1, count+1, word) 
             || checkDFS(board, x, y-1, count+1, word);
    
    board[x][y] = temp;
    
return found;
}