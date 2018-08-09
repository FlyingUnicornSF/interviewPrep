/*input
dungeon = [[-2,  -5,  10],
          [-3, -10,  30],
          [ 3,   1,  -5]]

output: 7
traverse right and down
at least one health score */

// start[0][0]
/* and which one direction is less negative point
then which one direction is less negative
*/

function dungeonescape(metrix){
  rows = metrix.length;
  col = metrix[0].length;

  current = metrix[0][0]
  while( i < col && j < rows ) {
      // check if this is out of bound or not 
    let currentRight = metrix[i][j+1]
    let currentLeft = metrix[i+1][j]
    if( currentRight <  currentLeft) {
      current = currentRight
    } else if (currentRight <  currentLeft){

    }
  } 

}

