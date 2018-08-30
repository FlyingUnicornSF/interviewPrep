/*https://leetcode.com/problems/maximum-binary-tree/description/
https://leetcode.com/problems/maximum-binary-tree/solution/
https://shreydesai.github.io/2017/08/07/leetcode-maximum-binary-tree.html <-- where is the base case for this one??

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

The root is the maximum number in the array.
The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
Construct the maximum tree by the given array and output the root node of this tree.

Example 1:
Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
Note:
The size of the given array will be in the range [1,1000].

*/
class TreeNode{
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


constructMaximumBinaryTree = (nums)=> {
  // edge case:
  if( nums.length === 0) return null;
  
  let maxIndex = nums.indexOf(Math.max(...nums))
  let node = new TreeNode(nums[maxIndex]);
  
  node.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxIndex+1, nums.length));
  
  return node;

}
let answer = constructMaximumBinaryTree([3,2,1,6,0,5])
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));