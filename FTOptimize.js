var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);

function duplicate(array) {
  
  let length = array.length;
  for( let i = 0; i < length; i++ ) {
    array.push(array[i]);
  }
  
  return array;
  
}

//console.log(duplicate([1,2,3,4,5])); // [1,2,3,4,5,1,2,3,4,5]

/*

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.

*/

function topKFrequent(array,k) {
  
  let wordMap = new Map();
  for( let i = 0; i < array.length; i++ ) {
    if( wordMap.has(array[i]) ) {
      let val = wordMap.get(array[i]);
      wordMap.set(array[i], ++val); //val++ ++val val+1
    } else {
      wordMap.set(array[i], 1);
    }
  }
  console.log(wordMap);
  let wordMapSorted = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));
  //let wordMapSorted = new Map([...wordMap.entries()]);

  console.log(wordMapSorted);

  let arr = [];
  let foo = wordMapSorted.keys();
  
   for( let j = 0; j < k; j++ ){
     //console.log(foo.next().value);
     arr.push(foo.next().value);
   }
  
//   arr.sort((a,b) => a-b);

   
  return arr;
}

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));