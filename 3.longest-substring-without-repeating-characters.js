/*
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (24.99%)
 * Total Accepted:    569.7K
 * Total Submissions: 2.3M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", which the length is 3.
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let max = 0;
  let map = new Map();
  let startIndex = 0;
  for( let endIndex = 0; endIndex < s.length; endIndex++ ) {
    if(!map.has(s[endIndex])){
      map.set(s[endIndex], endIndex);
      if( max < endIndex - startIndex + 1 ){
        max = endIndex - startIndex + 1;
      }
    } else {
      if(map.get(s[endIndex]) >= startIndex){
        startIndex = map.get(s[endIndex]) + 1;
      } else {
        if( max < endIndex - startIndex + 1 ){
          max = endIndex - startIndex + 1;
        }
      }
      map.set(s[endIndex], endIndex);
    }
  }
  return max;
};


