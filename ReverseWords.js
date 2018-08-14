/* 
there are two types of problem I've seen so far for reverse workds. 

One is just given a string with spaces (leading, in between words, and trainig)
The second one is giving an array, each letter is an element including a space. 


*/

// given a string with possible traing and leading spaces 
// of course you want to write a one line cool solution that 
// var nStr = str.trim().split(/\s+/).reverse().join(" ");
// would I ever do that? ¯\_(ツ)_/¯ 

reverseWordsString = (str)=>{
  // let arr = str.split(" ");
  // problem with this is when str is just two spaces 
  // it returns three empty strings

 // add each charator at the end 
 // when you manipulate the input string, 
 // make sure you keep the length of the original 
 let inputLength = str.length;
 let inWord = false;
 let j = 0;
 let output = "";
  for( let i = inputLength -1; i >= 0; i-- ) {
    // regardless of where i is, check the last character of the string
    if ( str[str.length - 1 - j] === " "){
      if (inWord === true) {
        inWord = false;
        if(output.length > 0) {
          console.log("_" + (str.slice( str.length - j) + "_" ))
          output = output + " " + str.slice( str.length - j);
        } else {
          output = str.slice( str.length - j);
        }
        str = str.slice(0, str.length-1-j)
      } else {
        // not in word
        str = str.slice(0, str.length - 1);
      }
      j = 0;
    } else {
      if (inWord === false) {
        inWord = true;
      } 
      j++
      if (i === 0) {
        if(output.length > 0) {
        output = output + " " + str; 
        } else if (output.length === 0){
          output = str;
        }
      }
    }
  }

  return output 
}

// console.log(reverseWordsString("the sky is blue"))
// console.log(reverseWordsString("   the sky   is blue   "))
// console.log(reverseWordsString("   ")) // two spaces
console.log(reverseWordsString("a"))
