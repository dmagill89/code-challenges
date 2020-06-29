/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
    if (!root || root.length === 0) {
        return [];
    }
    
    const order = [];
    const queue = [];
    
    queue.push([root]);
    while(queue.length > 0) {
        const level = [];
        const levelVals = [];
        const current = queue.shift();
        
        for (let i = 0; i < current.length; i++) {
            const node = current[i];
            
            if (node.left) {
                level.push(node.left);
             }
        
            if (node.right) {
                level.push(node.right);
            }
            
            levelVals.push(node.val);
        }
        
        if (levelVals.length > 0) {
            order.push(levelVals);
        }

        if (level.length > 0) {
            queue.push(level);
        }
    }

    return order;
};