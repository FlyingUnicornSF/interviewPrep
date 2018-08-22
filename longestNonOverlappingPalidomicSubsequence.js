/*http://qa.geeksforgeeks.org/8994/qa.geeksforgeeks.org/8994/product-lengths-longest-overlapping-palindromic-subsequence.html

try binary way
https://www.geeksforgeeks.org/print-subsequences-string-iterative-method/
*/

subsequence = (str)=>{
  
  let longestSet = new Set();
  let secondLongestSet = new Set();
  let longest = 1;
  let secondLongest = 0;
  // Find all subsequences 
  // let subsequences = [];
  // Binary representation 
  cobinationTotal = Math.pow(2, str.length)-1;
  for( let i = 1; i <= cobinationTotal; i++ ) {
    // starting from 1 - can't use 000 to get subsequence
    let binary = i.toString(2);
    let subStr = "";
    // console.log(binary)
    // 1, 10, 11, ...
    let lengthDiff = str.length - binary.length;
    // has to handle 00 that's missing to 1 and make it 001. 
    for( let j = binary.length - 1; j >= 0; j-- ) {
      // not triple equal because binary representation is in a string.
      if(binary[j] == 1){
        subStr = subStr + str[j+lengthDiff];
      }
    }
    // check if substring is palidrome and add only the palidromic substring
    // check if it's the longest substring
    // if it is, the last longest becomes the second longest
    // store them in sets
    let rigthIndex = subStr.length -1;
    for( let leftIndex = 0; leftIndex <= rigthIndex; leftIndex++) {
      //console.log(subStr, subStr[leftIndex], subStr[rigthIndex])
     if(subStr.length < secondLongest || subStr[leftIndex] !== subStr[rigthIndex]){
        break;
      } else if( rigthIndex - leftIndex <= 1 ) { 
        
        // when the for loop is complete, 
        // check if it should be added to which list 
        if( subStr.length > longest ){
          secondLongestSet = new Set(longestSet);
          //console.log(1, longestSet, secondLongestSet)
          longestSet.clear();
          //console.log(2, longestSet, secondLongestSet)
          longestSet.add(subStr);
          console.log(3, longestSet, secondLongestSet)
          secondLongest = longest;
          longest = subStr.length;
          //subsequences.push(subStr);
          break;
        } else if( subStr.length === longest ){
          longestSet.add(subStr);
          //subsequences.push(subStr);
          console.log(4, longestSet, secondLongestSet)
          break;
        } else if( subStr.length === secondLongest ){
          secondLongestSet.add(subStr);
          //console.log(5, longestSet, secondLongestSet)
          //subsequences.push(subStr);
          break;
        } else if ( subStr.length < longest && subStr.length > secondLongest ){
          secondLongest = subStr.length;
          secondLongestSet.clear();
          secondLongestSet.set(subStr);
          console.log(6, longestSet, secondLongestSet);
          //subsequences.push(subStr);
          break;
        }
      } 
      rigthIndex--;
    }
  }  
  return [longestSet,  secondLongestSet];
}

console.log(subsequence("attract"));
console.log(subsequence("acdapmpomp"));
console.log(subsequence("axbawbaseksqke"));


