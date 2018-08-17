/* 
 input:
 1  2  3
 4  5  6
 7  8  9
 output: 
 3  6  9 
 2  5  8 
 1  4  7 


 // edge cases 
 there is only one element [[0]]
 there is no element []
  [i][j]
 [[0][0] [0][1] [0][2]],
 [[1][0] [1][1] [1][2]].
 [2][0] [2][1] [2][2] 
 
 00     01      02
 [0][2] [1][2] [2][2]
 10     11     12
 [0][1] [1][1] [2][1]
 2 0     21      22
 [0][0] [1][0] [2][0]


 row becomes the col 
*/

rotateMatrix = (matrix)=>{
  // edge case 
  if(matrix.length < 1 && matrix[0].length < 1) return matrix;
  //let output = [[],[],[],[]]
  let output = new Array(matrix[0].length);
  output.fill([])
  for( let i = 0; i < matrix.length; i++ ) {
    for( let j = 0; j < matrix[i].length; j++ ) {
      output[matrix[i].length-1-j][i]= matrix[i][j]
    }
    //console.log(i, matrix, output)
  }
  return output;
}

let input = 
[[1,  2,  3, 10],
[4,  5,  6, 11],
[7,  8,  9, 12]]
/*
 10 11 12
 3  6  9
 2  5  8 
 1  4  7
*/
console.log(rotateMatrix(input))