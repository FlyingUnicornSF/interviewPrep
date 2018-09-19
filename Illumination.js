/**Grid Illumination: Given an NxN grid with an array of lamp coordinates. 
 * Each lamp provides illumination to every square on their x axis, 
 * every square on their y axis, and every square that lies in their diagonal 
 * (think of a Queen in chess). Given an array of query coordinates, 
 * determine whether that point is illuminated or not. 
 * The catch is when checking a query all lamps adjacent to, or on, 
 * that query get turned off. 
 * The ranges for the variables/arrays were about: 10^3 < N < 10^9, 10^3 < lamps < 10^9, 10^3 < queries < 10^9. */
/**
 * Returns ...
 * @param {number} N The size of the grid.
 * @param {number[][]} lamps An array of lamp coordinates.
 * @param {number[][]} queries An array of query coordinates.
 * @return {number[]} An array of boolean values that indicate whether or not the corrisponding query location is illuminated. 
 */
main = (N, lamps, queries)=>{
  let output = [];
  // An arry that keeps track of number of lamp in a col, row, diagnals
  let colLampCount = new Array(N).fill(0);
  let rowLampCount = new Array(N).fill(0);
  let diagUpLampCount = Array(2 * N - 1).fill(0);
  let diagDownLampCount = Array(2 * N - 1).fill(0);
  // saving locations of lamps. 
  // Although this sucrifise the aux space complexity, it saves time complexity. (constant time look up) 
  let lampSet = new Set();

  /**
   * Turns on/off the lamp at the provided coordinated.
   * @param {Number[]} lamp The lamp coordinate to toggle.
   * @param {boolean} turnOn True when turning on the lamp.
   */
  toggleLamp = (lamp, turnOn)=> {
    let xCoord = lamp[1];
    let yCoord = lamp[0];
    // positive 45 degree diagnal 
    let diagUpCoord = yCoord + xCoord;
    // negative 45 degree diagnal
    // adding N-1 to handle negative cases  
    let diagDownCoord = yCoord - xCoord + N-1;
    
    if (turnOn) {
      colLampCount[xCoord]++;
      rowLampCount[yCoord]++;
      diagUpLampCount[diagUpCoord]++;
      diagDownLampCount[diagDownCoord]++;
    } else {
      colLampCount[xCoord] = Math.max(0, colLampCount[xCoord] - 1);
      rowLampCount[yCoord] = Math.max(0, rowLampCount[yCoord] - 1);
      diagUpLampCount[diagUpCoord] = Math.max(0, diagUpLampCount[diagUpCoord] - 1);
      diagDownLampCount[diagDownCoord] = Math.max(0, diagDownLampCount[diagDownCoord] - 1);
    }
  }
/**
 * Finds lamps adjacent to the provided query coordinate.
 * @param {number[]} query The query coordinate.
 * @return {number[][]} An array of adjacent lamp coordinates.
 */
  findAdjacentLamps = (query)=>{
    let xCoord = query[1];
    let yCoord = query[0];
    let adjLampLocations = [];
    for( let row = yCoord - 1; row <= yCoord + 1; row++ ){
      for(let col = xCoord -1; col <= xCoord +1; col++){
        let coordString = row + ',' + col;
        // Use set for constant time lookup
        if(lampSet.has(coordString)){
          adjLampLocations.push([row, col]);
        }
      }
    }
    return adjLampLocations;
  }
  /**
   * Returns a boolean that indicates wheater or not the provided query coordinate is illuminated.
   * @param {number[]} query The query coordinate.
   * @return {boolean} True if the query coordinate is illuminated, or else false.
   */
  checkIllumination = (query)=>{
    let xCoord = query[1];
    let yCoord = query[0];

    // ASSUMPTION 1: the lamp turns off while checking if the coordinate is illuminated or not
    // if there is one, turn it off
    let adjLampLocations = findAdjacentLamps(query);
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, false);
    });

    // Check if the coordinate is illuminated and return true/false.
    let isIlluminated = (colLampCount[xCoord] > 0 ||
                         rowLampCount[yCoord] > 0 ||
                         diagUpLampCount[yCoord + xCoord] > 0 ||
                         diagDownLampCount[yCoord - xCoord + N] > 0);

    // ASSUMPTION 2: the lamp turns back on after the check
    // Turn lamps back on
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, true);
    });
    return isIlluminated;
  }
  // start -- 
  // Turn on all the lamps
  lamps.forEach(lamp => {
    toggleLamp(lamp, true);
    // Store lamp coordinates in lampSet in string
    // "row,col"
    lampSet.add(lamp[0]+','+lamp[1])
    console.log(lampSet)
  });
  console.log(colLampCount, rowLampCount, diagUpLampCount, diagDownLampCount);
  // Iterate query to check if it's illuminated
  // and save the result (true/false) in output.
  queries.forEach(query => {
    output.push(checkIllumination(query));
  });

  return output;
}

// this set should return [true, true, ture, false]
let N = 5;
let lamps = [[1,1], [3,4], [4,4]];
let queries = [[0,1], [1,2], [4,0], [4,3]];

// one lamp and query is on the lamp
// let N = 5;
// let lamps = [[1,1]]
// let queries = [[1,1]]

// let N = 6;
// let lamps = [[1,4], [3,3]]
// let queries = [[2,3]]

console.log(main(N, lamps, queries));
