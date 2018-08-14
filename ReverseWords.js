/* 
there are two types of problem I've seen so far for reverse workds. 

One is just given a string with spaces (leading, in between words, and trainig)
The second one is giving an array, each letter is an element including a space. 

*/

// CASE 1: given a string with possible traing and leading spaces 

// according to leetcode, if you are using C, you can do this in-place.

// of course if you want to, you can write a one line cool solution below: 
// var nStr = str.trim().split(/\s+/).reverse().join(" ");
//
// would I ever do that? ¯\_(ツ)_/¯ 
// I imagine the time complexity of this one lien solution is pretty high.

// Below solition time complexity is O(n) 

reverseWordsString = (str)=>{
  // let arr = str.split(" ");
  // problem with this is when str is just two spaces 
  // it returns three empty strings
  // of course you can use the trim before split 

 // when you manipulate the input string, 
 // make sure you keep the length of the original 
 let inputLength = str.length;
 let j = 0;
 let output = "";
  for( let i = inputLength -1; i >= 0; i-- ) {
    // regardless of where i is, check the last character of the string
    if ( str[str.length - 1 - j] === " "){
      if ( j > 0) {
        if(output.length > 0) {
          console.log("_" + (str.slice( str.length - j) + "_" ))
          output = output + " " + str.slice( str.length - j);
        } else {
          output = str.slice( str.length - j ); 
        }
        str = str.slice(0, str.length-1-j);
        j = 0; // reset j to zero
      } else {
        // not in word -- j is zero
        str = str.slice(0, str.length - 1);
      }
    } else { // if it's not empty string, increment
        j++;
        if (i === 0) { // last character of the input string
          // these are the same with line 36-41 
          // I should be abl to clean this up
          if(output.length > 0) {
            // if it's last word of many
          output = output + " " + str; 
          } else if (output.length === 0){
            // if it's the only word
            output = str;
          }
        }
    }
  }

  return output 
}

console.log(reverseWordsString("the sky is blue"))
console.log(reverseWordsString("   the sky   is blue   "))
console.log(reverseWordsString("   ")) // two spaces
console.log(reverseWordsString("a"))
