/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const length = M.length;
    const visited = new Array(length).fill(0);
    let circles = 0;
    let queue = [];
    
    
    for (let i = 0; i < length; i++) {  
        
        if (visited[i]) {
            continue;
        }
        
        queue.push(i);
        while(queue.length > 0) {
            
            const current = queue.shift();
            visited[current] = 1;
            
            for (let j = 0; j < length; j++) {
                
                if(M[current][j] === 1 && !visited[j]) {
                    queue.push(j);
                }
            }
        }
        circles++;
    }
    
    return circles;
};