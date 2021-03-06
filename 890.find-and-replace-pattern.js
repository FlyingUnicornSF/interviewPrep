/*
 * [926] Find and Replace Pattern
 *
 * https://leetcode.com/problems/find-and-replace-pattern/description/
 *
 * algorithms
 * Medium (70.05%)
 * Total Accepted:    5.6K
 * Total Submissions: 7.9K
 * Testcase Example:  '["abc","deq","mee","aqq","dkd","ccc"]\n"abb"'
 *
 * You have a list of words and a pattern, and you want to know which words in
 * words matches the pattern.
 * 
 * A word matches the pattern if there exists a permutation of letters p so
 * that after replacing every letter x in the pattern with p(x), we get the
 * desired word.
 * 
 * (Recall that a permutation of letters is a bijection from letters to
 * letters: every letter maps to another letter, and no two letters map to the
 * same letter.)
 * 
 * Return a list of the words in words that match the given pattern. 
 * 
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 * Explanation: "mee" matches the pattern because there is a permutation {a ->
 * m, b -> e, ...}. 
 * "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a
 * permutation,
 * since a and b map to the same letter.
 * 
 * Note:
 * 1 <= words.length <= 50
 * 1 <= pattern.length = words[i].length <= 20
 * 
 * 
 */
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  if (words.length < 1 || pattern.length < 1) return [];
  let matches = [];
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    if (doesWordMatchPattern(word, pattern)) {
      matches.push(word);
    }
  }
  return matches;
};

var doesWordMatchPattern = function(word, pattern) {
  if (word.length !== pattern.length) return false;
  let charMap = new Map();
  let reverseMap = new Map();
  for (let index = 0; index < pattern.length; index++) {
    const currentChar = pattern[index];
    const mappedChar = word[index];
    if (!charMap.has(currentChar) &&
        !reverseMap.has(mappedChar)) {
      charMap.set(currentChar, mappedChar);
      reverseMap.set(mappedChar, currentChar)
    }
    else if (charMap.has(currentChar) &&
             charMap.get(currentChar) !== mappedChar) {
      return false;
    }
    else if (reverseMap.has(mappedChar) && 
             reverseMap.get(mappedChar) !== currentChar) {
      return false;
    }
  }
  return true;
};