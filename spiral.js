let data = [
        [ 1,  2,  3,  4,   5],
        [ 6,  7,  8,  9,  10],
        [ 11, 12, 13, 14, 15],
        [ 16, 17, 18, 19, 20]
      ]
 
 // empty array
 // same size arrays
 // 
 // m with n is the height
 // traverse  right 
 // down 
 // left
 // up
 
 // output 1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9
 // output 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12
 
// loop through while the total count of the visited cells === total number of the cells in matrix
// visitedCount = 0;
// total number of cells = m.length * n.length
// toRight = m
// toDown = n
// toLeft = m-1
// toUp = n-1
// ES6!
//spiral = () => {

/*
function spiral(data) {
    // let totalCellCount = data.length * data[0].length;
    // let visited = 0
    let startIndexRow = 0;
    let endIndexRow = data.length;
    let startIndexCol = 0;
    let endIndexCol =data[0].length;
    
    // while( visited <= totalCellCount) {
    // repeat until the start index is encounter to the end index
    while ( startIndexRow < endIndexRow && startIndexCol < endIndexCol){
        // traveling to the right
        for( let i = startIndexCol; i < endIndexCol; i++) {
          console.log("1!")
            console.log(data[startIndexRow][i]);
        }
        // Increment starting row 
        startIndexRow++;
        
        // travel down
        for( let j = startIndexRow; j < endIndexRow; j++) {
          console.log("2!")
            console.log(data[j][endIndexCol-1]);
        }
        // decrement end col index
        endIndexCol--;
        
        // travel to the left
        // this "if" fells a bit hacky. 

        if(startIndexCol < endIndexCol){
          for( let k = endIndexCol-1; k >= startIndexCol; k--) {
            console.log("3!")
            console.log(data[endIndexRow-1][k]);
          }
          // devrement end row index
          endIndexRow--;
        }
        if( startIndexRow < endIndexRow){
        // travel up
          for( let l = endIndexRow-1; l <= startIndexRow; l--) {
            console.log("4!")
            console.log(data[l][startIndexCol]);
          }
          startIndexCol++;
        }
    }    
}
*/
// abave is just to console.log/print the spiral and don't have to worry about breaking out 
// of the while loop
// if I have to break out of the while loop and return the output?
// easiest way was to introdue counter 
// whenever the loop went through the whole matrix, return 

spiral = (matrix) => {
  // edge case
  if(matrix.length === 0) return [];
  let startRow = 0;
  let endRow = matrix.length-1;
  let startCol = 0;
  let endCol = matrix[0].length-1;
  let output = [];
  let counter = matrix.length*matrix[0].length;

  while(true) {
    // travel right 
    for ( let c = startCol; c <= endCol; c ++ ) {
      counter--;
      r = startRow;
      // console.log("right", startCol, endCol, startRow, endRow, matrix[r][c])
      output.push(matrix[r][c]);      
      if(counter <= 0) return output;
    }
    // no need to travel that row any more so take that one out  
    startRow++;
    // travel down 
    for (let r = startRow; r <= endRow; r++ ) {
      c = endCol;
      counter--;
      // console.log("down", startCol, endCol, startRow, endRow, matrix[r][c])
      output.push(matrix[r][c]);
      if(counter <= 0) return output;
    }
    // remove that far right col
    if( startCol < endCol){
      endCol--;
    }
        //travel left
    for ( let c = endCol; c >= startCol; c-- ) {
      counter--;
      console.log(counter)
      r = endRow;
      // console.log("left", startCol, endCol, startRow, endRow, matrix[r][c])
      output.push(matrix[r][c]);
      if(counter <= 0) return output;
    }
    // remove that bottom row
    if( startRow < endRow) {
      endRow--;
    }
    // travel up 
    for (let r = endRow; r >= startRow; r-- ) {
      counter--;
      c = startCol;
      // console.log("up", startCol, endCol, startRow, endRow, matrix[r][c])
      output.push(matrix[r][c]);
      if(counter <= 0) return output;
    }
    // remove the far left col  
    startCol++;
  }
};
console.log(spiral(data));
