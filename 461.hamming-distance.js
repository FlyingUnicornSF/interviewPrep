/*
 * [461] Hamming Distance
 *
 * https://leetcode.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (69.51%)
 * Total Accepted:    181K
 * Total Submissions: 260.4K
 * Testcase Example:  '1\n4'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Given two integers x and y, calculate the Hamming distance.
 * 
 * Note:
 * 0 ≤ x, y < 231.
 * 
 * 
 * Example:
 * 
 * Input: x = 1, y = 4
 * 
 * Output: 2
 * 
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠       ↑   ↑
 * 
 * The above arrows point to positions where the corresponding bits are
 * different.
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xBinary = x.toString(2);
  let xBinaryLength = xBinary.length;
  let yBinary = y.toString(2);
  let yBinaryLength = yBinary.length;
  let length = Math.max(xBinaryLength, yBinaryLength)
  let counter = 0;
  for( let i = 0; i < length; i++ ) {
    if( i < xBinaryLength && i < yBinaryLength && xBinary[xBinaryLength - 1 - i] !== yBinary[yBinaryLength - 1 - i]){
      counter++;
    } else if(i >= xBinary.length && yBinary[yBinaryLength - 1 - i] == 1) {
      counter++;
    } else if( i >= yBinary.length && xBinary[xBinaryLength - 1 - i] == 1){
      counter++;
    }
  }
  return counter;
};
