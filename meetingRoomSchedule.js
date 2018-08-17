//https://www.interviewcake.com/question/javascript/merging-ranges
//https://leetcode.com/problems/merge-intervals/description/
//https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/
/* intput and output are array
could look like this 
intput: [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
output:   [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]
or  
Input: [[1,3],[2,6],[8,10],[15,18]]
Input: [[1,3],[2,6],[8,10],[9,18]]
Output: [[1,6],[8,10],[15,18]]
*/
// either ranges are sorted by the start time or 
// sort it by the start time O (N log N)
mergeRanges = (arr)=> {
  let output = [];
  let prev = [];
  let current = [];
  // edge cares
  if(arr.length < 2) { return arr; }
  // to avoid complication from being out of range
  // start from i = 1
  prev = arr[0];
  for ( let i = 1; i < arr.length; i ++) {
    current = arr[i];
    if( prev[1] < current[0]) {
      // when the start time is later than the prev end time
      // console.log("prev, current", prev, current)
      output.push(prev);
      prev = current;
    } else {
      // when the start time is before the end time
      // [1, 2, 3, 6]
      if( current[1] <= prev[1]) {
        // if the current end time is earlier than or equal to the previous end time.
        // use the prev end time
        prev = [prev[0], prev[1]];
      } else {
        // if the current end time is later than the previous end time. 
        // up date the end time 
        prev = [prev[0], current[1]]; 
      }
    }
  }
  // at the end of the loop, add the last element into the output
  output.push(current);
  return output;

}

console.log(mergeRanges([[1,3],[2,6],[8,10],[15,18]]))
console.log(mergeRanges([[ 0, 1 ],[3, 5 ],[4, 8 ],[9, 10 ],[10,12 ]]))
console.log(mergeRanges([[ 0, 3],[3, 5 ],[6, 8 ],[9, 10 ],[10,12 ]]))
console.log(mergeRanges([[ 0, 3]]))