function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  // inline traverse 
  // left node

  let mergedLeftNode = null;
  if(t1 === null && t2 === null){
    return null
  } else if( t1 !== null && t2 === null){
    mergedLeftNode = mergeTrees(t1.left, null)
  } else if(t1 === null && t2 !== null) {
    mergedLeftNode = mergeTrees(null, t2.left)
  } else {
    mergedLeftNode = mergeTrees(t1.left, t2.left);
  }
  
  // action - add values to make a new node to add to the new tree
  let mergedNode = null;
  if(t1 === null) {
    //console.log("t2", t2.val)
    mergedNode = new TreeNode(t2.val)
  } else if(t2 === null) {
   // console.log("t1", t1.val)
    mergedNode = new TreeNode(t1.val)
  } else if (t1 === null && t2 === null){
    //console.log("null");
    mergedNode = null;
  } else {
    //console.log("t1 + t2", t1.val + t2.val)
    mergedNode = new TreeNode(t1.val + t2.val)
  }
  mergedNode.left = mergedLeftNode;
  
 let mergedRightNode = null;
  if(t1 === null && t2 === null){
    return null
  } else if( t1 !== null && t2 === null){
     mergedRightNode = mergeTrees(t1.right, null)
  } else if(t1 === null && t2 !== null) {
    mergedRightNode = mergeTrees(null, t2.right)
  } else {
    mergedRightNode = mergeTrees(t1.right, t2.right);
  }
  mergedNode.right = mergedRightNode;

  return mergedNode;
};

var mergeTrees2 = function(t1, t2) {
  if (t1 === null && t2 === null) return null;

  // Create the merged node.
  let t1Value = (t1 !== null ? t1.val : 0); 
  let t2Value = (t2 !== null ? t2.val : 0); 
  let mergedNode = new TreeNode(t1Value + t2Value);

  // Merge left/right trees.
  let t1Left = (t1 !== null ? t1.left : null);
  let t2Left = (t2 !== null ? t2.left : null);
  mergedNode.left = mergeTrees2(t1Left, t2Left);
  let t1Right = (t1 !== null ? t1.right : null);
  let t2Right = (t2 !== null ? t2.right : null);
  mergedNode.right = mergeTrees2(t1Right, t2Right);

  return mergedNode;
}

var mergeTrees3 = function(t1, t2) {
  if (t1 === null && t2 === null) return null;
  // Create the merged node.
  let mergedNode = null;
  if (t1 === null) {
    mergedNode = new TreeNode(t2.val);
    mergedNode.left = mergeTrees3(null, t2.left);
    mergedNode.right = mergeTrees3(null, t2.right);
  } else if (t2 === null) {
    mergedNode = new TreeNode(t1.val);
    mergedNode.left = mergeTrees3(t1.left, null);
    mergedNode.right = mergeTrees3(t1.right, null);
  } else {
    mergedNode = new TreeNode(t1.val + t2.val);
    mergedNode.left = mergeTrees3(t1.left, t2.left);
    mergedNode.right = mergeTrees3(t1.right, t2.right);
  }

  return mergedNode;
}