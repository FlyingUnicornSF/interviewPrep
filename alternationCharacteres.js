/* 
You are given a string containing characters  and  only. 
Your task is to change it into a string such that there are no matching adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.
Your task is to find the minimum number of required deletions.

For example, given the string , s= AABAAB, remove an A at positions 0 and 3 to make a= ABAB in 2 deletions.
Sample input :
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Sample output;
3
4
0
0
4
*/

alternatingCharacters = (s)=> {

  if(s.length < 2) {return 0};
  let current = s[0];
  let output = 0;
  for( let i = 1; i < s.length; i++ ) {
    // if it's current === s[i] 
    // delete 
    if( current === s[i] ) {
      output++;
    }
    // if current !== s[i]
    // update current 
    if( current !== s[i]) {
      current = s[i]
    }
  }
    return output;
}


console.log(alternatingCharacters("ABBABBAA"));