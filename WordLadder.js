//https://www.youtube.com/watch?v=IQcMn28Sbgo
//https://fizzbuzzed.com/top-interview-questions-4/

var findLadders = function(beginWord, endWord, wordList) {
  // edge case: is endWod in there?  Return zero.
    if(!wordList.includes(endWord)) return 0;

  // graph Breadth-first search

  let output = 0;
  // keep track of the words already visited 
  let visited = new Set();
  // setup queue for BFS.
  // since JS doesn't have a proper queue, use an array and pretend that's Q (enqueue is push, dequeue is shift)
  let Q = [];

  // initialize by putting the beginWord into the Q
  Q.push(beginWord);
  
  // I don't know where to put this but I think this can go back into the for loop
  let letterCounter = 0;
  // and add the beginWord into visited set
  
  while(Q.length > 0){
    // take the first one item is the Q and examen
    let currentWord = Q.shift();
    // reached to the endword, record the edge counts
    if(currentWord === endWord){
      return output;
      // am I setting Q.length to zero now to get out of the while loop? 
      // break;
      //? 
    }
    // find next vertex
    for( let i = 0; i < wordList.length; i++) {
      for (let j = 0; j < currentWord.length; j++) {
        console.log( currentWord[j], wordList[i][j] )
        if( currentWord[j] === wordList[i][j]) {
          letterCounter++;
        }
      }
      // once it is determined that is a next vertex,
      // check if it's in the visite list and if not, store in the Q
      if (letterCounter >= endWord.length-1 && !set.has(currentWord)) {
        Q.push(wordList[i]);
        // also added to visited list
        visited.add(wordList[i]);
        // remove from the original list of words
        wordList.splice(i, 1);
        // reset letterCounter
        letterCounter = 0;
      }
    }
  } // closing while loop

  return output;

};

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"]

console.log(findLadders(beginWord, endWord, wordList))
