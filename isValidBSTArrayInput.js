/**
 * Definition for a binary tree node. */
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 /**
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let min = Number.MIN_SAFE_INTEGER;
  let max = Number.MAX_SAFE_INTEGER;
  
  // i moves i+2 for node.left = new TreeNode(root[i+2])
  // root becomes the min number for the right nodes
  // i moves i+1 for node.right = new TreeNode(root[i+1])
  // root becomes the max number for the left nodes
  
  // increment root by one 
  // currentRoot = new TreeNode(root[i]);
  // increment inderx adder by one j = 0
  // currentRoot.left = new TreeNode(root[i+ j+ 1]);
  // currentRoot.right = new TreeNode(root[i+ j+ 2]);
  
  // move i by one i = 1;
  // incremet index adder j = 1
  // currentRoot = currentRoot.left;
  // currentRoot.left = new ThreeNode(root[i+2]); // i + j + 1
  // currentRoot.right = new TreeNode(root[i+3]);  // i + j + 2
  
  // move i by one i = 2; j = 2
  // currentRoot = currentRoot.right;
  // currentRoot.left = new ThreeNode(root[i+3]); // i + j + 1
  // currentRoot.right = new TreeNode(root[i+4]);  // i + j + 2

  //  currentRoot = currentRoot = new TreeNode(root[i]);
  //  currentRoot.left = new TreeNode(root[i+ j+ 1]);
  //  currentRoot.right = new TreeNode(root[i+ j+ 2]);

  let j = 0;
  if( !root || root.length < 1) return root;
  let output = true;
  for ( let i = 0; i < root.length; i++ ) {
    // toDO; not to go out of range
    if ( root[ i ] < min || root[ i ] > max ) {output = false};
    // left node
    if ( (i+ j+ 1) < root.length) {
          if ( root[ i+ j+ 1] < min || root[i+j+1] > root[i] )  {output = false};
    }
    // right node
    if ( (i+ j+ 2) < root.length) {
      if ( root[ i+ j+ 2] > max || root[i+j+2] < root[i] )  {output = false};
    }
    j++;
  }
 return output;  
};

//console.log(isValidBST([5,1,4,null,null,3,6]))
console.log(isValidBST([10, 5, 15, 3, 8, 14, 18, null, 4, 7, 9, null, null, 17]))