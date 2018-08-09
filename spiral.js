let data = [[ 1, 2, 3, 4, 5],
        [ 6, 7, 8, 9, 10],
        [ 11, 12, 13, 14, 15],
        [ 16, 17, 18, 19, 20]]
 
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
console.log(spiral(data));