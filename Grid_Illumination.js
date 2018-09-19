function checkIllumination(N, lamps, queries) {
  // checkIllumination function returns an array of "DARK" or "LIGHT" indicating whether the query cells are illuminated or not.
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
  function toggleLamp(lamp, turnOn) {
    let xCoord = lamp[0];
    let yCoord = lamp[1];
    // negative 45 degree diagnal
    let diagDownCoord = yCoord + xCoord;
    // positive 45 degree diagnal 
    // adding N-1 to handle negative cases  
    let diagUpCoord = yCoord - xCoord + N-1;
   
    if (turnOn) {
      colLampCount[xCoord]++;
      rowLampCount[yCoord]++;
      diagUpLampCount[diagUpCoord]++;
      diagDownLampCount[diagDownCoord]++;
    } else {
      // Ensure count does not go below zero.
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
  function findAdjacentLamps(query) {
    let xCoord = query[0];
    let yCoord = query[1];
    let adjLampLocations = [];
    for( let row = yCoord - 1; row <= yCoord + 1; row++ ){
      for(let col = xCoord -1; col <= xCoord +1; col++){
        let coordString = col + ',' + row;
        // Use set for constant time lookup
        if(lampSet.has(coordString)){
          adjLampLocations.push([col, row]);
        }
      }
    }
    return adjLampLocations;
  }
  /**
   * Returns either "DARK" or "LIGHT" indicating wheater or not the provided query coordinate is illuminated.
   * @param {number[]} query The query coordinate.
   * @return {string[]} "LIGHT" if the query coordinate is illuminated, or else "DARK".
   */
  function checkLightDark(query) {
    let xCoord = query[0];
    let yCoord = query[1];

    // Locate lamps that are adjacent to the query cell.
    let adjLampLocations = findAdjacentLamps(query);
    // Turn off each lamp in the adjacent to the query cell. 
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, false);
    });

    // Check if the query cell is illuminated and return true/false.
    let illumination = null;
    if( colLampCount[xCoord] > 0 ||
        rowLampCount[yCoord] > 0 ||
        diagDownLampCount[yCoord + xCoord] > 0 ||
        diagUpLampCount[yCoord - xCoord + N-1] > 0 ) {
          illumination = "LIGHT";
    } else {
      illumination = "DARK";
    };
    // Turn lamps back on
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, true);
    });
    return illumination;
  }
  // start -- 
  // Turn on all the lamps
  lamps.forEach(lamp => {
    toggleLamp(lamp, true);
    // Store lamp coordinates in lampSet in string
    // "col,row"
    lampSet.add(lamp[0]+','+lamp[1])
  });
  // Iterate query to check if it's illuminated
  // and save the result ("LIGHT"/"DARK") in output.
  queries.forEach(query => {
    output.push(checkLightDark(query));
  });
  
  return output;
}

function checkIllumination(N, lamps, queries) {
  // checkIllumination function returns an array of "DARK" or "LIGHT" indicating whether the query cells are illuminated or not.
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
  function toggleLamp(lamp, turnOn) {
    let xCoord = lamp[0];
    let yCoord = lamp[1];
    // negative 45 degree diagnal
    let diagDownCoord = yCoord + xCoord;
    // positive 45 degree diagnal 
    // adding N-1 to handle negative cases  
    let diagUpCoord = yCoord - xCoord + N-1;
   
    if (turnOn) {
      colLampCount[xCoord]++;
      rowLampCount[yCoord]++;
      diagUpLampCount[diagUpCoord]++;
      diagDownLampCount[diagDownCoord]++;
    } else {
      // Ensure count does not go below zero.
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
  function findAdjacentLamps(query) {
    let xCoord = query[0];
    let yCoord = query[1];
    let adjLampLocations = [];
    for( let row = yCoord - 1; row <= yCoord + 1; row++ ){
      for(let col = xCoord -1; col <= xCoord +1; col++){
        let coordString = col + ',' + row;
        // Use set for constant time lookup
        if(lampSet.has(coordString)){
          adjLampLocations.push([col, row]);
        }
      }
    }
    return adjLampLocations;
  }
  /**
   * Returns either "DARK" or "LIGHT" indicating wheater or not the provided query coordinate is illuminated.
   * @param {number[]} query The query coordinate.
   * @return {string[]} "LIGHT" if the query coordinate is illuminated, or else "DARK".
   */
  function checkLightDark(query) {
    let xCoord = query[0];
    let yCoord = query[1];

    // Locate lamps that are adjacent to the query cell.
    let adjLampLocations = findAdjacentLamps(query);
    // Turn off each lamp in the adjacent to the query cell. 
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, false);
    });

    // Check if the query cell is illuminated and return true/false.
    let illumination = null;
    if( colLampCount[xCoord] > 0 ||
        rowLampCount[yCoord] > 0 ||
        diagDownLampCount[yCoord + xCoord] > 0 ||
        diagUpLampCount[yCoord - xCoord + N-1] > 0 ) {
          illumination = "LIGHT";
    } else {
      illumination = "DARK";
    };
    // Turn lamps back on
    adjLampLocations.forEach(lamp => {
      toggleLamp(lamp, true);
    });
    return illumination;
  }
  // start -- 
  // Turn on all the lamps
  lamps.forEach(lamp => {
    toggleLamp(lamp, true);
    // Store lamp coordinates in lampSet in string
    // "col,row"
    lampSet.add(lamp[0]+','+lamp[1])
  });
  // Iterate query to check if it's illuminated
  // and save the result ("LIGHT"/"DARK") in output.
  queries.forEach(query => {
    output.push(checkLightDark(query));
  });
  
  return output;
}

