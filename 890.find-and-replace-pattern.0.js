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
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
 * Output: ["mee","aqq"]
 * Explanation: "mee" matches the pattern because there is a permutation {a ->
 * m, b -> e, ...}. 
 * "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a
 * permutation,
 * since a and b map to the same letter.
 * 
 * { a: '0',
 *   b: "1,2,"}
 * 
 * { a: '0',
 *  b: 1
 *  c: 2}
 * 
 * { e: "1,2,",
 *   m: '0'}
 * 
 * Note:
 * 
 * 
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
  let patternMap = new Map();
  for( let i = 0; i < pattern.length; i++ ) {
    let currentChar = pattern[i];
    if(patternMap.has(currentChar)) {
      let val = patternMap.get(currentChar);
      patternMap.set(currentChar, val+toString(i)+",");
    } else {
      patternMap.set(currentChar, toString(i)+",");
    }
  }

  for( let j = 0; j < words.length; j++ ) {
    let currentWord = words[j];
    let wordMap = new Map();
    for( let k = 0; k < currentWord.length; k++ ) {
      let currentChar = currentWord[k];
      if(wordMap.has(currentChar)) {
        let val = wordMap.get(currentChar);
        wordMap.set(currentChar, val+toString(i)+",");
      } else {
        wordMap.set(currentChar, toString(i)+",");
      }
    }
    let conunter = 0;
    wordMap.forEach((value, key)=>{
      
      
    })

  }

};
