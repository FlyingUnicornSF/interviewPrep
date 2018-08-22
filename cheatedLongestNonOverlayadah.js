longestPalindromicSubsequence = (str)=>{
  let maxScore = 0;
  let len = str.length;
  let matrix = new Array(len);
  matrix.fill(new Array(len));
  //initialize matrix
  for (let i = 0; i < str.length; i++ ) {
    matrix[i][i] = 1;
  }
  for ( let k = 2; k <= str.length; k++ ) {
    for( let i = 0; i < str.length-k+1; k++){
      let j = i + k - 1;
      if( str.charAt(i) === str.charAt(j) && k === 2 ) {
        matrix[i][j] = 2;
      } else if ( str.charAt(i) === str.charAt(j) ) {
        matrix[i][j] = matrix[i+1][j-1] + 2;
      } else {
        matrix[i][j] = Math.max( matrix[i][j-i], matrix[i+1][j] );
      }
    }
  }
//console.log(matrix)
  for ( i = 0; i < str.length-1; i++ ) {
    maxScore =  Math.max(matrix[0][i] * matrix[i+1][str.length-1], maxScore);
    //console.log(maxScore)
  }
  return maxScore;
}
//console.log(longestPalindromicSubsequence("acdapmomp"))
console.log(longestPalindromicSubsequence("attract"))