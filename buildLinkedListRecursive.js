/**
 * input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * @param {number[]} input
 * @return {linkNode}
 */ 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

buildLinkedListFromArray = (array) => {

  let helperFunction = (node) => {
    console.log(node, array.length)
    if(array.length === 0) return null;
    node.next = new Node(array[0]);
    console.log(node)
    array.shift();
    helperFunction(node.next)
  }

  let head = new Node(array[0]);
  array.shift();
  helperFunction(head);
  return head;
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(buildLinkedListFromArray(input))

buildLinkedListFromArray2 = (array) => {
  if (array.length < 1) return null;
  let head = new Node(array.shift());
  head.next = buildLinkedListFromArray2(array);
  return head;
}
console.log("buildLinkedListFromArray2", buildLinkedListFromArray2(input));
