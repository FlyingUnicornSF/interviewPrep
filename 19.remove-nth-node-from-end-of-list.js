/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.71%)
 * Total Accepted:    285.4K
 * Total Submissions: 846.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/**
function ListNode(val) {
  this.val = val;
  this.next = null;
}
*/
buildLinkedListFromArray = (array) => {
  if (array.length < 1) return null;
  let head = new ListNode(array.shift());
  head.next = buildLinkedListFromArray(array);
  return head;
}

var removeNthFromEnd = function(head, n) {
  
  linkedListtoArray = ( node, arr )=>{
    if(node === null) return arr;
    arr.push(node.val);
    node = node.next;
    linkedListtoArray( node, arr )
    return arr;
  }
  builtLL = (arr)=>{
    if(arr.length < 1) return null;
    let node = new ListNode(arr.shift());
    node.next = builtLL(arr);
    return node;
  }
  let arr = [];
  let array = linkedListtoArray(head, arr);
  array.splice(arr.length-n,1);
  return builtLL(array);
};