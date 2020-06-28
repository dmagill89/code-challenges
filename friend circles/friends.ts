function findCircleNum(M: number[][]): number {
    
    if (!M || M.length === 0) {
        return 0;
    }

    const length: number = M.length;
    const visited: number[] = new Array(length).fill(0);
    const queue: number[] = [];
    let count: number = 0;
    
    for (let i: number = 0; i < length; i++) {
        
        if (visited[i]) {
            continue;
        }
        
        queue.push(i);
        while(queue.length > 0) {
            
            let current: number;
            current = <number> queue.shift();
            
            visited[current] = 1; 
            
            for (let j: number = 0; j < length; j++) {
                if (M[current][j] === 1 && !visited[j]) {
                    queue.push(j);
                }
            }
        }
        count++;
    }
    
    return count;
};