/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let numIslands = 0;
    let rowMax = grid.length;
    let columnMax = grid[0]?.length;
    
    for (let row = 0; row < rowMax; row++) {
        
        for (let column = 0; column < columnMax; column++) {
            
            if (grid[row][column] === 'v') {
                continue;
            }
            
            if (isLand(grid, row, column)) {
                visitTile(grid, row, column);
                numIslands++;
            }
        }
    }

    // console.table(grid);
    return numIslands;
};

var visitTile = function(grid, row, column) {

    // console.log(`row: ${row} column: ${column}`);
    grid[row][column] = 'v';
    
    // console.log(`x: ${x} y: ${y} tile: ${grid[x][y]}`);

    // check top
    if (isLand(grid, row - 1, column)) {
        visitTile(grid, row - 1, column);
    }
    
    // check left
    if (isLand(grid, row, column - 1)) {
        visitTile(grid, row, column - 1);
    }
    
    // check bottom
    if (isLand(grid, row + 1, column)) {
        visitTile(grid, row + 1, column);
    }
    
    // check right
    if (isLand(grid, row, column + 1)) {
        visitTile(grid, row, column + 1);
    }
};

var isLand = function(grid, row, column) {
    return (row >= 0 
            && column >= 0
            && row < grid.length
            && column < grid[0].length
            && grid[row][column] === '1');
};