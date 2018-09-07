/*
 * [832] Binary Tree Pruning
 *
 * https://leetcode.com/problems/binary-tree-pruning/description/
 *
 * algorithms
 * Medium (68.46%)
 * Total Accepted:    15K
 * Total Submissions: 21.9K
 * Testcase Example:  '[1,null,0,0,1]'
 *
 * We are given the head node root of a binary tree, where additionally every
 * node's value is either a 0 or a 1.
 * 
 * Return the same tree where every subtree (of the given tree) not containing
 * a 1 has been removed.
 * 
 * (Recall that the subtree of a node X is X, plus every node that is a
 * descendant of X.)
 * 
 * 
 * Example 1:
 * Input: [1,null,0,0,1]
 * Output: [1,null,0,null,1]
 * ⁠
 * Explanation: 
 * Only the red nodes satisfy the property "every subtree not containing a 1".
 * The diagram on the right represents the answer.
 * 
 * Example 2:
 * Input: [1,0,1,0,0,0,1]
 * Output: [1,null,1,null,1]
 * 
 * Example 3:
 * Input: [1,1,0,1,1,0,1,0]
 * Output: [1,1,0,1,1,null,1]
 * Note: 
 * The binary tree will have at most 100 nodes.
 * The value of each node will only be 0 or 1.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var pruneTree = function(root) {
  
  let treeRoot = new TreeNode(root[0]);
  root = root.slice(1);

  helperRootFunction = (node, arr)=> {
    if(arr.length === 0 ) return null;
    node.left = new TreeNode(arr[0]);
    arr = arr.slice(1);
    node.right = new TreeNode(arr[0]);
    arr = arr.slice(1);
    //if the node that passed is the left then
    helperRootFunction(node.left, arr);
    // if the node that passed is the right, then
    helperRootFunction(node.right, arr);
  }
  
  let tree = helperRootFunction(treeRoot, root);

  return treeRoot;
};
let Input = [1,1,0,1,1,0,1,0];
console.log(pruneTree(Input));