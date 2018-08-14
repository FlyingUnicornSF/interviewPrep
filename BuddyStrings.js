function buddyStrings(A, B) {
  let set = "";
  let misMatchCounter = 0; 
  // edge case 1 - not the same length
  if(A.length !== B.length) return false;
  // edge case 2 = two letter words
  if(A.length < 3) {
    if (A !== B[1] + B[0]){ return false }
    else{ return true }
  }
  // edge case 3 == they are the same words 
  if (A === B) {
    // check there are two letters that are same and swappable
    set = new Set();
    for (let k = 0; k < A.length; k++) {
      if(set.has(A[k])){
        return true;
      } else {
        set.add(A[k]);
      }
    }
    // if there are not swappable characters then return false
    return false;
  }

  for( let i = 0; i < A.length; i++) {
    // loop through until find mismatch 
    if( A[i] !== B[i]) {
      misMatchCounter++;
      // if there are already two mis match, then return false. no reason to go though the rest of the loop.
      if (misMatchCounter > 2) return false;
      // if this is the first mis match, then make the array;
      if ( set.length === 0 ){
       set = A[i] + B[i];
      // if misMatch array already exist, compare if they are swappable. 
      // if they are not swappable, exit. No reason to go through the rest of the loop 
      } else {
        if(set !== B[i] + A[i]) return false
      }
    }
  }  
  // at the end of the loop, there is only one mistach return false
    if ( misMatchCounter < 2) {
    return false;
  } else {    
    return true;
  }
  
};

console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"))
console.log(buddyStrings("abc", "abc"))
console.log(buddyStrings("abcd", "abdc"))
console.log(buddyStrings("abab", "abab")) // return true